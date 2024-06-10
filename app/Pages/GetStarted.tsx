import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

import {
  useActiveAccount,
  useConnect,
  useDisconnect,
  useActiveWallet,
  useAutoConnect,
  useWalletBalance,
  useConnectedWallets,
  useSetActiveWallet,
} from "thirdweb/react";
import {
  getUserEmail,
  inAppWallet,
  preAuthenticate,
} from "thirdweb/wallets/in-app";
import { chain, client } from "@/constants/thirdweb";
import { shortenAddress } from "thirdweb/utils";
import { ThemedButton } from "@/components/ThemedButton";
import { useEffect, useState } from "react";
import { ThemedInput } from "@/components/ThemedInput";
import {
  InAppWalletSocialAuth,
  Wallet,
  createWallet,
  getWalletInfo,
} from "thirdweb/wallets";
import { useThemeColor } from "@/hooks/useThemeColor";
//API

const wallets = [
  inAppWallet({
    smartAccount: {
      chain,
      sponsorGas: true,
    },
  }),
  createWallet("io.metamask"),
];
const externalWallets = wallets.slice(1);

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/title.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <ThemedText type="title">Welcome To BlockVerse</ThemedText>
      </ThemedView>
      <ConnectSection />
    </ParallaxScrollView>
  );
}

function ConnectSection() {
  const wallet = useActiveWallet();
  const autoConnect = useAutoConnect({
    client,
    wallets,
  });
  const autoConnecting = autoConnect.isLoading;

  if (autoConnecting) {
    return (
      <ThemedView style={{ padding: 24 }}>
        <ActivityIndicator />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.stepContainer}>
      {wallet ? (
        <>
          <ConnectedSection />
        </>
      ) : (
        <ThemedView style={{ gap: 16 }}>
          <ThemedText type="defaultSemiBold">
            Connet your your gmail account
          </ThemedText>
          <ConnectInAppWallet />
          <ThemedView style={{ height: 12 }} />
          <ThemedText type="defaultSemiBold">
            Connect your MetaMask Wallet
          </ThemedText>
          <ThemedView style={styles.rowContainer}>
            {externalWallets.map((w) => (
              <ConnectExternalWallet key={w.id} {...w} />
            ))}
          </ThemedView>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const oAuthOptions: InAppWalletSocialAuth[] = ["google"];

function ConnectInAppWallet() {
  return (
    <>
      <ThemedView style={[styles.rowContainer]}>
        {oAuthOptions.map((auth) => (
          <ConnectWithSocial key={auth} auth={auth} />
        ))}
      </ThemedView>
    </>
  );
}

function ConnectWithSocial(props: { auth: InAppWalletSocialAuth }) {
  const bgColor = useThemeColor({}, "border");
  const { connect, isConnecting } = useConnect();
  const strategy = props.auth;
  const connectInAppWallet = async () => {
    await connect(async () => {
      const wallet = inAppWallet({
        smartAccount: {
          chain,
          sponsorGas: true,
        },
      });
      await wallet.connect({
        client,
        strategy,
        redirectUrl: "com.thirdweb.demo://",
      });
      return wallet;
    });
  };

  return (
    <ThemedView
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: bgColor,
        borderRadius: 6,
        height: 60,
      }}
    >
      {isConnecting ? (
        <ActivityIndicator />
      ) : (
        <TouchableOpacity
          key={strategy}
          onPress={connectInAppWallet}
          disabled={isConnecting}
        >
          <Image source={getSocialIcon(strategy)} resizeMode="center" />
        </TouchableOpacity>
      )}
    </ThemedView>
  );
}

function ConnectExternalWallet(wallet: Wallet) {
  const { connect, isConnecting, error } = useConnect();
  const [walletName, setWalletName] = useState<string | null>(null);
  const [walletImage, setWalletImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchWalletName = async () => {
      const [name, image] = await Promise.all([
        getWalletInfo(wallet.id).then((info) => info.name),
        getWalletInfo(wallet.id, true),
      ]);
      setWalletName(name);
      setWalletImage(image);
    };
    fetchWalletName();
  }, [wallet]);

  const connectExternalWallet = async () => {
    await connect(async () => {
      await wallet.connect({
        client,
      });
      return wallet;
    });
  };

  return (
    walletImage &&
    walletName && (
      <ThemedView
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isConnecting && !error ? (
          <ActivityIndicator style={{ width: 60, height: 60 }} />
        ) : (
          <>
            <Pressable onPress={connectExternalWallet} disabled={isConnecting}>
              <Image
                source={{ uri: walletImage ?? "" }}
                style={{ width: 60, height: 60, borderRadius: 6 }}
              />
            </Pressable>
            <ThemedText style={{ fontSize: 11 }} type="defaultSemiBold">
              {walletName.split(" ")[0]}
            </ThemedText>
          </>
        )}
      </ThemedView>
    )
  );
}

function ConnectedSection() {
  const router = useRouter();
  const { disconnect } = useDisconnect();
  const account = useActiveAccount();
  const activeWallet = useActiveWallet();
  const setActive = useSetActiveWallet();
  const connectedWallets = useConnectedWallets();
  const balanceQuery = useWalletBalance({
    address: account?.address,
    chain: activeWallet?.getChain(),
    client,
  });
  const [email, setEmail] = useState("");
  console.log("balanceQuery", balanceQuery);
  useEffect(() => {
    const fetchEmail = async () => {
      if (activeWallet?.id === "inApp") {
        try {
          const email = await getUserEmail({
            client,
          });
          if (email) {
            setEmail(email);
          }
        } catch (e) {
          console.log("catching error @ 261", e);
          // no email
        }
      } else {
        setEmail("");
      }
    };
    fetchEmail();
  }, [account]);

  const switchWallet = async () => {
    const activeIndex = connectedWallets.findIndex(
      (w) => w.id === activeWallet?.id
    );
    const nextWallet =
      connectedWallets[(activeIndex + 1) % connectedWallets.length];
    if (nextWallet) {
      await setActive(nextWallet);
    }
  };

  return (
    <>
      {account ? (
        <>
          <ThemedText>Connected Wallets: </ThemedText>
          <ThemedView style={{ gap: 2 }}>
            {connectedWallets.map((w, i) => (
              <ThemedText key={w.id + i} type="defaultSemiBold">
                - {w.id} {w.id === activeWallet?.id ? "✅" : ""}
              </ThemedText>
            ))}
          </ThemedView>
          <ThemedView style={{ height: 12 }} />
          {email && activeWallet?.id === "inApp" && (
            <ThemedText>
              Email: <ThemedText type="defaultSemiBold">{email}</ThemedText>
            </ThemedText>
          )}
          <ThemedText>
            Address:{" "}
            <ThemedText type="defaultSemiBold">
              {shortenAddress(account.address)}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Chain:{" "}
            <ThemedText type="defaultSemiBold">
              {activeWallet?.getChain()?.name || "Unknown"}
            </ThemedText>
          </ThemedText>
          <ThemedText>
            Balance:{" "}
            {balanceQuery.data && (
              <ThemedText type="defaultSemiBold">
                {`${balanceQuery.data?.displayValue.slice(0, 8)} ${
                  balanceQuery.data?.symbol
                }`}
              </ThemedText>
            )}
          </ThemedText>
          <ThemedView style={{ height: 12 }} />
          {connectedWallets.length > 1 && (
            <ThemedButton
              variant="secondary"
              title="Switch Wallet"
              onPress={switchWallet}
            />
          )}

          <ThemedButton
            title="Sign message"
            variant="secondary"
            onPress={async () => {
              if (account) {
                account.signMessage({ message: "hello world" });
              }
              router.push("/Pages/Welcome");
            }}
          />

          <ThemedButton
            title="Disconnect"
            variant="secondary"
            onPress={async () => {
              if (activeWallet) {
                disconnect(activeWallet);
              }
            }}
          />
          <ThemedView style={{ height: 12 }} />
          <ThemedText type="defaultSemiBold">Connect another wallet</ThemedText>
          <ThemedView style={styles.rowContainer}>
            {externalWallets
              .filter(
                (w) => !connectedWallets.map((cw) => cw.id).includes(w.id)
              )
              .map((w, i) => (
                <ConnectExternalWallet key={w.id + i} {...w} />
              ))}
          </ThemedView>
        </>
      ) : (
        <>
          <ThemedText>Connect to mint an NFT.</ThemedText>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "space-evenly",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
});

function getSocialIcon(strategy: string) {
  return require("@/assets/images/google.png");
}

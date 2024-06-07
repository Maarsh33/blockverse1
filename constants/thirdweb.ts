import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const clientId = process.env.EXPO_PUBLIC_THIRDWEB_CLIENT_ID!;

if (!clientId) {
  throw new Error(
    "Missing EXPO_PUBLIC_THIRDWEB_CLIENT_ID - make sure to set it in your .env file"
  );
}

export const client = createThirdwebClient({
  clientId,
});

// export const chain = baseSepolia;
export const chain = defineChain(11155111);

export const contract = getContract({
  client,
  address: "0xF03D9e90Ba5c429CdC83f011F37BC7005202F2C0",
  chain: defineChain(11155111),
});

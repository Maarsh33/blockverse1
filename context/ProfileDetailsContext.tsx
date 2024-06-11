import React, { createContext, useState, useContext, ReactNode } from "react";

interface ProfileDetails {
  email: string;
  key: string;
  value: string;
  timestamp: string;
  DOB: string;
  gender: string;
}

interface ProfileDetailsContextProps {
  profileDetails: ProfileDetails | null;
  setProfileDetails: React.Dispatch<
    React.SetStateAction<ProfileDetails | null>
  >;
}

const ProfileDetailsContext = createContext<
  ProfileDetailsContextProps | undefined
>(undefined);

export const useProfileDetails = () => {
  const context = useContext(ProfileDetailsContext);
  if (!context) {
    throw new Error(
      "useProfileDetails must be used within a ProfileDetailsProvider"
    );
  }
  return context;
};

export const ProfileDetailsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [profileDetails, setProfileDetails] = useState<ProfileDetails | null>(
    null
  );

  return (
    <ProfileDetailsContext.Provider
      value={{ profileDetails, setProfileDetails }}
    >
      {children}
    </ProfileDetailsContext.Provider>
  );
};



import React, { ReactNode } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = React.createContext<any>({} as any);

interface SomeProps {
    children: ReactNode
}

const AuthProvider = ({ children }: SomeProps) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
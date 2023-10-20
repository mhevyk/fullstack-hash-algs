import { useContext } from "react";
import { HashAlgorithmContext } from "./HashAlgorithmContext";

export function useHashAlgorithm() {
  const context = useContext(HashAlgorithmContext);
  if (context === null) {
    throw new Error(
      "useHashAlgorithm must be used within HashAlgorithmContext.Provider"
    );
  }

  return context;
}

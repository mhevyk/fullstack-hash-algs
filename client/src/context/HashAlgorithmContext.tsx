import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { HashAlgorithm } from "../api/types";

type HashAlgorithmContextType = {
  hashAlgorithm: HashAlgorithm;
  setHashAlgorithm: Dispatch<SetStateAction<HashAlgorithm>>;
};

export const HashAlgorithmContext =
  createContext<HashAlgorithmContextType | null>(null);

export function HashAlgorithmProvider({ children }: PropsWithChildren) {
  const [hashAlgorithm, setHashAlgorithm] = useState<HashAlgorithm>("md5");

  return (
    <HashAlgorithmContext.Provider value={{ hashAlgorithm, setHashAlgorithm }}>
      {children}
    </HashAlgorithmContext.Provider>
  );
}

import { ReactNode } from "react";

export interface PropsTypes {
  children: ReactNode;
  redirectHome: () => void;
}

export interface StateTypes {
  hasError: boolean;
}

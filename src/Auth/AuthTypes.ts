import { ReactNode } from "react";

export type AuthContextProps = {
  token: string | null;
  user: User | null;
  login: ({ token, name, email }: LoginFunctionProps) => void;
  logout: () => void;
};

export type LoginFunctionProps = {
  token: string;
} & User;

export type AuthProviderProps = {
  children: ReactNode;
};

export interface User {
  id: number;
  name: string;
  email: string;
}

export type DecodedToken = {
  exp: number;
};

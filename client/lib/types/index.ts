import { ParticleProvider } from "@particle-network/provider";
import * as React from "react";
import { Contract } from "web3";
import ParticleService from "../utils/particle-service";

export type AppContextState = {
  address: string;
  particleService: ParticleService;
  provider: ParticleProvider;
  userSBT: Contract<any>;
  user: User;
};

export type AppContextValue = {
  state: AppContextState;
  setState: React.Dispatch<React.SetStateAction<AppContextState>>;
};

export type User = {
  id: number;
  name: string;
  locked?: boolean;
  ipfsHash?: string;
  owner: string;
  createdAt: number;
  updatedAt: number;
  interests: string[];
  profileUrl: string;
};

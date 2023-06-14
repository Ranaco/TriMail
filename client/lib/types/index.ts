import { ParticleNetwork } from "@particle-network/auth";
import { ParticleConnect } from "@particle-network/connect";
import { ParticleProvider } from "@particle-network/provider";
import * as React from "react";
import ParticleService from "../utils/particle-service";

export type AppContextState = {
  address: string;
  particleService: ParticleService;
  provider: ParticleProvider;
  userSBT: any;
};

export type AppContextValue = {
  state: AppContextState;
  setState: React.Dispatch<React.SetStateAction<AppContextState>>;
};

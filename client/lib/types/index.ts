import { ParticleNetwork } from "@particle-network/auth";
import { ParticleConnect } from "@particle-network/connect";
import * as React from "react";

export type AppContextState = {
  address: string;
  particle: ParticleConnect;
  particleAuth: ParticleNetwork;
};

export type AppContextValue = {
  state: AppContextState;
  setState: React.Dispatch<React.SetStateAction<AppContextState>>;
};

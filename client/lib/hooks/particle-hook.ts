import { ParticleNetwork } from "@particle-network/auth";
import { EthereumGoerli, PolygonMumbai } from "@particle-network/common";
import { ParticleConnect } from "@particle-network/connect";
import { ParticleProvider } from "@particle-network/provider";
import { ethers } from "ethers";

const APPID = process.env.NEXT_PUBLIC_APP_ID;
const CLIENTKEY = process.env.NEXT_PUBLIC_CLIENT_KEY;
const PROJECTID = process.env.NEXT_PUBLIC_PROJECT_ID;

interface ParticleServiceInterface {
  logOut: Function;
  login: Function;
  address?: string;
}

class ParticleService implements ParticleServiceInterface {
  address?: string;

  particleAuth = new ParticleNetwork({
    appId: APPID,
    clientKey: CLIENTKEY,
    projectId: PROJECTID,
    chainName: "Ethereum",
    chainId: 1,
  });

  particle: ParticleConnect = new ParticleConnect({
    appId: APPID,
    clientKey: CLIENTKEY,
    projectId: PROJECTID,
    chains: [PolygonMumbai, EthereumGoerli],
  });

  particleProvider: ParticleProvider = new ParticleProvider(
    this.particleAuth.auth
  );

  ethersProvider = new ethers.providers.Web3Provider(
    this.particleProvider,
    "any"
  );
  login = () => {
    this.particle.connect().then(() => {
      this.particleAuth.auth.getEVMAddress().then((e) => {
        return e;
      });
    });
  };

  logOut = () => {
    this.particle.disconnect();
  };
}

export default ParticleService;

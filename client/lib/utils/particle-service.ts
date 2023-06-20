import { ParticleNetwork, WalletEntryPosition } from "@particle-network/auth";
import { EthereumGoerli, PolygonMumbai } from "@particle-network/common";
import { ParticleConnect } from "@particle-network/connect";
import { ParticleProvider } from "@particle-network/provider";
import { NextRouter, Router } from "next/router";

const APPID = process.env.NEXT_PUBLIC_APP_ID;
const CLIENTKEY = process.env.NEXT_PUBLIC_CLIENT_KEY;
const PROJECTID = process.env.NEXT_PUBLIC_PROJECT_ID;

interface ParticleServiceInterface {
  logOut();
  login(): Promise<string | void>;
  particleProvider: ParticleProvider;
  address?: string;
}

class ParticleService implements ParticleServiceInterface {
  address?: string;
  private router: NextRouter;

  constructor(router: Router) {
    this.router = router;
  }

  private particleAuth = new ParticleNetwork({
    appId: APPID,
    clientKey: CLIENTKEY,
    projectId: PROJECTID,
    chainName: "Polygon",
    chainId: 80001,
  });

  private particle: ParticleConnect = new ParticleConnect({
    appId: APPID,
    clientKey: CLIENTKEY,
    projectId: PROJECTID,
    chains: [PolygonMumbai, EthereumGoerli],
    particleWalletEntry: {
      displayWalletEntry: true,
      defaultWalletEntryPosition: WalletEntryPosition.BR,
      supportChains: [PolygonMumbai, EthereumGoerli],
    },
  });

  particleProvider: ParticleProvider = new ParticleProvider(
    this.particleAuth.auth
  );

  login = async (): Promise<string> => {
    try {
      await this.particle.connect();
      const address = await this.particleAuth.auth.getEVMAddress();
      return address;
    } catch (err) {
      this.router.push("/");
      console.log(err);
    }
  };

  logOut = () => {
    this.particle.disconnect().then(() => {
      this.router.replace("/");
    });
  };
}

export default ParticleService;

import { Polybase } from "@polybase/client";
import { ethPersonalSign } from "@polybase/eth";
import { Wallet } from "ethers";

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const wallet = new Wallet(PRIVATE_KEY);

const triMailDB = new Polybase({
  defaultNamespace:
    "pk/0xe3f04fb2519eea7f20aa7cf7152e3c7354aa73f1746d826245cfb94cce3860b93d79f68ede17637ec712197b9e254255410595d2cfa3fb59f142ba388ebbf84a/Tri",
});

triMailDB.signer((data) => {
  return {
    h: "eth-personal-sign",
    sig: ethPersonalSign(wallet.privateKey, data),
  };
});

export default triMailDB;

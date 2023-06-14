import UserSBT from "../build/UserSBT.json";
import Web3 from "web3";
import { Contract } from "web3";

const loadContract = (web3: Web3): Contract<any> => {
  const USER_SBT = process.env.NEXT_PUBLIC_USER_SBT;
  const UserSBTAbi = UserSBT.abi;

  if (web3 !== undefined) {
    try {
      const userSBT = new web3.eth.Contract(UserSBTAbi, USER_SBT);
      return userSBT;
    } catch (err) {
      throw new Error(err);
    }
  }
};

export default loadContract;

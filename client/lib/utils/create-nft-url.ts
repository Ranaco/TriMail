const createNftUrl = (recordID: number) => {
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_POLY_NAMESPACE;
  const url = `https://testnet.polybase.xyz/v0/collections/${PUBLIC_KEY.replaceAll(
    "/",
    "%2F"
  )}%2FUserSBT/records/${recordID}?format=nft`;
  return url;
};

export default createNftUrl;

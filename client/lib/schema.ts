import { triMailDB } from "./utils/polybase-service";

const DB_NAMESPACE = process.env.NEXT_PUBLIC_POLY_NAMESPACE;

triMailDB.applySchema(
  `
@public
collection UserSBT {
  id: string;
  name: string;
  locked: bool;
  ipfsHash: string;
  owner: string;
  createdAt: number;
  updatedAt: number;

  @index(name, id, owner)

  constructor(id: string, name: string,
              locked: boolean, ipfsHash: string,
              owner: string, createdAt: number,
              updatedAt: number
             ) {
               this.id = id;
               this.name = name;
               this.locekd = locked;
               this.ipfsHash = ipfsHash;
               this.owner = owner;
               this.updatedAt = updatedAt;
             }

  updateName(name: string){
    this.name = name;
  }

  updateUpdatedAt(updatedAt: string){
    this.updatedAt = updatedAt;
  }

  updateIpfsHash(ipfsHash: string){
    this.ipfsHash = ipfsHash;
  }
}
`,
  DB_NAMESPACE
);

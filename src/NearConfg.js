import { keyStores, Near } from "near-api-js";

const keyStore = new keyStores.InMemoryKeyStore();

const testnetConfig = {
  headers: {},
  helperUrl: "https://helper.testnet.near.org",
  keyStore,
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
};

export const nearTestnet = new Near(testnetConfig);

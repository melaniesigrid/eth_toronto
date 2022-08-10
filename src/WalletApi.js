import { WalletConnection } from 'near-api-js';
import { nearTestNet } from './NearConfg';

export const walletAPI = new WalletConnection(
  nearTestNet,
  "melanies"
);
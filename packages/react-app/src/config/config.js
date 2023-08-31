import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x81200faE6a35379626eDe036a49BA7b38C997CA1";
//0x2Fec0D98Cb2d151D12fb9DC29a57E9cAa5702f80 //0xB884274e381F683b220B7524C755143676aF97c3
export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/A3bxRfFEuKjzlPMhG8v8x4pgfpzBNg2u",
  },
};

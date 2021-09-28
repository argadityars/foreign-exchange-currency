import { network } from "../utils/network";

export const getLatest = (symbols: string) => {
  return network.get("/v1/latest", { params: { symbols } });
};

export const getSymbols = () => {
  return network.get("/v1/symbols");
};

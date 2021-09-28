export const getSymbolInfo = (
  code: string,
  symbols: { [key: string]: string },
) => {
  return `${code} - ${symbols[code]}`;
};

export const getRateBySymbol = (
  symbol: string,
  rates: { [key: string]: number },
) => {
  return rates[symbol];
};

export const getConversion = (input: number, rate: number) => {
  return input * rate;
};

export const filterAvailableSymbols = (
  currentSymbols: string[],
  allSymbols: { [key: string]: string },
) => {
  return Object.keys(allSymbols)
    .filter((symbol) => !currentSymbols.includes(symbol))
    .map((item) => ({
      value: item,
      label: allSymbols[item],
    }));
};

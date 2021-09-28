import React from "react";
import { DEFAULT_AVAILABLE_SYMBOLS } from "../../constants/exchange";
import { getLatest, getSymbols } from "../../services/exchange";
import "../../styles/app.scss";
import { filterAvailableSymbols } from "../../utils/conversion";
import { CurrencyCard, CurrencyInfo } from "./components/CurrencyCard";
import { CurrencySelect } from "./components/CurrencySelect";
import { ExchangeInput } from "./components/ExchangeInput";

function ExchangePage() {
  const [convertedSymbols, setConvertedSymbols] = React.useState(
    DEFAULT_AVAILABLE_SYMBOLS,
  );
  const [symbols, setSymbols] = React.useState<{ [key: string]: string }>({});
  const [rates, setRates] = React.useState<CurrencyInfo[]>([]);
  const [amount, setAmount] = React.useState("10");
  const [error, setError] = React.useState(null);
  const [isLoading, setIsloading] = React.useState(false);

  const fetchSymbols = () => {
    setIsloading(true);
    setError(null);
    getSymbols()
      .then((res) => {
        if (res.data.error) throw res.data.error;
        setSymbols(res.data.symbols);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const fetchLatest = () => {
    setError(null);
    setIsloading(true);
    getLatest(convertedSymbols.join(","))
      .then((res) => {
        if (res.data.error) throw res.data.error;

        setRates(
          Object.keys(res.data.rates).map((symbol) => ({
            symbol,
            rate: res.data.rates[symbol],
            name: symbols[symbol],
          })),
        );
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const onSymbolAdd = (symbol: string) => {
    setConvertedSymbols((prevState) => {
      return [...prevState, symbol];
    });
  };

  const onSymbolRemove = (symbol: string) => {
    setConvertedSymbols((prevState) => {
      return prevState.filter((item) => item !== symbol);
    });
  };

  React.useEffect(() => {
    fetchSymbols();
  }, []);

  React.useEffect(() => {
    fetchLatest();
  }, [convertedSymbols]);

  return (
    <div className="app-container">
      <div className="container">
        <div className="py-5">
          {error && (
            <div className="alert alert-danger" role="alert">
              Unable to load data, please try again later
            </div>
          )}

          <div hidden={!!error}>
            <ExchangeInput amount={amount} onAmountChange={onAmountChange} />

            {isLoading && <p>Loading...</p>}

            {rates.map((rate) => {
              return (
                <CurrencyCard
                  currencyInfo={rate}
                  baseSymbol={"EUR"}
                  baseAmount={Number(amount)}
                  onRemove={onSymbolRemove}
                />
              );
            })}

            <div className="mt-4">
              <CurrencySelect
                onSubmit={onSymbolAdd}
                symbols={filterAvailableSymbols(convertedSymbols, symbols)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangePage;

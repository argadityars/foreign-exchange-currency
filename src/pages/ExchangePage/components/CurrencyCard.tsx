import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import { getConversion } from "../../../utils/conversion";

export interface CurrencyInfo {
  symbol: string;
  name: string;
  rate: number;
}

interface CurrencyCardProps {
  currencyInfo: CurrencyInfo;
  baseSymbol: string;
  baseAmount: number;
  onRemove: (symbol: string) => void;
}

export const CurrencyCard = ({
  currencyInfo,
  baseSymbol,
  baseAmount,
  onRemove,
}: CurrencyCardProps) => {
  return (
    <Card className="conversion-card mb-2">
      <div className="d-flex justify-content-between">
        <div className="w-100">
          <div className="d-flex justify-content-between w-100">
            <h5>{currencyInfo.symbol}</h5>
            <h5>{getConversion(baseAmount, currencyInfo.rate)}</h5>
          </div>
          <p className="fw-bold fw-italic mb-0">
            {currencyInfo.symbol} - {currencyInfo.name}
          </p>
          <p className="mb-0">
            1 {baseSymbol} = {currencyInfo.symbol} {currencyInfo.rate}
          </p>
        </div>

        <div className="card-remove-btn">
          <Button
            className="btn-danger p-0 rounded-circle"
            type="submit"
            onClick={() => onRemove(currencyInfo.symbol)}>
            X
          </Button>
        </div>
      </div>
    </Card>
  );
};

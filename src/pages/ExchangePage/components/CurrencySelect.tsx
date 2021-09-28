import React, { useState } from "react";
import { Button } from "../../../components/Button/Button";
import InputGroup from "../../../components/Input/InputGroup";
import SelectInput from "../../../components/Input/SelectInput";

enum InputState {
  "AddMore",
  "SelectCurrency",
}

interface CurrencySelectProps {
  onSubmit: (symbol: string) => void;
  symbols: { value: string; label: string }[];
}

export const CurrencySelect = ({ onSubmit, symbols }: CurrencySelectProps) => {
  const [inputState, setInputState] = useState(InputState.AddMore);
  const [selectedSymbol, setSelectedSymbol] = useState("");

  const onAddMore = () => {
    setInputState(InputState.SelectCurrency);
  };

  const onAddCurrency = () => {
    onSubmit(selectedSymbol);
    setInputState(InputState.AddMore);
    setSelectedSymbol("");
  };

  const onValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSymbol(event.target.value);
  };

  return (
    <>
      {inputState === InputState.AddMore && (
        <Button className="btn-dark w-100" type="submit" onClick={onAddMore}>
          Add more currency
        </Button>
      )}
      {inputState === InputState.SelectCurrency && (
        <InputGroup>
          <SelectInput value={selectedSymbol} onChange={onValueChange}>
            <SelectInput.Option value="">Choose...</SelectInput.Option>
            {symbols.map((symbol) => {
              return (
                <SelectInput.Option
                  key={symbol.value}
                  value={
                    symbol.value
                  }>{`${symbol.value} - ${symbol.label}`}</SelectInput.Option>
              );
            })}
          </SelectInput>

          <Button className="btn-dark" type="button" onClick={onAddCurrency}>
            Submit
          </Button>
        </InputGroup>
      )}
    </>
  );
};

import React from "react";
import InputGroup from "../../../components/Input/InputGroup";
import { Label } from "../../../components/Input/Label";
import { TextInput } from "../../../components/Input/TextInput";

interface ExchangeInputProps {
  amount: string;
  onAmountChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ExchangeInput = ({
  amount,
  onAmountChange,
}: ExchangeInputProps) => {
  return (
    <div className="mb-4">
      {/* Hardcoded Euro, because free tier of the API only allow EUR symbols as a base */}
      <Label className="h5">Euro</Label>
      <InputGroup>
        <InputGroup.Text>EUR</InputGroup.Text>
        <TextInput
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={onAmountChange}
        />
      </InputGroup>
    </div>
  );
};

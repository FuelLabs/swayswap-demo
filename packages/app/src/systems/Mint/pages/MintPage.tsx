import { useState } from "react";
import { BiCoin } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";

import { TOKEN_ID, MINT_AMOUNT, DECIMAL_UNITS } from "~/config";
import {
  formatUnits,
  PreviewItem,
  PreviewTable,
  useEthBalance,
  ZERO,
} from "~/systems/Core";
import { useMint } from "~/systems/Mint";
import { Button, Card, Input, NumberInput } from "~/systems/UI";

export function MintPage() {
  const [tokenId, setTokenId] = useState(TOKEN_ID);
  const [amount, setAmount] = useState<string>(`${MINT_AMOUNT}`);
  const mint = useMint({ tokenId, amount });
  const balance = useEthBalance();

  return (
    <Card className="min-w-[auto] max-w-[400px]">
      <Card.Title>
        <BiCoin className="text-primary-500" />
        Mint
      </Card.Title>
      <div className="text-gray-300">
        Receive new token types for testing purposes by adding the contract Id
        and amount below.
      </div>
      <div className="faucetWidget--formRow">
        <label className="faucetWidget--label">Contract Id</label>
        <Input
          isReadOnly
          value={tokenId}
          placeholder="Type contract id"
          onChange={setTokenId}
        />
      </div>
      <div className="faucetWidget--formRow">
        <label className="faucetWidget--label">Amount to receive</label>
        <NumberInput
          className="px-2"
          value={amount}
          onChange={setAmount}
          decimalScale={DECIMAL_UNITS}
          isAllowed={(values) => (values.floatValue || 0) <= MINT_AMOUNT}
        />
      </div>
      <div className="flex justify-center mt-2">
        <BsArrowDown size={20} className="text-gray-400" />
      </div>
      <PreviewTable className="mt-2 bg-transparent">
        <PreviewItem
          className="text-gray-300 text-sm"
          title="Transaction fee:"
          value={`${formatUnits(mint.networkFee || 0)} ETH`}
        />
        <PreviewItem
          className="text-gray-400 text-sm"
          title="Your balance after:"
          value={`${formatUnits(
            (balance.raw || ZERO) - (mint.networkFee || ZERO)
          )} ETH`}
        />
      </PreviewTable>
      <Button
        size="md"
        variant="primary"
        isFull
        className="mt-4"
        isLoading={mint.isLoading}
        onPress={() => mint.handleMint(amount)}
      >
        Mint tokens
      </Button>
    </Card>
  );
}

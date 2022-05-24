import { toNumber } from 'fuels';

import type { SwapInfo } from './types';
import { ActiveInput } from './types';

import { CoinETH } from '~/lib/constants';

export function getPriceImpact(
  outputAmount: bigint,
  inputAmount: bigint,
  reserveInput: bigint,
  reserveOutput: bigint
) {
  const exchangeRateAfter = toNumber(inputAmount) / toNumber(outputAmount);
  const exchangeRateBefore = toNumber(reserveInput) / toNumber(reserveOutput);
  return ((exchangeRateAfter / exchangeRateBefore - 1) * 100).toFixed(2);
}

export const calculatePriceImpact = ({
  direction,
  amount,
  coinFrom,
  previewAmount,
  token_reserve,
  eth_reserve,
}: SwapInfo) => {
  // If any value is 0 return 0
  if (!previewAmount || !amount || !token_reserve || !eth_reserve) return '0';

  if (direction === ActiveInput.from) {
    if (coinFrom?.assetId !== CoinETH) {
      return getPriceImpact(previewAmount, amount, token_reserve, eth_reserve);
    }
    return getPriceImpact(previewAmount, amount, eth_reserve, token_reserve);
  }
  if (coinFrom?.assetId !== CoinETH) {
    return getPriceImpact(amount, previewAmount, token_reserve, eth_reserve);
  }
  return getPriceImpact(amount, previewAmount, eth_reserve, token_reserve);
};

export const calculatePriceWithSlippage = (
  amount: bigint,
  slippage: number,
  direction: ActiveInput
) => {
  let total = 0;
  if (direction === ActiveInput.from) {
    total = toNumber(amount) * (1 - slippage);
  } else {
    total = toNumber(amount) * (1 + slippage);
  }
  return Math.trunc(total);
};

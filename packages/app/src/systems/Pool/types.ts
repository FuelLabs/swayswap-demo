import type Decimal from 'decimal.js';
import type { BN, CoinQuantity, Wallet } from 'fuels';
import type { QueryClient } from 'react-query';

import { ZERO } from '../Core';
import type { TransactionCost } from '../Core/utils/gas';

import type { Coin, Maybe } from '~/types';
import type { ExchangeContractAbi } from '~/types/contracts';
import type { PoolInfoOutput } from '~/types/contracts/ExchangeContractAbi';

export enum AddLiquidityActive {
  'from' = 'from',
  'to' = 'to',
}

export type LiquidityPreview = {
  liquidityTokens: BN;
  requiredAmount: BN;
};

export type AddLiquidityMachineContext = {
  client: QueryClient;
  coinFrom: Coin;
  coinTo: Coin;
  active: Maybe<AddLiquidityActive>;
  fromAmount: Maybe<BN>;
  toAmount: Maybe<BN>;
  contract: Maybe<ExchangeContractAbi>;
  wallet: Maybe<Wallet>;
  liquidityPreview: LiquidityPreview;
  poolShare: Decimal;
  poolInfo: PoolInfoOutput;
  balances: Array<CoinQuantity>;
  transactionCost: Maybe<TransactionCost>;
};

export const liquidityPreviewEmpty: LiquidityPreview = {
  liquidityTokens: ZERO,
  requiredAmount: ZERO,
};

export const poolInfoEmpty: PoolInfoOutput = {
  eth_reserve: ZERO,
  lp_token_supply: ZERO,
  token_reserve: ZERO,
};

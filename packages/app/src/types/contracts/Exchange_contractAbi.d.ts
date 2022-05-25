/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
} from 'fuels';

export type ContractIdInput = { value: string };

export type ContractId = { value: string };

export type RemoveLiquidityReturnInput = {
  eth_amount: BigNumberish;
  token_amount: BigNumberish;
};

export type RemoveLiquidityReturn = {
  eth_amount: bigint;
  token_amount: bigint;
};

export type PoolInfoInput = {
  eth_reserve: BigNumberish;
  token_reserve: BigNumberish;
  lp_token_supply: BigNumberish;
};

export type PoolInfo = {
  eth_reserve: bigint;
  token_reserve: bigint;
  lp_token_supply: bigint;
};

export type PreviewInfoInput = { amount: BigNumberish; has_liquidity: boolean };

export type PreviewInfo = { amount: bigint; has_liquidity: boolean };

interface Exchange_contractAbiInterface extends Interface {
  functions: {
    get_balance: FunctionFragment;
    deposit: FunctionFragment;
    withdraw: FunctionFragment;
    add_liquidity: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    get_info: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'get_balance', values: [ContractIdInput]): string;
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish, ContractIdInput]): string;
  encodeFunctionData(
    functionFragment: 'add_liquidity',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'remove_liquidity',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swap_with_minimum',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swap_with_maximum',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'get_info', values?: undefined): string;
  encodeFunctionData(functionFragment: 'get_swap_with_minimum', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'get_swap_with_maximum', values: [BigNumberish]): string;

  decodeFunctionData(functionFragment: 'get_balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'deposit', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'add_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_with_minimum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_with_maximum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_info', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_swap_with_minimum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_swap_with_maximum', data: BytesLike): DecodedValue;
}

export class Exchange_contractAbi extends Contract {
  interface: Exchange_contractAbiInterface;
  functions: {
    get_balance(
      token: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<RemoveLiquidityReturn>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolInfo>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;
  };
  callStatic: {
    get_balance(
      token: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    withdraw(
      amount: BigNumberish,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    add_liquidity(
      min_liquidity: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<RemoveLiquidityReturn>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    get_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolInfo>;

    get_swap_with_minimum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;

    get_swap_with_maximum(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PreviewInfo>;
  };

  get_balance(
    token: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  deposit(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

  withdraw(
    amount: BigNumberish,
    asset_id: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  add_liquidity(
    min_liquidity: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  remove_liquidity(
    min_eth: BigNumberish,
    min_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RemoveLiquidityReturn>;

  swap_with_minimum(
    min: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  swap_with_maximum(
    amount: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  get_info(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoolInfo>;

  get_swap_with_minimum(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PreviewInfo>;

  get_swap_with_maximum(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PreviewInfo>;
}

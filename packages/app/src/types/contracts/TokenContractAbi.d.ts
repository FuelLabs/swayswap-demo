/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  ContractCall,
  ContractCallOptions,
  Overrides,
  BigNumberish,
  BytesLike,
  CallResult,
  ScriptTransactionRequest,
  TransactionResult,
} from 'fuels';

export type AddressInput = { value: string };

export type Address = { value: string };

export type ContractIdInput = { value: string };

export type ContractId = { value: string };

interface TokenContractAbiInterface extends Interface {
  functions: {
    initialize: FunctionFragment;
    set_mint_amount: FunctionFragment;
    mint_coins: FunctionFragment;
    burn_coins: FunctionFragment;
    transfer_coins: FunctionFragment;
    transfer_token_to_output: FunctionFragment;
    mint: FunctionFragment;
    get_mint_amount: FunctionFragment;
    get_balance: FunctionFragment;
    get_token_balance: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'initialize',
    values: [BigNumberish, AddressInput]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'set_mint_amount', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'mint_coins', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'burn_coins', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(
    functionFragment: 'transfer_coins',
    values: [BigNumberish, AddressInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'transfer_token_to_output',
    values: [BigNumberish, ContractIdInput, AddressInput]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'mint', values?: undefined): Uint8Array;
  encodeFunctionData(functionFragment: 'get_mint_amount', values?: undefined): Uint8Array;
  encodeFunctionData(functionFragment: 'get_balance', values?: undefined): Uint8Array;
  encodeFunctionData(functionFragment: 'get_token_balance', values: [ContractIdInput]): Uint8Array;

  decodeFunctionData(functionFragment: 'initialize', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'set_mint_amount', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'mint_coins', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'burn_coins', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'transfer_coins', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'transfer_token_to_output', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'mint', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_mint_amount', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_token_balance', data: BytesLike): DecodedValue;
}

export class TokenContractAbi extends Contract {
  interface: TokenContractAbiInterface;
  prepareCall: {
    initialize(
      mint_amount: BigNumberish,
      address: AddressInput,
      options?: ContractCallOptions
    ): ContractCall;

    set_mint_amount(mint_amount: BigNumberish, options?: ContractCallOptions): ContractCall;

    mint_coins(mint_amount: BigNumberish, options?: ContractCallOptions): ContractCall;

    burn_coins(burn_amount: BigNumberish, options?: ContractCallOptions): ContractCall;

    transfer_coins(
      coins: BigNumberish,
      address: AddressInput,
      options?: ContractCallOptions
    ): ContractCall;

    transfer_token_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      address: AddressInput,
      options?: ContractCallOptions
    ): ContractCall;

    mint(options?: ContractCallOptions): ContractCall;

    get_mint_amount(options?: ContractCallOptions): ContractCall;

    get_balance(options?: ContractCallOptions): ContractCall;

    get_token_balance(asset_id: ContractIdInput, options?: ContractCallOptions): ContractCall;
  };
  submit: {
    initialize(
      mint_amount: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    set_mint_amount(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_coins(
      coins: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_token_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    mint(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    get_mint_amount(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

    get_balance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

    get_token_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };
  submitResult: {
    initialize(
      mint_amount: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    set_mint_amount(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    transfer_coins(
      coins: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    transfer_token_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    mint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_mint_amount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_balance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    get_token_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;
  };
  dryRun: {
    initialize(
      mint_amount: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    set_mint_amount(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_coins(
      coins: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_token_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    mint(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    get_mint_amount(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

    get_balance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

    get_token_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };
  dryRunResult: {
    initialize(
      mint_amount: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    set_mint_amount(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    transfer_coins(
      coins: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    transfer_token_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    mint(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    get_mint_amount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_balance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    get_token_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };
  simulate: {
    initialize(
      mint_amount: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    set_mint_amount(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_coins(
      coins: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_token_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    mint(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

    get_mint_amount(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

    get_balance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

    get_token_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };
  simulateResult: {
    initialize(
      mint_amount: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    set_mint_amount(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    transfer_coins(
      coins: BigNumberish,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    transfer_token_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      address: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    mint(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    get_mint_amount(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    get_balance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<CallResult>;

    get_token_balance(
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };

  initialize(
    mint_amount: BigNumberish,
    address: AddressInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  set_mint_amount(
    mint_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  mint_coins(
    mint_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  burn_coins(
    burn_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  transfer_coins(
    coins: BigNumberish,
    address: AddressInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  transfer_token_to_output(
    coins: BigNumberish,
    asset_id: ContractIdInput,
    address: AddressInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  mint(overrides?: Overrides & { from?: string | Promise<string> }): Promise<void>;

  get_mint_amount(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

  get_balance(overrides?: Overrides & { from?: string | Promise<string> }): Promise<bigint>;

  get_token_balance(
    asset_id: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;
}

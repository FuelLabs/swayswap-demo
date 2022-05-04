/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { SwayswapContractAbi, SwayswapContractAbiInterface } from '../SwayswapContractAbi';
const _abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'token_id',
        type: 'b256',
        components: null,
      },
      {
        name: 'exchange_id',
        type: 'b256',
        components: null,
      },
    ],
    name: 'add_exchange_contract',
    outputs: [
      {
        name: '',
        type: '()',
        components: null,
      },
    ],
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token_id',
        type: 'b256',
        components: null,
      },
    ],
    name: 'get_exchange_contract',
    outputs: [
      {
        name: '',
        type: 'b256',
        components: null,
      },
    ],
  },
];

export class SwayswapContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): SwayswapContractAbiInterface {
    return new Interface(_abi) as SwayswapContractAbiInterface;
  }
  static connect(id: string, walletOrProvider: Wallet | Provider): SwayswapContractAbi {
    return new Contract(id, _abi, walletOrProvider) as SwayswapContractAbi;
  }
}

import type { CallResult, Overrides, ScriptTransactionRequest } from 'fuels';
import { arrayify, Provider, ReceiptType } from 'fuels';

import { toBigInt, toNumber, ZERO } from './math';

import { BYTE_PRICE, FUEL_PROVIDER_URL, GAS_PRICE } from '~/config';

export function getGasFee(simulateResult: CallResult) {
  const scriptResult = simulateResult.receipts.find(
    (receipt) => receipt.type === ReceiptType.ScriptResult
  );
  if (scriptResult?.type === ReceiptType.ScriptResult) {
    return scriptResult.gasUsed;
  }
  return ZERO;
}

export type TransactionCost = {
  gas: bigint;
  byte: bigint;
  total: bigint;
  error?: string;
};

export function transactionByteSize(request: ScriptTransactionRequest) {
  const byteSize = toBigInt(request.toTransactionBytes().length * BYTE_PRICE);
  const witnessesByteSize = toBigInt(
    request.witnesses.reduce((t, witnesses) => t + arrayify(witnesses).length, 0)
  );

  return byteSize - witnessesByteSize;
}

export function emptyTransactionCost(error?: string) {
  return {
    total: ZERO,
    gas: ZERO,
    byte: ZERO,
    error,
  };
}

export async function getTransactionCost(
  requestPromise: Promise<ScriptTransactionRequest>
): Promise<TransactionCost> {
  try {
    const request = await requestPromise;
    // Set gasPrice and bytePrice to ZERO to
    // measure gasUsed without needing to have balance
    request.gasPrice = ZERO;
    request.bytePrice = ZERO;
    const provider = new Provider(FUEL_PROVIDER_URL);
    const dryRunResult = await provider.call(request);
    const gasFee = getGasFee(dryRunResult) * toBigInt(GAS_PRICE);
    const byte = transactionByteSize(request);
    const gas = toBigInt(Math.ceil(toNumber(gasFee) * 1.1));
    const total = gas + byte;

    return {
      total,
      gas,
      byte,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return emptyTransactionCost(err?.message);
  }
}

export function getOverrides(overrides: Overrides) {
  const ret: Overrides = {
    gasPrice: GAS_PRICE,
    bytePrice: BYTE_PRICE,
    transformRequest: async (request) => {
      request.gasLimit -= transactionByteSize(request);
      return request;
    },
    ...overrides,
  };
  return ret;
}

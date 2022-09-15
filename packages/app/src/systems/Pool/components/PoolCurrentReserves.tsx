import { useSelector } from "@xstate/react";

import { useAddLiquidityContext } from "../hooks";
import { selectors } from "../selectors";

import { NewPoolWarning } from "./NewPoolWarning";

import {
  PreviewTable,
  PreviewItem,
  TokenIcon,
  compareStates,
  safeBigInt,
  format,
} from "~/systems/Core";

export const PoolCurrentReserves = () => {
  const { service } = useAddLiquidityContext();
  const poolInfo = useSelector(service, selectors.poolInfo, compareStates);
  const coinFrom = useSelector(service, selectors.coinFrom);
  const createPool = useSelector(service, selectors.createPool);
  const coinTo = useSelector(service, selectors.coinTo);
  const isLoading = useSelector(service, selectors.isLoading);

  if (!isLoading && createPool) return <NewPoolWarning />;

  return (
    <PreviewTable
      title="Current pool reserves"
      className="mt-4"
      aria-label="pool-reserves"
    >
      <PreviewItem
        loading={isLoading}
        title={
          <div className="inline-flex items-center gap-2">
            <TokenIcon coinFrom={coinFrom} size={14} />
            {coinFrom?.name}
          </div>
        }
        value={format(safeBigInt(poolInfo?.eth_reserve))}
      />
      <PreviewItem
        loading={isLoading}
        title={
          <div className="inline-flex items-center gap-2">
            <TokenIcon coinFrom={coinTo} size={14} />
            {coinTo?.name}
          </div>
        }
        value={format(safeBigInt(poolInfo?.token_reserve))}
      />
    </PreviewTable>
  );
};

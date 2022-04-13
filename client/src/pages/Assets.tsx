import { useContext, useEffect, useState } from "react";
import { FaFaucet } from "react-icons/fa";
import { WalletContext } from "src/context/WalletContext";
import { CoinQuantity } from "fuels";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Coin, CoinInput } from "src/components/CoinInput";
import CoinsMetadata from "src/lib/CoinsMetadata";
import { Spinner } from "src/components/Spinner";

const style = {
  wrapper: `w-screen flex flex-1 items-center justify-center mb-14`,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl mb-8`,
  faucetButton: `hover:bg-[#41444F] cursor-pointer p-1 rounded-xl flex justify-center`,
};

type Asset = Coin & { amount: BigNumber };
const mergeCoinsWithMetadata = (coins: CoinQuantity[]): Array<Asset> => {
  return coins.map((coin) => {
    const coinMetadata = CoinsMetadata.find(c => c.assetId === coin.assetId);

    return {
      // TODO: Create default Coin Metadata when token didn't have registered data
      // Another options could be querying from the contract
      // https://github.com/FuelLabs/swayswap-demo/issues/33
      name: coinMetadata?.name || '404',
      img: coinMetadata?.img || '/icons/other.svg',
      assetId: coin.assetId,
      amount: coin.amount || 0
    };
  });
};

export const Assets = () => {
  const [coins, setCoins] = useState<CoinQuantity[]>([]);
  const { faucet, getCoins, getWallet } = useContext(WalletContext);
  const wallet = getWallet();
  const [isLoading, setLoading] = useState(false);

  // Load balances
  const loadCoins = async () => {
    return getCoins().then((coins) => {
      setCoins(coins);
    });
  };

  const handleClickFaucet = async () => {
    setLoading(true);
    try {
      await faucet();
      await loadCoins();
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (wallet?.address) loadCoins();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet?.address]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Assets</div>
          <div className="p-1 rounded-xl flex justify-center w-10">
            {isLoading ? (
              <div className="p-1 rounded-xl flex justify-center">
                <Spinner />
              </div>
            ) : (
              <div className={style.faucetButton} onClick={handleClickFaucet}>
                <FaFaucet />
              </div>
            )}
          </div>
        </div>

        {mergeCoinsWithMetadata(coins).map((coin) => {
          return (
            <div className="my-4" key={coin.assetId}>
              <CoinInput
                coin={coin}
                disabled={true}
                amount={formatUnits(coin.amount, 9)}
                coins={coin ? [coin] : []}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { TOKEN_ID } from '~/config';
import { useTokenMethods, parseUnits, useBalances } from '~/systems/Core';
import { Pages } from '~/types';

type UseMintOpts = {
  tokenId: string;
  onSuccess?: () => void;
};

export function useMint(opts: UseMintOpts) {
  const methods = useTokenMethods(TOKEN_ID);
  const navigate = useNavigate();
  const balances = useBalances();

  const mutation = useMutation(
    async (variables: { amount: string }) => {
      const mintAmount = parseUnits(variables.amount).toBigInt();
      await methods.mint(mintAmount);
      await methods.transferTo(mintAmount, { variableOutputs: 1 });
    },
    {
      onSuccess: async () => {
        // Navigate to assets page to show new cons
        // https://github.com/FuelLabs/swayswap-demo/issues/40
        opts.onSuccess?.();
        toast.success(`Token received successfully!`);
        await balances.refetch();
        navigate(Pages.swap);
      },
    }
  );

  function handleMint(amount: string) {
    mutation.mutate({ amount });
  }

  return {
    ...mutation,
    handleMint,
  };
}

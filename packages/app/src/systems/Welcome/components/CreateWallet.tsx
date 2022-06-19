import { useMutation } from "react-query";

import { useWelcomeSteps } from "../hooks";

import { WelcomeStep } from "./WelcomeStep";

import { relativeUrl, useAppContext } from "~/systems/Core";
import { Button } from "~/systems/UI";

export function CreateWallet() {
  const { createWallet } = useAppContext();
  const { next } = useWelcomeSteps();

  const createWalletMutation = useMutation(async () => createWallet(), {
    onSuccess: () => {
      next();
    },
  });

  function handleCreateWallet() {
    createWalletMutation.mutate();
  }

  return (
    <WelcomeStep id={0}>
      <img src={relativeUrl("/illustrations/create-wallet.png")} />
      <h2>Welcome to SwaySwap</h2>
      <p className="my-5">
        To get started you&apos;ll need a wallet.<br />
        Click "Create Wallet" below to generate one.
      </p>
      <Button variant="primary" size="lg" onPress={handleCreateWallet}>
        Create Wallet
      </Button>
    </WelcomeStep>
  );
}

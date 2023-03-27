import { Button } from "@fuel-ui/react";

import { useWelcomeSteps } from "../hooks";

import { WelcomeImage } from "./WelcomeImage";
import { WelcomeStep } from "./WelcomeStep";

export function AddAssets() {
  const { service } = useWelcomeSteps();

  function handleAddAssets() {
    service.send("ADD_ASSETS");
  }

  return (
    <WelcomeStep id={2}>
      <WelcomeImage src="/illustrations/add-funds.png" />
      <h2>Add pool assets to your wallet</h2>
      <p>
        To see the assets in your wallet you have to add them.
        <br />
        Click &ldquo;Add Assets&rdquo; below to add the pool token asset info to
        your wallet.
      </p>
      <Button onPress={handleAddAssets}>Add Assets</Button>
    </WelcomeStep>
  );
}

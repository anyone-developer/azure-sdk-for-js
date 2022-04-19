/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VirtualNetwork, DevTestLabsClient } from "@azure/arm-devtestlabs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or replace an existing virtual network. This operation can take a while to complete.
 *
 * @summary Create or replace an existing virtual network. This operation can take a while to complete.
 * x-ms-original-file: specification/devtestlabs/resource-manager/Microsoft.DevTestLab/stable/2018-09-15/examples/VirtualNetworks_CreateOrUpdate.json
 */
async function virtualNetworksCreateOrUpdate() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "resourceGroupName";
  const labName = "{labName}";
  const name = "{virtualNetworkName}";
  const virtualNetwork: VirtualNetwork = {
    location: "{location}",
    tags: { tagName1: "tagValue1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DevTestLabsClient(credential, subscriptionId);
  const result = await client.virtualNetworks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    labName,
    name,
    virtualNetwork
  );
  console.log(result);
}

virtualNetworksCreateOrUpdate().catch(console.error);

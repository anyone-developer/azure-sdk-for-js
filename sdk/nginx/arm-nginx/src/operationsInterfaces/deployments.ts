/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  NginxDeployment,
  DeploymentsListOptionalParams,
  DeploymentsListByResourceGroupOptionalParams,
  DeploymentsGetOptionalParams,
  DeploymentsGetResponse,
  DeploymentsCreateOptionalParams,
  DeploymentsCreateResponse,
  DeploymentsUpdateOptionalParams,
  DeploymentsUpdateResponse,
  DeploymentsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Deployments. */
export interface Deployments {
  /**
   * List the Nginx deployments resources
   * @param options The options parameters.
   */
  list(
    options?: DeploymentsListOptionalParams
  ): PagedAsyncIterableIterator<NginxDeployment>;
  /**
   * List all Nginx deployments under the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NginxDeployment>;
  /**
   * Get the Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsGetOptionalParams
  ): Promise<DeploymentsGetResponse>;
  /**
   * Create or update the Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateResponse>,
      DeploymentsCreateResponse
    >
  >;
  /**
   * Create or update the Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsCreateOptionalParams
  ): Promise<DeploymentsCreateResponse>;
  /**
   * Update the Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsUpdateResponse>,
      DeploymentsUpdateResponse
    >
  >;
  /**
   * Update the Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsUpdateOptionalParams
  ): Promise<DeploymentsUpdateResponse>;
  /**
   * Delete the Nginx deployment resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete the Nginx deployment resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<void>;
}

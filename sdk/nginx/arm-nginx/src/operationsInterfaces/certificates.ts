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
  NginxCertificate,
  CertificatesListOptionalParams,
  CertificatesGetOptionalParams,
  CertificatesGetResponse,
  CertificatesCreateOptionalParams,
  CertificatesCreateResponse,
  CertificatesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Certificates. */
export interface Certificates {
  /**
   * List all certificates of given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    deploymentName: string,
    options?: CertificatesListOptionalParams
  ): PagedAsyncIterableIterator<NginxCertificate>;
  /**
   * Get a certificate of given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesGetOptionalParams
  ): Promise<CertificatesGetResponse>;
  /**
   * Create or update the Nginx certificates for given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CertificatesCreateResponse>,
      CertificatesCreateResponse
    >
  >;
  /**
   * Create or update the Nginx certificates for given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesCreateOptionalParams
  ): Promise<CertificatesCreateResponse>;
  /**
   * Deletes a certificate from the nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a certificate from the nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<void>;
}

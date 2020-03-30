/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Apple connection secrets
 *
 */
class AppleCredentialsMultifactorSecretRequest {
  /**
   * Create a AppleCredentialsMultifactorSecretRequest.
   * @property {string} [displayName] display name of shared connection
   * @property {string} serviceType service type of shared connection can be
   * apple|gitlab|googleplay|jira|applecertificate. Possible values include:
   * 'apple', 'jira', 'googleplay', 'gitlab'
   * @property {string} [credentialType] credential type of the shared
   * connection. Values can be credentials|certificate. Possible values
   * include: 'credentials', 'certificate'. Default value: 'credentials' .
   * @property {object} data apple secret details
   * @property {string} [data.username] username to connect to apple store.
   * @property {string} [data.password] password to connect to apple store.
   * @property {string} [data.authCode] The 6 digit Apple OTP for Multifactor
   * accounts
   * @property {string} [data.appSpecificPassword] The app specific password
   * required for app publishing for 2FA accounts
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleCredentialsMultifactorSecretRequest
   *
   * @returns {object} metadata of AppleCredentialsMultifactorSecretRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'credentials',
      type: {
        name: 'Composite',
        className: 'AppleCredentialsMultifactorSecretRequest',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            type: {
              name: 'String'
            }
          },
          credentialType: {
            required: false,
            serializedName: 'credentialType',
            defaultValue: 'credentials',
            type: {
              name: 'String'
            }
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Composite',
              className: 'AppleCredentialsMultifactorSecretRequestData'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleCredentialsMultifactorSecretRequest;

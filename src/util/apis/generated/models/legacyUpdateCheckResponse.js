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
 * Class representing a LegacyUpdateCheckResponse.
 */
class LegacyUpdateCheckResponse {
  /**
   * Create a LegacyUpdateCheckResponse.
   * @property {object} updateInfo
   * @property {string} [updateInfo.appVersion]
   * @property {string} [updateInfo.description]
   * @property {boolean} [updateInfo.isDisabled]
   * @property {boolean} [updateInfo.isMandatory]
   * @property {number} [updateInfo.rollout]
   * @property {string} [updateInfo.downloadURL]
   * @property {boolean} [updateInfo.isAvailable]
   * @property {number} [updateInfo.packageSize]
   * @property {boolean} [updateInfo.shouldRunBinaryVersion]
   * @property {boolean} [updateInfo.updateAppVersion]
   * @property {string} [updateInfo.packageHash]
   * @property {string} [updateInfo.label]
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegacyUpdateCheckResponse
   *
   * @returns {object} metadata of LegacyUpdateCheckResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegacyUpdateCheckResponse',
      type: {
        name: 'Composite',
        className: 'LegacyUpdateCheckResponse',
        modelProperties: {
          updateInfo: {
            required: true,
            serializedName: 'updateInfo',
            type: {
              name: 'Composite',
              className: 'LegacyUpdateCheckResponseUpdateInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = LegacyUpdateCheckResponse;

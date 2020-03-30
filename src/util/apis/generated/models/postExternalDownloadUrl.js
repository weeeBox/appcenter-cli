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
 * Set the download URL of an external build
 *
 */
class PostExternalDownloadUrl {
  /**
   * Create a PostExternalDownloadUrl.
   * @property {string} [downloadUrl] The new download URL
   */
  constructor() {
  }

  /**
   * Defines the metadata of PostExternalDownloadUrl
   *
   * @returns {object} metadata of PostExternalDownloadUrl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PostExternalDownloadUrl',
      type: {
        name: 'Composite',
        className: 'PostExternalDownloadUrl',
        modelProperties: {
          downloadUrl: {
            required: false,
            serializedName: 'download_url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PostExternalDownloadUrl;

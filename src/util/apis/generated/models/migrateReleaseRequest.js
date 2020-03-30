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
 * A list of HockeyApp releases to migrate to App Center
 *
 */
class MigrateReleaseRequest {
  /**
   * Create a MigrateReleaseRequest.
   * @property {array} [releases]
   */
  constructor() {
  }

  /**
   * Defines the metadata of MigrateReleaseRequest
   *
   * @returns {object} metadata of MigrateReleaseRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigrateReleaseRequest',
      type: {
        name: 'Composite',
        className: 'MigrateReleaseRequest',
        modelProperties: {
          releases: {
            required: false,
            serializedName: 'releases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MigrateReleaseRequestReleasesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'MigrateReleaseRequestReleasesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MigrateReleaseRequest;

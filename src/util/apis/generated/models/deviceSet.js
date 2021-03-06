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
 * @summary Device Set
  *
 * The name and devices of the device set
 *
 */
class DeviceSet {
  /**
   * Create a DeviceSet.
   * @property {string} id Identifier of the device set
   * @property {number} [manufacturerCount] The number of manufacturers in the
   * device set's device selection
   * @property {string} name Name of the device set
   * @property {string} [slug] Slug of the device set
   * @property {object} owner
   * @property {string} [owner.type] Type of account
   * @property {string} [owner.id] Account ID
   * @property {string} [owner.displayName] Display name of the account
   * @property {string} [owner.name] Name of the account
   * @property {number} [osVersionCount] The number of os versions in the
   * device set's device selection
   * @property {array} deviceConfigurations
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceSet
   *
   * @returns {object} metadata of DeviceSet
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceSet',
      type: {
        name: 'Composite',
        className: 'DeviceSet',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          manufacturerCount: {
            required: false,
            serializedName: 'manufacturerCount',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          slug: {
            required: false,
            serializedName: 'slug',
            type: {
              name: 'String'
            }
          },
          owner: {
            required: true,
            serializedName: 'owner',
            type: {
              name: 'Composite',
              className: 'DeviceSetOwner'
            }
          },
          osVersionCount: {
            required: false,
            serializedName: 'osVersionCount',
            type: {
              name: 'Number'
            }
          },
          deviceConfigurations: {
            required: true,
            serializedName: 'deviceConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeviceSetConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeviceSetConfiguration'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceSet;

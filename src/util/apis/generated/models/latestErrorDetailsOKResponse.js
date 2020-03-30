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
 * Class representing a LatestErrorDetailsOKResponse.
 */
class LatestErrorDetailsOKResponse {
  /**
   * Create a LatestErrorDetailsOKResponse.
   * @property {string} [errorId]
   * @property {date} [timestamp]
   * @property {string} [deviceName]
   * @property {string} [osVersion]
   * @property {string} [osType]
   * @property {string} [country]
   * @property {string} [language]
   * @property {string} [userId]
   * @property {boolean} [hasBreadcrumbs]
   * @property {boolean} [hasAttachments]
   * @property {string} [name]
   * @property {array} [reasonFrames]
   * @property {date} [appLaunchTimestamp] Timestamp when the app was launched,
   * example: '2017-03-13T18:05:42Z'.
   * @property {string} [carrierName] Carrier name (for mobile devices).
   * @property {boolean} [jailbreak] Flag indicating if device is jailbroken
   * @property {object} [properties]
   */
  constructor() {
  }

  /**
   * Defines the metadata of LatestErrorDetailsOKResponse
   *
   * @returns {object} metadata of LatestErrorDetailsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LatestErrorDetailsOKResponse',
      type: {
        name: 'Composite',
        className: 'LatestErrorDetailsOKResponse',
        modelProperties: {
          errorId: {
            required: false,
            serializedName: 'errorId',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          deviceName: {
            required: false,
            serializedName: 'deviceName',
            type: {
              name: 'String'
            }
          },
          osVersion: {
            required: false,
            serializedName: 'osVersion',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            type: {
              name: 'String'
            }
          },
          country: {
            required: false,
            serializedName: 'country',
            type: {
              name: 'String'
            }
          },
          language: {
            required: false,
            serializedName: 'language',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: false,
            serializedName: 'userId',
            type: {
              name: 'String'
            }
          },
          hasBreadcrumbs: {
            required: false,
            serializedName: 'hasBreadcrumbs',
            type: {
              name: 'Boolean'
            }
          },
          hasAttachments: {
            required: false,
            serializedName: 'hasAttachments',
            type: {
              name: 'Boolean'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          reasonFrames: {
            required: false,
            serializedName: 'reasonFrames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LatestErrorDetailsOKResponseReasonFramesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'LatestErrorDetailsOKResponseReasonFramesItem'
                  }
              }
            }
          },
          appLaunchTimestamp: {
            required: false,
            serializedName: 'appLaunchTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          carrierName: {
            required: false,
            serializedName: 'carrierName',
            type: {
              name: 'String'
            }
          },
          jailbreak: {
            required: false,
            serializedName: 'jailbreak',
            type: {
              name: 'Boolean'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LatestErrorDetailsOKResponse;

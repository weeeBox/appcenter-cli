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
 * Class representing a ErrorFreeDevicePercentagesOKResponse.
 */
class ErrorFreeDevicePercentagesOKResponse {
  /**
   * Create a ErrorFreeDevicePercentagesOKResponse.
   * @property {number} [averagePercentage] Average percentage
   * @property {array} [dailyPercentages] The error-free percentage per day.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorFreeDevicePercentagesOKResponse
   *
   * @returns {object} metadata of ErrorFreeDevicePercentagesOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorFreeDevicePercentagesOKResponse',
      type: {
        name: 'Composite',
        className: 'ErrorFreeDevicePercentagesOKResponse',
        modelProperties: {
          averagePercentage: {
            required: false,
            serializedName: 'averagePercentage',
            type: {
              name: 'Number'
            }
          },
          dailyPercentages: {
            required: false,
            serializedName: 'dailyPercentages',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorFreeDevicePercentagesOKResponseDailyPercentagesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorFreeDevicePercentagesOKResponseDailyPercentagesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorFreeDevicePercentagesOKResponse;

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
 * Class representing a CreateCreatedResponseIntuneDetailsTargetAudience.
 */
class CreateCreatedResponseIntuneDetailsTargetAudience {
  /**
   * Create a CreateCreatedResponseIntuneDetailsTargetAudience.
   * @property {string} [name] display name for the target audience/group
   * @property {string} [id] ID for the target audience/group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateCreatedResponseIntuneDetailsTargetAudience
   *
   * @returns {object} metadata of CreateCreatedResponseIntuneDetailsTargetAudience
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateCreatedResponse_intune_details_target_audience',
      type: {
        name: 'Composite',
        className: 'CreateCreatedResponseIntuneDetailsTargetAudience',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateCreatedResponseIntuneDetailsTargetAudience;

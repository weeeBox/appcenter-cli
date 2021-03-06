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
 * Class representing a AdministeredOrgsResponse.
 */
class AdministeredOrgsResponse {
  /**
   * Create a AdministeredOrgsResponse.
   * @property {object} organizations
   * @property {uuid} [organizations.id] The internal unique id (UUID) of the
   * organization.
   * @property {string} [organizations.displayName] The display name of the
   * organization
   * @property {string} [organizations.name] The slug name of the organization
   * @property {string} [organizations.avatarUrl] The URL to a user-uploaded
   * Avatar image
   * @property {string} [organizations.origin] The creation origin of this
   * organization. Possible values include: 'appcenter', 'hockeyapp'
   * @property {string} [organizations.createdAt] The creation date of this
   * organization
   * @property {string} [organizations.updatedAt] The date the organization was
   * last updated at
   */
  constructor() {
  }

  /**
   * Defines the metadata of AdministeredOrgsResponse
   *
   * @returns {object} metadata of AdministeredOrgsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AdministeredOrgsResponse',
      type: {
        name: 'Composite',
        className: 'AdministeredOrgsResponse',
        modelProperties: {
          organizations: {
            required: true,
            serializedName: 'organizations',
            type: {
              name: 'Composite',
              className: 'OrganizationResponse'
            }
          }
        }
      }
    };
  }
}

module.exports = AdministeredOrgsResponse;

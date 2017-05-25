/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the OrganizationResponse class.
 * @constructor
 * @member {string} id The internal unique id (UUID) of the organization.
 * 
 * @member {string} collaboratorRole The role the current user has within the
 * organization
 * 
 * @member {string} displayName The display name of the organization
 * 
 * @member {string} name The slug name of the organization
 * 
 * @member {string} origin The creation origin of this organization. Possible
 * values include: 'mobile-center', 'hockeyapp'
 * 
 */
function OrganizationResponse() {
}

/**
 * Defines the metadata of OrganizationResponse
 *
 * @returns {object} metadata of OrganizationResponse
 *
 */
OrganizationResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'OrganizationResponse',
    type: {
      name: 'Composite',
      className: 'OrganizationResponse',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        collaboratorRole: {
          required: true,
          serializedName: 'collaborator_role',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: true,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        origin: {
          required: true,
          serializedName: 'origin',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = OrganizationResponse;
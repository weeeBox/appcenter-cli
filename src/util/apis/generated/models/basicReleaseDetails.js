/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the BasicReleaseDetails class.
 * @constructor
 * Basic information on a release
 *
 * @member {number} [id] ID identifying this unique release.
 * 
 * @member {string} [version] The release's version.<br>
 * For iOS: CFBundleVersion from info.plist.<br>
 * For Android: android:versionCode from AppManifest.xml.
 * 
 * @member {string} [shortVersion] The release's short version.<br>
 * For iOS: CFBundleShortVersionString from info.plist.<br>
 * For Android: android:versionName from AppManifest.xml.
 * 
 * @member {string} [uploadedAt] UTC time in ISO 8601 format of the uploaded
 * time.
 * 
 * @member {string} [destinationType] The destination type.<br>
 * <b>group</b>: The release distributed to internal groups and
 * distribution_groups details will be returned.<br>
 * <b>store</b>: Coming Soon - The release distributed to external stores and
 * distribution_stores details will be returned. <br>
 * . Possible values include: 'group', 'store'
 * 
 * @member {array} [distributionGroups] a list of distribution groups that are
 * associated with this release.
 * 
 * @member {array} [distributionStores] Coming Soon - a list of distribution
 * stores that are associated with this release.
 * 
 */
function BasicReleaseDetails() {
}

/**
 * Defines the metadata of BasicReleaseDetails
 *
 * @returns {object} metadata of BasicReleaseDetails
 *
 */
BasicReleaseDetails.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BasicReleaseDetails',
    type: {
      name: 'Composite',
      className: 'BasicReleaseDetails',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'Number'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        shortVersion: {
          required: false,
          serializedName: 'short_version',
          type: {
            name: 'String'
          }
        },
        uploadedAt: {
          required: false,
          serializedName: 'uploaded_at',
          type: {
            name: 'String'
          }
        },
        destinationType: {
          required: false,
          serializedName: 'destination_type',
          type: {
            name: 'String'
          }
        },
        distributionGroups: {
          required: false,
          serializedName: 'distribution_groups',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DistributionGroupElementType',
                type: {
                  name: 'Composite',
                  className: 'DistributionGroup'
                }
            }
          }
        },
        distributionStores: {
          required: false,
          serializedName: 'distribution_stores',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DistributionStoreElementType',
                type: {
                  name: 'Composite',
                  className: 'DistributionStore'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = BasicReleaseDetails;
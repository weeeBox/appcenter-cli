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
 * Initializes a new instance of the NotificationConfigApple class.
 * @constructor
 * Apple notification certificate configuration.
 *
 * @member {string} endpointType Possible values include: 'production',
 * 'sandbox'
 * 
 * @member {string} certEncoded Base64 encoded certificate string.
 * 
 * @member {string} certFilename Certificate file name
 * 
 * @member {string} certKey Certificate password
 * 
 */
function NotificationConfigApple() {
  NotificationConfigApple['super_'].call(this);
}

util.inherits(NotificationConfigApple, models['NotificationConfig']);

/**
 * Defines the metadata of NotificationConfigApple
 *
 * @returns {object} metadata of NotificationConfigApple
 *
 */
NotificationConfigApple.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'apns_config',
    type: {
      name: 'Composite',
      className: 'NotificationConfigApple',
      modelProperties: {
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        endpointType: {
          required: true,
          serializedName: 'endpoint_type',
          type: {
            name: 'String'
          }
        },
        certEncoded: {
          required: true,
          serializedName: 'cert_encoded',
          type: {
            name: 'String'
          }
        },
        certFilename: {
          required: true,
          serializedName: 'cert_filename',
          type: {
            name: 'String'
          }
        },
        certKey: {
          required: true,
          serializedName: 'cert_key',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NotificationConfigApple;
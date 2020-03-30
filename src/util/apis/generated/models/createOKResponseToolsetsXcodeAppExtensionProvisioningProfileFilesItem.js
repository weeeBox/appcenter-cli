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
 * Provisioning profile fetch and store information
 *
 */
class CreateOKResponseToolsetsXcodeAppExtensionProvisioningProfileFilesItem {
  /**
   * Create a CreateOKResponseToolsetsXcodeAppExtensionProvisioningProfileFilesItem.
   * @property {string} [fileName] Name of uploaded provisioning profile
   * @property {string} [fileId] File id from secure file storage
   * @property {string} [uploadId] Upload id to App Center File Upload Store
   * @property {string} [targetBundleIdentifier] Target the provisioning
   * profile is used to sign
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateOKResponseToolsetsXcodeAppExtensionProvisioningProfileFilesItem
   *
   * @returns {object} metadata of CreateOKResponseToolsetsXcodeAppExtensionProvisioningProfileFilesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateOKResponse_toolsets_xcode_appExtensionProvisioningProfileFilesItem',
      type: {
        name: 'Composite',
        className: 'CreateOKResponseToolsetsXcodeAppExtensionProvisioningProfileFilesItem',
        modelProperties: {
          fileName: {
            required: false,
            serializedName: 'fileName',
            type: {
              name: 'String'
            }
          },
          fileId: {
            required: false,
            serializedName: 'fileId',
            type: {
              name: 'String'
            }
          },
          uploadId: {
            required: false,
            serializedName: 'uploadId',
            type: {
              name: 'String'
            }
          },
          targetBundleIdentifier: {
            required: false,
            serializedName: 'targetBundleIdentifier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateOKResponseToolsetsXcodeAppExtensionProvisioningProfileFilesItem;

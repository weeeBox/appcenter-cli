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
 * Details of an uploaded release
 *
 */
class GetLatestOKResponseItem {
  /**
   * Create a GetLatestOKResponseItem.
   * @property {number} [id] ID identifying this unique release.
   * @property {string} [status] OBSOLETE. Will be removed in next version. The
   * availability concept is now replaced with distributed. Any 'available'
   * release will be associated with the default distribution group of an
   * app.</br>
   * The release state.<br>
   * <b>available</b>: The uploaded release has been distributed.<br>
   * <b>unavailable</b>: The uploaded release is not visible to the user. <br>
   * . Possible values include: 'available', 'unavailable'
   * @property {string} [appName] The app's name (extracted from the uploaded
   * release).
   * @property {string} [appDisplayName] The app's display name.
   * @property {string} [version] The release's version.<br>
   * For iOS: CFBundleVersion from info.plist.
   * For Android: android:versionCode from AppManifest.xml.
   * @property {string} [shortVersion] The release's short version.<br>
   * For iOS: CFBundleShortVersionString from info.plist.
   * For Android: android:versionName from AppManifest.xml.
   * @property {string} [releaseNotes] The release's release notes.
   * @property {number} [size] The release's size in bytes.
   * @property {string} [minOs] The release's minimum required operating
   * system.
   * @property {string} [androidMinApiLevel] The release's minimum required
   * Android API level.
   * @property {string} [bundleIdentifier] The identifier of the apps bundle.
   * @property {string} [fingerprint] MD5 checksum of the release binary.
   * @property {string} [uploadedAt] UTC time in ISO 8601 format of the
   * uploaded time.
   * @property {string} [downloadUrl] The URL that hosts the binary for this
   * release.
   * @property {string} [installUrl] The href required to install a release on
   * a mobile device. On iOS devices will be prefixed with
   * `itms-services://?action=download-manifest&url=`. Possible values include:
   * 'group', 'store'
   * @property {array} [distributionStores] a list of distribution stores that
   * are associated with this release.
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLatestOKResponseItem
   *
   * @returns {object} metadata of GetLatestOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLatestOKResponseItem',
      type: {
        name: 'Composite',
        className: 'GetLatestOKResponseItem',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          appName: {
            required: false,
            serializedName: 'app_name',
            type: {
              name: 'String'
            }
          },
          appDisplayName: {
            required: false,
            serializedName: 'app_display_name',
            type: {
              name: 'String'
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
          releaseNotes: {
            required: false,
            serializedName: 'release_notes',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          },
          minOs: {
            required: false,
            serializedName: 'min_os',
            type: {
              name: 'String'
            }
          },
          androidMinApiLevel: {
            required: false,
            serializedName: 'android_min_api_level',
            type: {
              name: 'String'
            }
          },
          bundleIdentifier: {
            required: false,
            serializedName: 'bundle_identifier',
            type: {
              name: 'String'
            }
          },
          fingerprint: {
            required: false,
            serializedName: 'fingerprint',
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
          downloadUrl: {
            required: false,
            serializedName: 'download_url',
            type: {
              name: 'String'
            }
          },
          installUrl: {
            required: false,
            serializedName: 'install_url',
            type: {
              name: 'String'
            }
          },
          distributionStores: {
            required: false,
            serializedName: 'distribution_stores',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GetLatestOKResponseItemDistributionStoresItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetLatestOKResponseItemDistributionStoresItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetLatestOKResponseItem;

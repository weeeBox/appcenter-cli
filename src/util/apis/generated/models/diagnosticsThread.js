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
 * a thread representation
 *
 */
class DiagnosticsThread {
  /**
   * Create a DiagnosticsThread.
   * @property {string} title name of the thread
   * @property {array} frames frames of that thread
   * @property {object} [exception] potential additional exception happened in
   * that thread (Last Exception Backtrace)
   * @property {string} [exception.reason] Reason of the exception
   * @property {string} [exception.type] Type of the exception
   * (NSSomethingException, NullPointerException)
   * @property {array} [exception.frames] frames of the excetpion
   * @property {boolean} [exception.relevant] relevant exception (crashed)
   * @property {array} [exception.innerExceptions]
   * @property {string} [exception.platform] SDK/Platform this thread is beeing
   * generated from. Possible values include: 'ios', 'android', 'xamarin',
   * 'react-native', 'ndk', 'unity', 'other'
   * @property {boolean} [relevant] Shows if a thread is relevant or not. Is
   * false if all frames are non relevant, otherwise true
   * @property {string} [platform] SDK/Platform this thread is beeing generated
   * from. Possible values include: 'ios', 'android', 'xamarin',
   * 'react-native', 'ndk', 'unity', 'other'
   * @property {boolean} [crashed] True if this thread crashed
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiagnosticsThread
   *
   * @returns {object} metadata of DiagnosticsThread
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticsThread',
      type: {
        name: 'Composite',
        className: 'DiagnosticsThread',
        modelProperties: {
          title: {
            required: true,
            serializedName: 'title',
            type: {
              name: 'String'
            }
          },
          frames: {
            required: true,
            serializedName: 'frames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DiagnosticsThreadFramesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DiagnosticsThreadFramesItem'
                  }
              }
            }
          },
          exception: {
            required: false,
            serializedName: 'exception',
            type: {
              name: 'Composite',
              className: 'DiagnosticsException'
            }
          },
          relevant: {
            required: false,
            serializedName: 'relevant',
            type: {
              name: 'Boolean'
            }
          },
          platform: {
            required: false,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          crashed: {
            required: false,
            serializedName: 'crashed',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticsThread;

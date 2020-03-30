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
 * Class representing a BranchStatusValueBranchCommit.
 */
class BranchStatusValueBranchCommit {
  /**
   * Create a BranchStatusValueBranchCommit.
   * @property {string} [sha] The commit SHA
   * @property {string} [url] The URL to the commit
   */
  constructor() {
  }

  /**
   * Defines the metadata of BranchStatusValueBranchCommit
   *
   * @returns {object} metadata of BranchStatusValueBranchCommit
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BranchStatusValue_branch_commit',
      type: {
        name: 'Composite',
        className: 'BranchStatusValueBranchCommit',
        modelProperties: {
          sha: {
            required: false,
            serializedName: 'sha',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BranchStatusValueBranchCommit;

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
 * Billing Plan
 *
 */
class GetForOrgOKResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan {
  /**
   * Create a GetForOrgOKResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan.
   * @property {string} [id] The Billing Plan ID
   * @property {string} [version] Version of the Billing Plan schema
   * @property {number} [price] Price of the Billing Plan
   * @property {string} [paymentSource] Service that receives payments for this
   * billing plan. Possible values include: 'None', 'AppCenter', 'GitHub',
   * 'Xtc'
   * @property {string} [service] Name of the service that the plan applies to.
   * Possible values include: 'Build', 'Test'
   * @property {object} [limits] A collection of named numeric values
   * @property {object} [attributes] Collection of attribute values.
   * @property {string} [parentId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetForOrgOKResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan
   *
   * @returns {object} metadata of GetForOrgOKResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetForOrgOKResponse_billingPlans_buildService_currentBillingPeriod_byAccount_plan',
      type: {
        name: 'Composite',
        className: 'GetForOrgOKResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
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
          price: {
            required: false,
            serializedName: 'price',
            type: {
              name: 'Number'
            }
          },
          paymentSource: {
            required: false,
            serializedName: 'paymentSource',
            type: {
              name: 'String'
            }
          },
          service: {
            required: false,
            serializedName: 'service',
            type: {
              name: 'String'
            }
          },
          limits: {
            required: false,
            serializedName: 'limits',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          attributes: {
            required: false,
            serializedName: 'attributes',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          parentId: {
            required: false,
            serializedName: 'parentId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetForOrgOKResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan;

declare namespace Stripe {
  /**
   * The InvoiceItem object.
   */
  interface InvoiceItem {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'invoiceitem';

    /**
     * Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * The ID of the customer who will be billed when this invoice item is billed.
     */
    customer: string | Customer | DeletedCustomer;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    date: number;

    deleted?: void;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * If true, discounts will apply to this invoice item. Always false for prorations.
     */
    discountable: boolean;

    /**
     * The ID of the invoice this invoice item belongs to.
     */
    invoice: string | Invoice | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;

    period: InvoiceItem.Period;

    /**
     * If the invoice item is a proration, the plan of the subscription that the proration was computed for.
     */
    plan: Plan | null;

    /**
     * Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
     */
    proration: boolean;

    /**
     * Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
     */
    quantity: number;

    /**
     * The subscription that this invoice item has been created for, if any.
     */
    subscription: string | Subscription | null;

    /**
     * The subscription item that this invoice item has been created for, if any.
     */
    subscription_item?: string;

    /**
     * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
     */
    tax_rates: Array<TaxRate> | null;

    /**
     * For prorations this indicates whether Stripe automatically grouped multiple related debit and credit line items into a single combined line item.
     */
    unified_proration?: boolean;

    /**
     * Unit Amount (in the `currency` specified) of the invoice item.
     */
    unit_amount: number | null;

    /**
     * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
     */
    unit_amount_decimal: string | null;
  }

  namespace InvoiceItem {
    interface Period {
      /**
       * End of the line item's billing period
       */
      end: number;

      /**
       * Start of the line item's billing period
       */
      start: number;
    }
  }

  /**
   * The DeletedInvoiceItem object.
   */
  interface DeletedInvoiceItem {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'invoiceitem';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  interface InvoiceItemCreateParams {
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * The ID of the customer who will be billed when this invoice item is billed.
     */
    customer: string;

    /**
     * The integer amount in **%s** of the charge to be applied to the upcoming invoice. Passing in a negative `amount` will reduce the `amount_due` on the invoice.
     */
    amount?: number;

    /**
     * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
     */
    description?: string;

    /**
     * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
     */
    discountable?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. This is useful when adding invoice items in response to an invoice.created webhook. You can only add invoice items to draft invoices.
     */
    invoice?: string;

    /**
     * A set of key-value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format.
     */
    metadata?: MetadataParam;

    /**
     * The period associated with this invoice item.
     */
    period?: InvoiceItemCreateParams.Period;

    /**
     * Non-negative integer. The quantity of units for the invoice item.
     */
    quantity?: number;

    /**
     * The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
     */
    subscription?: string;

    /**
     * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
     */
    tax_rates?: Array<string>;

    /**
     * The integer unit amount in **%s** of the charge to be applied to the upcoming invoice. This `unit_amount` will be multiplied by the quantity to get the full amount. Passing in a negative `unit_amount` will reduce the `amount_due` on the invoice.
     */
    unit_amount?: number;

    /**
     * Same as `unit_amount`, but accepts a decimal value with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
     */
    unit_amount_decimal?: string;
  }

  namespace InvoiceItemCreateParams {
    interface Period {
      /**
       * The end of the period, which must be greater than or equal to the start.
       */
      end: number;

      /**
       * The start of the period.
       */
      start: number;
    }
  }

  interface InvoiceItemRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  interface InvoiceItemUpdateParams {
    /**
     * The integer amount in **%s** of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
     */
    amount?: number;

    /**
     * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
     */
    description?: string;

    /**
     * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.
     */
    discountable?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A set of key-value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format.
     */
    metadata?: MetadataParam;

    /**
     * The period associated with this invoice item.
     */
    period?: InvoiceItemUpdateParams.Period;

    /**
     * Non-negative integer. The quantity of units for the invoice item.
     */
    quantity?: number;

    /**
     * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item. Pass an empty string to remove previously-defined tax rates.
     */
    tax_rates?: Array<string> | '';

    /**
     * The integer unit amount in **%s** of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
     */
    unit_amount?: number;

    /**
     * Same as `unit_amount`, but accepts a decimal value with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
     */
    unit_amount_decimal?: string;
  }

  namespace InvoiceItemUpdateParams {
    interface Period {
      /**
       * The end of the period, which must be greater than or equal to the start.
       */
      end: number;

      /**
       * The start of the period.
       */
      start: number;
    }
  }

  interface InvoiceItemListParams {
    created?: number | InvoiceItemListParams.Created;

    /**
     * The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
     */
    customer?: string;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.
     */
    invoice?: string;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied.
     */
    pending?: boolean;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace InvoiceItemListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }
  }

  interface InvoiceItemDeleteParams {}

  class InvoiceItemsResource {
    /**
     * Creates an item to be added to a draft invoice. If no invoice is specified, the item will be on the next invoice created for the customer specified.
     */
    create(
      params: InvoiceItemCreateParams,
      options?: RequestOptions
    ): Promise<InvoiceItem>;

    /**
     * Retrieves the invoice item with the given ID.
     */
    retrieve(
      id: string,
      params?: InvoiceItemRetrieveParams,
      options?: RequestOptions
    ): Promise<InvoiceItem>;
    retrieve(id: string, options?: RequestOptions): Promise<InvoiceItem>;

    /**
     * Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.
     */
    update(
      id: string,
      params?: InvoiceItemUpdateParams,
      options?: RequestOptions
    ): Promise<InvoiceItem>;

    /**
     * Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.
     */
    list(
      params?: InvoiceItemListParams,
      options?: RequestOptions
    ): ApiListPromise<InvoiceItem>;
    list(options?: RequestOptions): ApiListPromise<InvoiceItem>;

    /**
     * Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they're not attached to invoices, or if it's attached to a draft invoice.
     */
    del(
      id: string,
      params?: InvoiceItemDeleteParams,
      options?: RequestOptions
    ): Promise<DeletedInvoiceItem>;
    del(id: string, options?: RequestOptions): Promise<DeletedInvoiceItem>;
  }
}
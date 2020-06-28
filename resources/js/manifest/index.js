const manifest = [
    {
        title: "List Transactions",
        description: "List transactions carried out on your integration.",
        is_active: true,
    },
    {
        title: "Fetch Transaction",
        description: "Get details of a transaction carried out on your integration.",
        is_active: false,
    },
    {
        title: "Charge Authorization",
        description: "All authorizations marked as reusable can be charged with this endpoint whenever you need to recieve payments.",
        is_active: false,
    },
    {
        title: "Check Authorization",
        description: "All mastercard and visa authorizations can be checked with this endpoint to know if they have funds for the payment you seek.",
        is_active: false,
    },
    {
        title: "View Transaction Timeline",
        description: "View the timeline of a transaction",
        is_active: false,
    },
    {
        title: "Transaction Totals",
        description: "Total amount received on your account",
        is_active: false,
    },
    {
        title: "Export Transactions",
        description: "List transactions carried out on your integration.",
        is_active: false,
    },
    {
        title: "Partial Debit",
        description: "Retrieve part of a payment from a customer",
        is_active: false,
    },
    {
        title: "Create Split",
        description: "Create a split payment on your integration",
        is_active: false,
    },
    {
        title: "List/Search Splits",
        description: "List/search for the transaction splits available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Split",
        description: "Get details of a split on your integration.",
        is_active: false,
    },
    {
        title: "Update Split",
        description: "Update a transaction split details on your integration",
        is_active: false,
    },
    {
        title: "Add/Update Split Subaccount",
        description: "Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split",
        is_active: false,
    },
    {
        title: "Remove Subaccount from Split",
        description: "Remove a subaccount from a transaction split",
        is_active: false,
    },
    {
        title: "Create Customer",
        description: "Create a customer on your integration",
        is_active: false,
    },
    {
        title: "List Customers",
        description: "List customers available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Customer",
        description: "Get details of a customer on your integration.",
        is_active: false,
    },
    {
        title: "Update Customer",
        description: "Update a customer's details on your integration",
        is_active: false,
    },
    {
        title: "Whitelist/Blacklist Customer",
        description: "Whitelist or blacklist a customer on your integration",
        is_active: false,
    },
    {
        title: "Deactivate Authorization",
        description: "Deactivate an authorization when the card needs to be forgotten",
        is_active: false,
    },
    {
        title: "Create Subaccount",
        description: "Create a subacount on your integration",
        is_active: false,
    },
    {
        title: "List Subaccounts",
        description: "List subaccounts available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Subaccount",
        description: "Get details of a subaccount on your integration.",
        is_active: false,
    },
    {
        title: "Update Subaccount",
        description: "Update a subaccount details on your integration",
        is_active: false,
    },
    {
        title: "Create Plan",
        description: "Create a plan on your integration",
        is_active: false,
    },
    {
        title: "List Plans",
        description: "List plans available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Plan",
        description: "Get details of a plan on your integration.",
        is_active: false,
    },
    {
        title: "Update Plan",
        description: "Update a plan details on your integration",
        is_active: false,
    },
    {
        title: "Create Subscription",
        description: "Create a subscription on your integration",
        is_active: false,
    },
    {
        title: "List Subscriptions",
        description: "List subscriptions available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Subscription",
        description: "Get details of a subscription on your integration.",
        is_active: false,
    },
    {
        title: "Enable Subscription",
        description: "Enable a subscription on your integration",
        is_active: false,
    },
    {
        title: "Disable Subscription",
        description: "Disable a subscription on your integration",
        is_active: false,
    },
    {
        title: "Create Product",
        description: "Create a product on your integration",
        is_active: false,
    },
    {
        title: "List Products",
        description: "List products available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Product",
        description: "Get details of a product on your integration.",
        is_active: false,
    },
    {
        title: "Update Product",
        description: "Update a product details on your integration",
        is_active: false,
    },
    {
        title: "Create Page",
        description: "Create a payment page on your integration",
        is_active: false,
    },
    {
        title: "List Pages",
        description: "List payment pages available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Page",
        description: "Get details of a payment page on your integration.",
        is_active: false,
    },
    {
        title: "Update Page",
        description: "Update a payment page details on your integration",
        is_active: false,
    },
    {
        title: "Check Slug Availability",
        description: "Check the availability of a slug for a payment page.",
        is_active: false,
    },
    {
        title: "Add Products",
        description: "Add products to a payment page",
        is_active: false,
    },
    {
        title: "Create Invoice",
        description: "Create an invoice for payment on your integration",
        is_active: false,
    },
    {
        title: "List Invoices",
        description: "List the invoice available on your integration.",
        is_active: false,
    },
    {
        title: "View Invoice",
        description: "Get details of an invoice on your integration.",
        is_active: false,
    },
    {
        title: "Verify Invoice",
        description: "Verify details of an invoice on your integration.",
        is_active: false,
    },
    {
        title: "Send Notification",
        description: "Send notification of an invoice to your customers",
        is_active: false,
    },
    {
        title: "Invoice Total",
        description: "Get invoice metrics for dashboard",
        is_active: false,
    },
    {
        title: "Finalize Invoice",
        description: "Finalize a Draft Invoice",
        is_active: false,
    },
    {
        title: "Update Invoice",
        description: "Update an invoice details on your integration",
        is_active: false,
    },
    {
        title: "Archive Invoice",
        description: "Used to archive an invoice. Invoice will no longer be fetched on list or returned on verify.",
        is_active: false,
    },
    {
        title: "Fetch Settlements",
        description: "Settlements made to your bank accounts and the bank accounts for your subaccounts",
        is_active: false,
    },
    {
        title: "Fetch Settlement Transactions",
        description: "Get the transactions that make up a particular settlement",
        is_active: false,
    },
    {
        title: "Create Transfer Recipient",
        description: "Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.",
        is_active: false,
    },
    {
        title: "List Transfer Recipients",
        description: "List transfer recipients available on your integration",
        is_active: false,
    },
    {
        title: "Fetch Transfer Recipient",
        description: "Fetch the details of a transfer recipient",
        is_active: false,
    },
    {
        title: "Update Transfer Recipient",
        description: "Update an existing recipient. An duplicate account number will lead to the retrieval of the existing record.",
        is_active: false,
    },
    {
        title: "Transfers",
        description: "The Transfers API allows you automate sending money on your integration",
        is_active: false,
    },
    {
        title: "Initiate Transfer",
        description: "Status of transfer object returned will be pending if OTP is disabled. In the event that an OTP is required, status will read otp.",
        is_active: false,
    },
    {
        title: "Finalize Transfer",
        description: "Finalize an initiated transfer",
        is_active: false,
    },
    {
        title: "Initiate Bulk Transfer",
        description: "You need to disable the Transfers OTP requirement to use this endpoint.",
        is_active: false,
    },
    {
        title: "List Transfers",
        description: "List the transfers made on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Transfer",
        description: "Get details of a transfer on your integration.",
        is_active: false,
    },
    {
        title: "Verify Transfer",
        description: "Verify the status of a transfer on your integration.",
        is_active: false,
    },
    {
        title: "Check Balance",
        description: "You can only transfer from what you have",
        is_active: false,
    },
    {
        title: "Resend Transfers OTP",
        description: "Generates a new OTP and sends to customer in the event they are having trouble receiving one.",
        is_active: false,
    },
    {
        title: "Disable Transfers OTP",
        description: "In the event that you want to be able to complete transfers programmatically without use of OTPs, this endpoint helps disable that….with an OTP. No arguments required. You will get an OTP.",
        is_active: false,
    },
    {
        title: "Finalize Disable OTP",
        description: "Finalize the request to disable OTP on your transfers.",
        is_active: false,
    },
    {
        title: "Enable Transfers OTP",
        description: "In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.",
        is_active: false,
    },
    {
        title: "Initiate Bulk Charge",
        description: "Send an array of objects with authorization codes and amount, in kobo if currency is NGN and pesewas, if currency is GHS. so we can process transactions as a batch.",
        is_active: false,
    },
    {
        title: "List Bulk Charge Batches",
        description: "This lists all bulk charge batches created by the integration. Statuses can be active, paused, or complete.",
        is_active: false,
    },
    {
        title: "Fetch Bulk Charge Batch",
        description: "This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the total_charges and pending_charges attributes.",
        is_active: false,
    },
    {
        title: "Fetch Charges in a Batch",
        description: "This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be pending, success or failed.",
        is_active: false,
    },
    {
        title: "Pause Bulk Charge Batch",
        description: "Use this endpoint to pause processing a batch",
        is_active: false,
    },
    {
        title: "Resume Bulk Charge Batch",
        description: "Use this endpoint to resume processing a batch",
        is_active: false,
    },
    {
        title: "Fetch Payment Session Timeout",
        description: "Fetch the payment session timeout on your integration",
        is_active: false,
    },
    {
        title: "Update Payment Session Timeout",
        description: "Update the payment session timeout on your integration",
        is_active: false,
    },
    {
        title: "Create Charge",
        description: "Send card details or bank details or authorization code to start a charge.",
        is_active: false,
    },
    {
        title: "Submit PIN",
        description: "Submit PIN to continue a charge",
        is_active: false,
    },
    {
        title: "Submit OTP",
        description: "Submit OTP to complete a charge",
        is_active: false,
    },
    {
        title: "Submit Phone",
        description: "Submit Phone when requested",
        is_active: false,
    },
    {
        title: "Submit Birthday",
        description: "Submit Birthday when requested",
        is_active: false,
    },
    {
        title: "Submit Address",
        description: "Submit address to continue a charge",
        is_active: false,
    },
    {
        title: "Check Pending Charge",
        description: "When you get 'pending' as a charge status or if there was an exception when calling any of the /charge endpoints, wait 10 seconds or more, then make a check to see if its status has changed. Don't call too early as you may get a lot more pending than you should.",
        is_active: false,
    },
    {
        title: "List Disputes",
        description: "List disputes filed against you",
        is_active: false,
    },
    {
        title: "Fetch Dispute",
        description: "Get more details about a dispute.",
        is_active: false,
    },
    {
        title: "List Transaction Disputes",
        description: "This endpoint retrieves disputes for a particular transaction",
        is_active: false,
    },
    {
        title: "Update Dispute",
        description: "Update details of a dispute on your integration",
        is_active: false,
    },
    {
        title: "Add Evidence",
        description: "Provide evidence for a dispute",
        is_active: false,
    },
    {
        title: "Get Upload URL",
        description: "Get URL to upload a dispute evidence.",
        is_active: false,
    },
    {
        title: "Resolve a Dispute",
        description: "Resolve a dispute on your integration",
        is_active: false,
    },
    {
        title: "Export Disputes",
        description: "Export disputes available on your integration",
        is_active: false,
    },
    {
        title: "Create Refund",
        description: "Initiate a refund on your integration",
        is_active: false,
    },
    {
        title: "List Refunds",
        description: "List refunds available on your integration.",
        is_active: false,
    },
    {
        title: "Fetch Refund",
        description: "Get details of a refund on your integration.",
        is_active: false,
    },
    {
        title: "Verify BVN Match",
        description: "Check if an account number and BVN are linked",
        is_active: false,
    },
    {
        title: "Resolve BVN",
        description: "Get a customer's information by using the Bank Verification Number",
        is_active: false,
    },
    {
        title: "Resolve Account Number",
        description: "Confirm an account belongs to the right customer",
        is_active: false,
    },
    {
        title: "Resolve Card BIN",
        description: "Get more information about a customer's card",
        is_active: false,
    },
    {
        title: "List Banks",
        description: "Get a list of all Nigerian banks and their properties",
        is_active: false,
    },
    {
        title: "List/Search Countries",
        description: "Gets a list of Countries that Paystack currently supports",
        is_active: false,
    },];

export default manifest;
import {getCustomer} from './sdk.mjs';
const customer = await getCustomer('sample-customer');
console.log(customer.displayName);

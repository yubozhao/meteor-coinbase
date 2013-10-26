var settings = Meteor.settings;

var COINBASE_API_KEY = process.env.COINBASE_API_KEY ||
   (settings && settings.coinbase_api_key);

if (!COINBASE_API_KEY)
  throw new Error(
    "COINBASE_API_KEY not set in Meteor.seetings or an enviroement variable");

var coinbaseAPI = Npm.require('coinbase');
var coinbaseAsync = new coinbaseAPI({APIKey: COINBASE_API_KEY});

Coinbase = {
  buy: Meteor._wrapAsync(coinbaseAsync.buy),
  contacts: Meteor._wrapAsync(coinbaseAsync.contacts),
  account: {
    balance: Meteor._wrapAsync(coinbaseAsync.account.balance),
    receiveAddress: Meteor._wrapAsync(coinbaseAsync.account.receiveAddress),
    generateReceiveAddress: Meteor._wrapAsync(coinbaseAsync.account.generateReceiveAddress)
  },
  currencies: {
    list: Meteor._wrapAsync(coinbaseAPI.currencies.list),
    exchangeRates: Meteor._wrapAsync(coinbaseAPI.currencies.exchangeRates)
  },
  orders: {
    list: Meteor._wrapAsync(coinbaseAPI.orders.list),
    get: Meteor._wrapAsync(coinbaseAPI.orders.get)
  },
  prices: {
    buy: Meteor._wrapAsync(coinbaseAPI.prices.buy),
    sell: Meteor._wrapAsync(coinbaseAPI.prices.sell)
  },
  transactions: {
    list: Meteor._wrapAsync(coinbaseAPI.transactions.list),
    get: Meteor._wrapAsync(coinbaseAPI.transactions.get)
  },
  transfers: {
    list: Meteor._wrapAsync(coinbaseAPI.transfers.list),
  }
};

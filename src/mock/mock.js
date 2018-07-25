
const db = require('./db.json');
const currencies = require('./currencies.json');
const address = require('./address.json');
const loginHistory = require('./loginhistory.json');
const messages = require('./messages.json');
const orderlistAll = require('./orderlist-all.json');
const apiList = require('./apiList.json');

module.exports = function () {
  return {
    'db.json': db,
    'currencies.json': currencies,
    'address.json':address,
    'loginhistory.json': loginHistory,
    'messages.json': messages,
    'orderlistAll.json': orderlistAll,
    "apiList.json": apiList
  }
}

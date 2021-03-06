const moment = require('moment-timezone');

const TransactionsTotalIntentHandler = require('./transactions-total-intent-handler');

class TodayIntentHandler extends TransactionsTotalIntentHandler {
  static getFromDate() {
    return moment.tz('Europe/London').subtract(1, 'day').format('YYYY-MM-DD');
  }

  static getToDate() {
    return moment.tz('Europe/London').format('YYYY-MM-DD');
  }

  static generateMessageWithAmount(amount) {
    return `You've spent £${amount} today.`;
  }

  static generateMessageWithNoTransactions() {
    return 'You haven\'t spend anything today.';
  }
}

module.exports = TodayIntentHandler;

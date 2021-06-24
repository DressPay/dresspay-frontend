function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const queryChecker = (args) => {
  if (
    !(
      "subject" in args &&
      "notify_url" in args &&
      "price" in args &&
      "return_url" in args &&
      "sign" in args &&
      "clientid" in args &&
      "out_trade_no" in args
    )
  )
    return false;
  if (!isNumber(args.price)) return false;
  return true;
};

module.exports = {
  queryChecker,
};

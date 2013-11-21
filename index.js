module.exports = convert;
module.exports.toDate = convertToDate;

function convert(date) {
  return (((+date) / 86400000) + 2440587.5).toFixed(6);
};

function convertToDate(julian) {
  return new Date((Number(julian) - 2440587.5) * 86400000);
};

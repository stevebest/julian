var test = require('tap').test;

var julian = require('..');

test('from Date to JD', function (t) {
  t.equal(julian(new Date(0)), '2440587.500000', 'unix epoch');
  t.equal(julian(new Date('2000-01-01T12:00:00.000Z')), '2451545.000000', 'noon of Jan 1, 2000');

  t.equal(julian(new Date('2013-01-01T00:30:00.000Z')), '2456293.520833');

  t.end();
});

test('from JD to Date', function (t) {
  t.equal(julian.toDate('2440587.500000').value, new Date(0).value, 'unix epoch');
  t.equal(julian.toDate('2451545.000000').value, new Date('2000-01-01T12:00:00.000Z').value, 'noon of Jan 1, 2000');
  t.end();
});

test('to JD and back', function (t) {
  var now = new Date();
  t.equal(julian.toDate(julian(now)).value, now.value);
  t.end();
});

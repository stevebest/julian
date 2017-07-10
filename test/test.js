var test = require('tap').test;

var julian = require('..');

test('from Date to JD', function (t) {
  t.equal(julian(new Date(0)), '2440587.500000', 'unix epoch');
  t.equal(julian(new Date('2000-01-01T12:00:00.000Z')), '2451545.000000', 'noon of Jan 1, 2000');

  t.equal(julian(new Date('2013-01-01T00:30:00.000Z')), '2456293.520833');

  t.end();
});

test('from JD to Date', function (t) {
  t.equal(+julian.toDate('2440587.500000'), +new Date(0), 'unix epoch');
  t.equal(+julian.toDate('2451545.000000'), +new Date('2000-01-01T12:00:00.000Z'), 'noon of Jan 1, 2000');

  t.end();
});

test('convert back and forth without floating point errors', function (t) {
  var now = new Date();

  t.equal(+
    julian.fromJulianDayAndMilliseconds(
      julian.toJulianDay(now),
      julian.toMillisecondsInJulianDay(now)
    ),
    +now,
    'now is converted to julian and back safely'
  );

  t.equal(
    julian.toMillisecondsInJulianDay(new Date('2000-01-01T12:00:00.000Z')),
    0,
    'the day starts at noon, so noon is zero milliseconds'
  );

  t.equal(
    julian.toJulianDay(new Date('1970-01-01T00:00:00.000Z')),
    2440587,
    'unix epoch starts on julian day 2440587'
  );

  t.equal(
    julian.toMillisecondsInJulianDay(new Date('1970-01-01T00:00:00.000Z')),
    43200000,
    'unix epoch starts with half a julian day'
  );

  t.equal(
    julian.toJulianDay(new Date('1970-01-01T12:00:00.000Z')),
    2440588,
    'first noon in unix epoch starts julian day 2440588'
  );

  t.equal(
    julian.toMillisecondsInJulianDay(new Date('1970-01-01T12:00:00.000Z')),
    0,
    'unix epoch starts with half a julian day'
  );

  //the instance in time known as j2000, aka terriestial time
  t.equal(
    julian.toJulianDay(new Date('2000-01-01T12:00:00.000Z')),
    2451545,
    'toJulianDay is give correct julian day for j2000 epoch'
  );
  // test data taken from https://en.wikipedia.org/wiki/Epoch_(astronomy)#Julian_years_and_J2000

  t.end();

});

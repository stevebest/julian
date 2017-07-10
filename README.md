# julian

Convert between JavaScript's [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object and [Julian dates](http://en.wikipedia.org/wiki/Julian_day) used in astronomy and history.

## usage

```javascript
  var julian = require('julian');

  var now = new Date();           // Let's say it's Thu, 21 Nov 2013 10:47:02 GMT
  var jd = '';

  console.log(jd = julian(now));  // -> '2456617.949335'
  console.log(julian.toDate(jd)); // -> Timestamp above in local TZ
```

## api

### julian(date)

Convert a `Date` into a string representing Julian Date.

### julian.toDate(jd)

Convert a Julian Date to a javascript `Date`.

### julian.toJulianDay(date)

return a javascript `Date` or `timestamp` to the julian day.
An integer day is returned.

### julian.toMillisecondsInJulianDay (date)

returns the number of milliseconds since the start of
the julian day. Note, the julian day starts at noon,
not at midnight. This seems strange, if you don't have
an accurate clock, then finding noon accurately is easy
(from the sun) but finding midnight is not easy. Julian
days have been used by astronomers since before accurate clocks.

### julian.fromJulianDayAndMilliseconds(day, ms)

Converts a julian day and ms back to a javascript timestamp.
Also, note that this is reversable with out floating point errors.

``` js
var date = Date.now()

assert.equal(
  julian.fromJulianDayAndMilliseconds(
    julian.toJulianDay(date),
    julian.toMillisecondsInJulianDay(date)
  ),
  date
)
```

## notice

Date systems are a mess. Leap years, leap seconds, epochs, different calendars using the same nomenclature, different countries using different calendars at the same time, etc.

This library doesn't even try to cope with all that shit.

If you want to display calendar dates in format appropriate for a given culture at a given time in history - well, first of all, good luck to you. For example, the [*October* Revolution](http://en.wikipedia.org/wiki/October_Revolution) took place in what most of us now call *November*. That's because in Tsar's Russia they still used obsolete Julian calendar until bolsheviks finally adopted Gregorian. Hey thanks, Lenin!

Luckily for historians and astronomers, they can just say the revolution began on 2421540 Julian Day, and that's the whole point. You don't mess with naming days, you just count them. Day 0 would be *1 January 4713 BC*. Or is that *27 Nov 4714 BC*? Fuck.

## license

MIT

## author

Stepan Stolyarov <stepan.stolyarov@gmail.com>



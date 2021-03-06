const timer                = require('rxjs').timer;
const map                  = require('rxjs/operators').map;
const take                 = require('rxjs/operators').take;
const tap                  = require('rxjs/operators').tap;
const distinctUntilChanged = require('rxjs/operators').distinctUntilChanged;

// Compare with the previous value

const items = [
    {index: 0, value: 1},
    {index: 0, value: 2},
    {index: 1, value: 2},
    {index: 0, value: 2},
    {index: 2, value: 3},
    {index: 3, value: 4},
    {index: 4, value: 5},
    {index: 5, value: 6},
];

const o$ = timer(0, 1000).pipe(map(i => items[i]));

o$.pipe(
    distinctUntilChanged((prev, cur) => prev.index === cur.index),
    take(5),
    tap(console.log)
).subscribe();

/**
 { index: 0, value: 1 }
 { index: 1, value: 2 }
 { index: 0, value: 2 }
 { index: 2, value: 3 }
 { index: 3, value: 4 }
 **/

const timer     = require('rxjs').timer;
const map       = require('rxjs/operators').map;
const take      = require('rxjs/operators').take;
const tap       = require('rxjs/operators').tap;
const pairwise  = require('rxjs/operators').pairwise;
const startWith = require('rxjs/operators').startWith;

// Emit the previous and current values as an array

timer(0, 1000).pipe(pairwise(), take(5)).subscribe(console.log);
/**
 [ 0, 1 ]
 [ 1, 2 ]
 [ 2, 3 ]
 [ 3, 4 ]
 [ 4, 5 ]
 */

timer(0, 1000).pipe(startWith(null), pairwise(), take(5)).subscribe(console.warn);
// [ null, 0 ]
// [ 0, 1 ]...

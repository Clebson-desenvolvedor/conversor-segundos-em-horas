const input = require('fs').readFileSync('stdin','utf-8');

let N = input;

var hour = parseInt(N / 3600);
N = N % 3600;

var minutes = parseInt(N / 60);
N = N % 60;

var second = N;

console.log(`${hour}:${minutes}:${second}`)




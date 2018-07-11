console.log('before');
setTimeout(_ => { console.log('setTimeout') });
setImmediate(_ => { console.log('setImmediate') });
Promise.resolve().then(_ => { console.log('Promise') });
console.log('after');
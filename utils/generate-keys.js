const crypto = require('crypto')
const { v4: uuidv4 } = require('uuid');

const key1 = crypto.randomBytes(32).toString('hex')
const key2 = crypto.randomBytes(32).toString('hex')

console.table({ key1, key2 })
console.table({ id1: uuidv4(), id2: uuidv4()})

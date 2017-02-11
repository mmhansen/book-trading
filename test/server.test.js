const test = require('ava')
const request = require('supertest')
const server = require('../src')

test('GET / should respond with 200', (t) => {
  request(server)
    .get('/')
    .end((err, res) => {
      if (err) t.fail()
      t.plan(2)
      t.is(res.status, 200)
      t.is(res.body.body, 'Cut it.', 'response should cut it')
    })
})

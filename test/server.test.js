const test = require('ava')
const request = require('supertest')
const server = require('../src')

const api = {
  get: path => {
    return request(server).get(path)
  }
}

test('GET / should respond with 200', async t => {
  const res = await api.get('/')

  t.plan(2)
  t.is(res.status, 200)
  t.is(res.body.body, 'Cut it.', 'response should cut it')
})

test('GET /elbow should respond with 404', async t => {
  const res = await api.get('/elbow')

  t.plan(2)
  t.is(res.status, 404)
  t.is(res.body.body, 'Not found.', 'respond isnt found')
})

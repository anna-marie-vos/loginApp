const express = require('express')
const test = require('ava')
const request = require('supertest-as-promised')

// instaniate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)
//const catsApi = require('../../api/cats')(db)

function makeApp () {
  const app = express()
  // set route namespace under test
 // app.use('/api/v1/cats', catsApi)
  return app
}

test.beforeEach(() => {
  return testKnex.migrate.latest()
    .then(() => {
      return testKnex.seed.run()
    })
})

test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})


// GET ALL
//test('API | Cats | It responds with a list of cats', (t) => {
//  t.plan(2)
//
//  return request(makeApp())
//    .get('/api/v1/cats')
//    .expect(200)
//    .then((res) => {
//      t.truthy(res.body.data)
//      t.true(res.body.data.length > 0)
//    })
//
//})


// POST new
//test('API | Cats | It responds by adding a new cat', (t) => {
//  t.plan(1)
//
//  const tibbles = {
//    name: "tibbles"
//  }
//
//  return request(makeApp())
//    .post('/api/v1/cats/')
//    .send(tibbles)
//    .then((res) => {
//      return testKnex('cats').select()
//    .then(rows => {
//      t.is(rows[0].name, tibbles.name)
//    })
//})


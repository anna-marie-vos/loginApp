const test = require('ava')
const seedCats = require('../../db/seed-cats')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

//migrate the latest cats database table
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})

//TEST 1 - gets all the cats table data, then checks each row has an idea (truthy) and then checks the name in the row matches the index of the seed data.
//test('find | responds with a list of cats', (t) => {
//  //t.plan(4)
//
// // return db promise method here
//  
//})

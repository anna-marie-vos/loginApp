
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1,
          name: 'adam',
          email:"adam@adam.com",
          password:"adam@adam.com",
          isAdmin:true
        }),
        knex('users').insert({id: 2,
          name: 'becki',
          email:"becki@becki.com",
          password:"becki@becki.com",
          isAdmin:false
        }),
        knex('users').insert({id: 3,
          name: 'cassie',
          email:"cassie@cassie.com",
          password:"cassie@cassie.com",
          isAdmin:false
        })
      ]);
    });
};

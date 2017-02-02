
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1,
          name: 'adam',
          email:"adam@adam.com",
          password:"$2a$10$bSoDnSxPFlXjzGAJw5mCpuHnrXxeQbPyUqQbjoi16uS3/rWiurY7O",
          isAdmin:true
        }),
        knex('users').insert({id: 2,
          name: 'becki',
          email:"becki@becki.com",
          password:"$2a$10$.CfEKoh.0Pyu5ktVGUs7peibL2XEtPCjKfUB/HRi8EOXalIsAOw6C",
          isAdmin:false
        }),
        knex('users').insert({id: 3,
          name: 'cassie',
          email:"cassie@cassie.com",
          password:"$2a$10$eEmEPwW/LbBXxe1F3EoScONW8Mez7izkn.EAMZmQllsfj8V3K6oJm",
          isAdmin:false
        })
      ]);
    });
};

module.exports = function (knex) {

  return {

    displayAllUsers:function(){
      return knex('users')
      .select('*')
    },

    displayUserByID: function(id){
      return knex('users')
      .select("*")
      .where('users.id',id)
    },

    findUserByEmail: function(email){
      return knex('users')
      .select('*')
      .where('users.email',email)
    },

    addNewUserToTable: function(new_user){
      return knex('users')
      .insert(new_user)
      			.then(function(ids) {
      				return knex('users')
      				.select('name', 'id')
      				.where ({id: ids[0]})
      			})
    }
  }
}

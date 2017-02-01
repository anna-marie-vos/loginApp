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
    }
  }
}

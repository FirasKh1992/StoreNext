const users=require('./userSeeds');

 function  findUserList(){
        return users;
    }

   function findUsersByDepartment(department){
       console.log(department);
            let usersByDeparment=users.filter(user=>user.department===department);
            console.log(usersByDeparment);
          return usersByDeparment;
    }
    
module.exports={
    findUserList,
    findUsersByDepartment

}

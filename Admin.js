const Employee = require("./Employee");
const fs = require("fs");
class Admin extends Employee{
    authority;

    constructor (name,departments,gender,startDate,salary){
      super(name,departments,gender,startDate,salary);
      this.authority = authority;
    }
    getAllEmployees(){
        FileSystem.readFile("db.json" , function (err,data){
            let stringData = data.toString();
            let jsonData = JSON.parse(stringData);
            console.log(jsonData);
        })
    }

}

        const akshata = new Admin(
            "akshata",
            ["hr"],
            "Female",
            12/04/2022,
            16000,
            true
        );
        console.log(akshata.getAllEmployees());
  
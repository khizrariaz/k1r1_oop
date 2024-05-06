#! /usr/bin/env node
import inquirer from "inquirer"


class Student {
    name: string
    constructor(n: string){
        this.name=n
    }
}

class Person{
    students: Student[]=[]

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()
console.log(persons)

const programmStart = async(persons : Person) =>{

   do{
    console.log("Welcome Guest!")

    const ans = await inquirer.prompt({

        type: "list",
        message: "want to chat someone?",
        name: "select",
        choices: ["Self", "student"],
    });

    if (ans.select == "Self"){
       console.log("Hello! i am talk with myself");
       console.log("I am good")
    }
    if (ans.select == "student"){
        const ans = await inquirer.prompt({
            type: "input",
            message: " To which student you want to talk?",
            name: "student"

        });
        const student = persons.students.find(val => val.name == ans.student)

        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            
            console.log(`Hello I am ${name.name}, please add me`);
            console.log(persons.students);
        }
        
        if (student){
            console.log(`Hello I am ${student.name}, which subject do you like? `);
            console.log(persons.students);
        }
    }


   }while(true)

};

programmStart(persons)
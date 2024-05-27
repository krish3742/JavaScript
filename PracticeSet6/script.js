//Q1
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(`User name is ${this.name}\nUser email is ${this.email}`);
    }
}

//Q2
class Admin extends User {
    editData(name, email) {
        this.name = name;
        this.email = email;
    }
}

let stu1 = new Admin();
stu1.viewData();
stu1.editData("Kshitij", "abc.in");
stu1.viewData();

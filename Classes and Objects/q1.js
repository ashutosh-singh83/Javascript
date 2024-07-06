let DATA="Secret Info";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData() {
        console.log(DATA);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="new value";
        console.log(DATA);
    }
}
let student1=new User("Ash","ash@email.com");
let student2=new User("Gaurav","gaurav@email.com");
let admin1=new Admin("admin","admin@email.com");
console.log(student1);
console.log(student2);
student1.viewData();
admin1.editData();

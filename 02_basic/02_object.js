
const mySym = Symbol("key1")



const JsUser = {
    name: "Qurrat",
    "full name": "Qurrat Owais",
    [mySym]: "mykey1",
    age: 24,
    location: "Karachi",
    email: "qurrat123google.com",
    isLoggedIn: false,
    lastLoggedIN: ["Monday", "Saturday"]
}

console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "qurrat@gpt.com"
//Object.freeze(JsUser)
JsUser.email = "qurrat@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    //console.log(`Hello JS User, ${this.name}`);
}
// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo());

//const tinderUser = new Object ()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Qurrat",
            lastname: "Owais"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
    id: 1,
    email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
            },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLOggedIn'));


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);


const navbar = ({company}) => {

}

navbar (company = "Qurrat")


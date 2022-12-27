import Iemployee from "../config/IEmployee";



var initialData:Iemployee[]=[
    {  
        "firstName":"Mark",
        "lastName": "Robert",
        "img":"/pic2.jpg",
        "email":"mark@gmail.com",
        "name":"Mark Peter",
        "jobTitle" :".Net Devlopement",
        "office":"Seattle",
        "department":"IT",
        "phoneNumber":"123445566",
        "skype":"abc",
        "id":1,
    },
    {
        "firstName":"Emma",
        "lastName": "Green",
        "img":"/pic1.jpg",
        "email":"green@gmail.com",
        "name":"Emma Green",
        "jobTitle" :"BI Devlopement",
        "office":"India",
        "department":"IT",
        "phoneNumber":"123445566",
        "skype":"abc",
        "id":2,
    },
    {
        "firstName":"Bob",
        "lastName": "Gellar",
        "img":"pic3.jpg",
        "email":"gellarr@gmail.com",
        "name" : "Bob Gellar",
        "jobTitle" :"Business Analyst",
        "office":"Seattle",
        "department":"MD",
        "phoneNumber":"123445566",
        "skype":"abc",
        "id":3,
    },
    {
        "firstName":"james",
        "lastName": "Gellar",
        "img":"",
        "email":"gellarm@gmail.com",
        "name": "James Gellar",
        "jobTitle" :"SharePoint Practice Head",
        "office":"Seattle",
        "department":"Human Resources",
        "phoneNumber":"123445566",
        "skype":"abc",
        "id":4,
    },
    {
        "firstName":"Joe",
        "lastName": "Tribbiani",
        "img":"",
        "email":"joe@gmail.com",
        "name" :"Joe Tribbiani",
        "jobTitle" :"Recruiting Expert",
        "office":"India",
        "department":"IT",
        "phoneNumber":"123445566",
        "skype":"abc",
        "id":5,
    },{
        "firstName":"Eshwar",
        "lastName": "kumar",
        "img":"",
        "email":"eshwar@gmail.com",
        "name" :"Eshwar Kumar",
        "jobTitle" :"Recruiting Expert",
        "office":"India",
        "department":"Sales",
        "phoneNumber":"123445566",
        "skype":"abc",
        "id":6,
    }
]; 



localStorage.setItem("employees",JSON.stringify(initialData));


export default {initialData}
import React from "react";
import Card from "./Components/Card";
import user from "./user";

const App = () => {

 const users = [
  {
    img: "sandeep.jpg",
    name: "Sandeep Choudhary",
    age: 20,
    bio: "Passionate frontend developer who loves creating modern UI designs.",
    work: "Frontend Developer"
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Verma",
    age: 24,
    bio: "Creative graphic designer with a strong eye for detail.",
    work: "Graphic Designer"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Rohan Mehta",
    age: 26,
    bio: "Backend engineer focused on scalable server-side applications.",
    work: "Backend Developer"
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sneha Kapoor",
    age: 21,
    bio: "Content writer who enjoys storytelling and blogging.",
    work: "Content Writer"
  },
  {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Kabir Singh",
    age: 28,
    bio: "Fitness enthusiast and certified personal trainer.",
    work: "Fitness Trainer"
  },
  {
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ananya Joshi",
    age: 23,
    bio: "UI/UX designer passionate about user-friendly experiences.",
    work: "UI/UX Designer"
  },
  {
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Vivaan Patel",
    age: 25,
    bio: "Mobile app developer building Android and iOS applications.",
    work: "App Developer"
  },
  {
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Meera Nair",
    age: 27,
    bio: "Digital marketer specializing in social media growth.",
    work: "Digital Marketer"
  },
  {
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Aditya Rao",
    age: 29,
    bio: "Cybersecurity analyst protecting systems from threats.",
    work: "Cybersecurity Analyst"
  },
  {
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Ishita Malhotra",
    age: 20,
    bio: "College student learning full-stack web development.",
    work: "Student"
  }
];

 

  return (
    <div className="parent">
      
       {users.map(function(elem , idx){
        return <div key = {idx}>
          <Card image = {elem.img} name = {elem.name}  age = {elem.age} bio = {elem.bio} work = {elem.work}/>
        </div>
        })}
      
    </div>
  );
};

export default App;

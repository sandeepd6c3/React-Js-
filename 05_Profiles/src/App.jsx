import React from 'react'
import Card from './components/Card'

const users = [
  {
    name: "Sandeep Choudhary",
    role: "Frontend Developer",
    work: "Epic Coder",
    status: "Available",
    pay: "$55/hr",
    image: "https://i.pinimg.com/1200x/82/ff/66/82ff66a7efd8ed5e8969ab6634ba8d85.jpg",
    skills: ["HTML", "CSS", "JS", "+4"],
    desc: "Pursuing BTech in AI&DS, learning frontend"
  },
  {
    name: "Rahul Sharma",
    role: "Backend Developer",
    work: "Node.js Expert",
    status: "Busy",
    pay: "$40/hr",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["Node", "Express", "MongoDB", "+2"],
    desc: "Backend dev with API expertise"
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    work: "Creative Mind",
    status: "Available",
    pay: "$60/hr",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["Figma", "Adobe XD", "UI", "+3"],
    desc: "Designing beautiful interfaces"
  },
  {
    name: "Amit Singh",
    role: "Full Stack Dev",
    work: "MERN Stack",
    status: "Available",
    pay: "$70/hr",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    skills: ["React", "Node", "MongoDB", "+5"],
    desc: "Building scalable web apps"
  },
  {
    name: "Neha Gupta",
    role: "Frontend Dev",
    work: "React Specialist",
    status: "Busy",
    pay: "$50/hr",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: ["React", "Tailwind", "JS", "+2"],
    desc: "Frontend lover with React skills"
  },
  {
    name: "Karan Mehta",
    role: "DevOps Engineer",
    work: "Cloud Master",
    status: "Available",
    pay: "$80/hr",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    skills: ["AWS", "Docker", "K8s", "+3"],
    desc: "Handles deployment & infra"
  },
  {
    name: "Sneha Kapoor",
    role: "Data Analyst",
    work: "Data Wizard",
    status: "Available",
    pay: "$45/hr",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    skills: ["Python", "SQL", "PowerBI", "+2"],
    desc: "Data insights specialist"
  },
  {
    name: "Arjun Patel",
    role: "Mobile Developer",
    work: "Flutter Dev",
    status: "Busy",
    pay: "$65/hr",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    skills: ["Flutter", "Dart", "Firebase", "+3"],
    desc: "Builds mobile apps"
  },
  {
    name: "Riya Jain",
    role: "QA Tester",
    work: "Bug Hunter",
    status: "Available",
    pay: "$35/hr",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    skills: ["Testing", "Selenium", "QA", "+1"],
    desc: "Ensures bug-free apps"
  },
  {
    name: "Vikas Yadav",
    role: "Cyber Security",
    work: "Ethical Hacker",
    status: "Available",
    pay: "$90/hr",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    skills: ["CEH", "Network", "Security", "+4"],
    desc: "Protects systems from attacks"
  }
];

const App = () => {

   
  
  return (
    <div className="parent">
      {users.map((user, idx) => (
        <Card key={idx} elem={user} />
           
      ))}
    </div>
  )
}

export default App

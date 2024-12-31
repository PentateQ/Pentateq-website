import React from "react";
import "./people.css";
import img1 from "./assets/pzwa.jpg";

function People() {
  const peopleData = [
    {
      id: 1,
      name: "Happy Mughogho",
      title: "CEO & Founder",
      university: "MUBAS",
      imgSrc: img1, // Use require to resolve path
    },
    {
      id: 2,
      name: "Kingsley Chideru",
      title: "Development Lead",
      university: "MUBAS",
      imgSrc: img1,
    },
    {
      id: 3,
      name: "Precious Namondwe",
      title: "Operations Manager",
      university: "MUBAS",
      imgSrc: img1,
    },
    {
      id: 4,
      name: "Prince Jim",
      title: "Marketing Lead & Designer",
      university: "MUBAS",
      imgSrc: img1,
    },
    {
      id: 5,
      name: "Dalitso Suliwa",
      title: "Cheif Technical Officer",
      university: "MUBAS",
      imgSrc: img1,
    },
    {
      id: 6,
      name: "Vitumbiko Kamanga",
      title: "Software Engineer",
      university: "MUBAS",
      imgSrc: img1,
    },
  ];

  return (
    <div className="people-container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <p>
        We are PENTATEQ Offering different services related to IT. We have
        skilled workers that can help to automate dairy work flow plans and mor.
        Try us to day you will Thank this company later
      </p>
      {peopleData.map((person) => (
        <div key={person.id} className="card">
          <div className="profile-pic">
            <img
              src={person.imgSrc}
              alt={person.name}
              style={{ width: "100%" }}
            />
          </div>
          <h2>{person.name}</h2>
          <p className="title">{person.title}</p>
          <p>{person.university}</p>
          <div className="social-icons">
            <a href="#">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
      ))}
      <p>
        We are PENTATEQ Offering different services related to IT. We have
        skilled workers that can help to automate dairy work flow plans and mor.
        Try us to day you will Thank this company later
      </p>
    </div>
  );
}

export default People;

import React from "react";
import Education from "./Education";

const services = [
  {
    id: 1,
    title: "Introduction to HTML5",
    description: "Grade Achieved: 97.66%",
    ReadMore: "https://coursera.org/share/39de26dd2999cae9ee4c125b25306888",
  },
  {
    id: 2,
    title: "Interactivity with JavaScript",
    description: "Grade Achieved: 97.12%",
    ReadMore: "https://coursera.org/share/b29e06429ccae4ee8d8fa8815e1b171d",
  },
  {
    id: 3,
    title: "Networking Fundamentals",
    description: "Grade Achieved: 82.50%",
    ReadMore: "https://coursera.org/share/d3585933a087dbd37d314e252d099e1a",
  },
  {
    id: 4,
    title: "Data Visualization and Communication with Tableau",
    description: "Grade Achieved: 92.98%.",
    ReadMore: "https://coursera.org/share/36235915fd1425436bd11bb3a320c6d2",
  },
  {
    id: 5,
    title: "C for Everyone: Structured Programming",
    description: "Grade Achieved: 97.50%",
    ReadMore: "https://coursera.org/share/c2762c947da112a89adc9690a24b9b52",
  },
  {
    id: 6,
    title: "Foundations of User Experience (UX) Design",
    description: "Grade Achieved: 91.11%.",
    ReadMore: "https://coursera.org/share/4dc95c8d580b67c9ab493ba58316c8bb",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <Education />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Certificate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href={service.ReadMore}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from 'react';
import useData from '../../hooks/useData';
import Card from '../Card/Card';
import './home.css'

const Home = () => {

  const [courses] = useData()

  const topCourses = courses.filter(course => course.rating >= 4)

  return (
    <section className=" pb-5">

      {/* header */}
      <div className="header-bg"></div>

      <div className="banner text-white">
        <h1>Looking for Tech Skills?</h1>
        <p>
          Grow your skills with experiences like assessments, paths and expert-led content on today’s most in-demand technologies.
        </p>
      </div>

      {/* main */}
      <div className="container">
        <div className="top-rated pb-5">
          <p>Top Rated</p>
          <h2>Our Top Rated Course</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {

            topCourses.map(course => <Card course={course} key={course.id} />)

          }
        </div>
      </div>

    </section>
  );

};

export default Home;



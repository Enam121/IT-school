import React from 'react';
import './courses.css'
import useData from '../../hooks/useData'
import Card from '../Card/Card';

const Services = () => {

  const [courses] = useData();

  return (

    <div className="container mb-5">

      <div className="py-5">
        <h2 className=" heading">Our Courses</h2>
        <div className="underline"></div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">

        {
          courses.map(course => <Card course={course} key={course.id} />)
        }

      </div>

    </div>

  );
};

export default Services;
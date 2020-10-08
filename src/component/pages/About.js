import React from 'react';
const About = (props) => {
  return (
    <div>
      <h2>About page</h2>
     <h5>{ props.match.params.id }</h5> 
     <h5> { props.match.params.name }</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim
        esse minima suscipit fuga voluptates cupiditate eum incidunt cum vero?
      </p>
    </div>
  );
};

export default About;

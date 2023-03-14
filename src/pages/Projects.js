
import React from 'react';// Import the React library

function Projects(props) { 
  // Define a functional component called "Projects" that takes in "props" as an argument
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      
    </div>
  );
}

export default Projects;
    

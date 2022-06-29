import React from 'react';

const List = ({person}) => {

 
  return (
    <>
      <div className='listOfPeople'>
      <div className="img">
        <img src={person.image} alt={person.name} />
      </div>
       <div className="content">
       <h4>{person.name}</h4>
        <p><small>{person.age} years</small></p>
       </div>
      </div>
      
    </>
  );
};

export default List;

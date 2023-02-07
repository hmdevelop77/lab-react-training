import profiles from '../data/berlin.json';
import React from 'react';
import './Facebook.css';

function FaceBook() {
  let arrayprofil = profiles;
  return (
    <div>
      {arrayprofil.map((e) => (
        <div key={e.id}>
          <div className="box">
            <div className="div-picture">
              <img src={e.img} alt="pict" />
            </div>
            <div className="div-info">
              <p>Last name:{e.lastName}</p>
              <p>First name: {e.firstName}</p>
              <p>Country: {e.country}</p>
              <p>Type: {(e.isStudent)? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function DirectorContainer() {
  const [directors, setDirectors] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then(r => r.json())
      .then(setDirectors);
  }, []);

  if (!directors) return null; // ⬅️ CRITICAL

  return (
    <>
      <NavBar />
      <Outlet context={{ directors, setDirectors }} />
    </>
  );
}

export default DirectorContainer;


// import React, { useState, useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import NavBar from '../components/NavBar';

// function DirectorContainer() {
//   const [directors, setDirectors] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('http://localhost:3000/directors')
//       .then(res => res.json())
//       .then(data => setDirectors(data));
//   }, []);

//   const addDirector = (newDirector) => {
//     fetch('http://localhost:3000/directors', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newDirector),
//     })
//       .then(res => res.json())
//       .then(data => {
//         setDirectors([...directors, data]);
//         navigate(`/directors/${data.id}`);
//       });
//   };

//   const updateDirector = (updatedDirector) => {
//     setDirectors(directors.map(d => 
//       d.id === updatedDirector.id ? updatedDirector : d
//     ));
//   };

//   return (
//     <div>
//       <NavBar />
//       <Outlet context={{ directors, addDirector, updateDirector }} />
//     </div>
//   );
// }

// export default DirectorContainer;

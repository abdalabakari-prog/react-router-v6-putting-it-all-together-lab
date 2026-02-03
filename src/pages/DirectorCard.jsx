import { useParams, Outlet, useOutletContext } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find(d => d.id === Number(id));

  if (!director) {
    return <h2>Director not found</h2>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <Outlet context={{ director }} />
    </div>
  );
}

export default DirectorCard;


// import React from 'react';
// import { useParams, useOutletContext, Outlet, Link } from 'react-router-dom';

// function DirectorCard() {
//   const { id } = useParams();
//   const { directors, updateDirector } = useOutletContext();
  
//   const director = directors.find(d => d.id === parseInt(id));

//   if (!director) {
//     return <div><h2>Director not found</h2></div>;
//   }

//   const addMovie = (newMovie) => {
//     fetch(`http://localhost:3000/directors/${director.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         movies: [...director.movies, newMovie]
//       }),
//     })
//       .then(res => res.json())
//       .then(updatedDirector => {
//         updateDirector(updatedDirector);
//       });
//   };

//   return (
//     <div>
//       <h2>{director.name}</h2>
//       <h3>Movies:</h3>
//       <Link to={`/directors/${director.id}/movies/new`}>Add New Movie</Link>
//       <ul>
//         {director.movies.map((movie, index) => (
//           <li key={index}>
//             <Link to={`/directors/${director.id}/movies/${index}`}>
//               {movie.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <Outlet context={{ director, addMovie }} />
//     </div>
//   );
// }

// export default DirectorCard;

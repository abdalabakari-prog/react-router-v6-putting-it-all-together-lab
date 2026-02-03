import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";

const initialDirectors = [
  {
    id: 1,
    name: "Christopher Nolan",
    bio: "Director of mind-bending films",
    movies: [
      { title: "Inception", year: 2010 },
      { title: "Interstellar", year: 2014 }
    ]
  },
  {
    id: 2,
    name: "Quentin Tarantino",
    bio: "Known for stylized violence",
    movies: [
      { title: "Pulp Fiction", year: 1994 }
    ]
  }
];

function DirectorContainer() {
  const [directors, setDirectors] = useState(initialDirectors);

  return (
    <>
      <NavBar />
      <Outlet context={{ directors, setDirectors }} />
    </>
  );
}

export default DirectorContainer;

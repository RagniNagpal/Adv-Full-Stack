import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/users/1">User 1</Link> |{" "}
          <Link to="/users/2">User 2</Link>
        </nav>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/1" element={<User />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function User() {
  const { id } = useParams();

  return <h1>User no: {id}</h1>;
}

function PageNotFound() {
  return <h1>404 ERROR</h1>;
}

export default App;
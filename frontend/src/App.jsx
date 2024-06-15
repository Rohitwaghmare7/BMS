import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MovieState from "./context/MovieState";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <>
      <MovieState>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signUp" element={<SignUp />}></Route>
          <Route path="/movie/:id" element={<MovieDetails/>}></Route>
        </Routes>
      </MovieState>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; // Import the useDispatch function
import { auth } from './firebase';
import { setUser } from './actions'; // Import your action creator

import { Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
// import store from './redux/store'; // Adjust the import path to your store

function App() {
  const dispatch = useDispatch(); // Create a dispatch function

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // Dispatch the action to set the user
        dispatch(setUser(authUser));
      } else {
        // Dispatch the action to set the user to null
        dispatch(setUser(null));
      }
    });
  }, [dispatch]); // Include dispatch as a dependency in useEffect

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

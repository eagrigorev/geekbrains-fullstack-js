import './App.css';
import React from "react";
import firebase from 'firebase';
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./components/router";

export default function App() {
  const handleSignOut = (event) => {
    event.preventDefault();
    firebase.auth().signOut()
  };

  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/chats">Chats</Link>
          </li>
          <li>
            <Link to="/advice-slip">AdviceSlip</Link>
          </li>
          <li>
            <a href="/" onClick={handleSignOut}>Sign Out</a>
          </li>
        </ul>
      </header>
      <Router />
    </BrowserRouter>
  );
};
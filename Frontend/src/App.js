import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CreateExercise from './components/create-exercise.component';
import ExerciseList from "./components/exercise-list.component";
import CreateUser from './components/create-user.component';
import Navbar from "./components/navbar.components";
import { About } from './components/About';
import { ExcerciseDemo } from './components/ExcerciseDemo';
function App() {
  return (
    <Router>
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<ExerciseList/>}/>
        <Route path="/exercisetutorials" element={<ExcerciseDemo/>}/>
        <Route path="/create" element={<CreateExercise/>}/>
        <Route path="/user" element={<CreateUser/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutLog from "./pages/WorkoutLog";
import Statistics from "./pages/Statistics";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  const [workoutData, setWorkoutData] = useState([]); 

  const handleSaveWorkout = (data) => {
    setWorkoutData((prev) => [...prev, data]); 
  };

  return (
    <Router>
      <AuthProvider>
        <div className="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
       
            <Route 
              path="/dashboard" 
              element={
                <>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </>
              } 
            />
            <Route 
              path="/workout-log" 
              element={
                <>
                  <Navbar />
                  <WorkoutLog workoutData={workoutData} />
                  <Footer />
                </>
              } 
            />
            <Route 
              path="/statistics" 
              element={
                <>
                  <Navbar />
                  <Statistics />
                  <Footer />
                </>
              } 
            />
            <Route 
              path="/workout-form" 
              element={
                <>
                  <Navbar />
                  <WorkoutForm onSaveWorkout={handleSaveWorkout} /> 
                  <Footer />
                </>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;

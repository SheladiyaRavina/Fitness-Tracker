import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
} from "@mui/material";

const Dashboard = () => {

  const [workouts, setWorkouts] = useState([
    { id: 1, activity: "Running", duration: "30", calories: 300, date: "2024-10-12" },
    { id: 2, activity: "Cycling", duration: "45", calories: 400, date: "2024-10-11" },
    { id: 3, activity: "Swimming", duration: "60", calories: 500, date: "2024-10-10" },
    { id: 4, activity: "Yoga", duration: "50", calories: 200, date: "2024-10-09" },
    { id: 5, activity: "HIIT", duration: "25", calories: 350, date: "2024-10-08" },
    { id: 6, activity: "Walking", duration: "40", calories: 180, date: "2024-10-07" },
    { id: 7, activity: "Strength Training", duration: "45", calories: 400, date: "2024-10-06" },
    { id: 8, activity: "Cycling", duration: "50", calories: 450, date: "2024-10-05" },
    { id: 9, activity: "Pilates", duration: "40", calories: 220, date: "2024-10-04" },
  ]);


  const [goals, setGoals] = useState({
    calories: 2500, 
    duration: 300,  
  });

  
  const totalCaloriesBurned = workouts.reduce((total, workout) => total + workout.calories, 0);
  const totalDurationSpent = workouts.reduce((total, workout) => total + parseInt(workout.duration), 0);

  const caloriesProgress = (totalCaloriesBurned / goals.calories) * 100;
  const durationProgress = (totalDurationSpent / goals.duration) * 100;

  return (
    <Box sx={{ padding: "30px", backgroundColor: "#f0f2f5", minHeight: "100vh" , width:"80%", mx:'auto'}}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#4CAF50", textAlign: "center" }}>
        Fitness Dashboard
      </Typography>


      <Paper elevation={4} sx={{ padding: "20px", marginBottom: "30px", backgroundColor: "#fff", borderRadius: "10px" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
          Recent Workouts
        </Typography>
        <Grid container spacing={3}>
          {workouts.slice(-9).map((workout) => (
            <Grid item xs={12} sm={6} md={4} key={workout.id}>
              <Card elevation={2} sx={{ borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
                <CardHeader
                  title={workout.activity}
                  subheader={workout.date}
                  sx={{ backgroundColor: "#e5dede", color: "#000", padding: "10px", textAlign: "center", borderRadius: "10px 10px 0 0" }}
                />
                <Divider />
                <CardContent>
                  <Typography variant="body1" sx={{ marginBottom: "10px", fontWeight: 500 }}>
                    Duration: <span style={{ color: "#4CAF50" }}>{workout.duration} min</span>
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Calories Burned: <span style={{ color: "#4CAF50" }}>{workout.calories}</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

     
      <Paper elevation={4} sx={{ padding: "20px", marginBottom: "30px", backgroundColor: "#fff", borderRadius: "10px" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
          Weekly Goals
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: "5px" }}>
              Calories Burned: {totalCaloriesBurned} / {goals.calories}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={caloriesProgress}
              sx={{ height: 10, borderRadius: 5, backgroundColor: "#f0f0f0", '& .MuiLinearProgress-bar': { backgroundColor: "#4CAF50" } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: "5px" }}>
              Workout Duration: {totalDurationSpent} min / {goals.duration} min
            </Typography>
            <LinearProgress
              variant="determinate"
              value={durationProgress}
              sx={{ height: 10, borderRadius: 5, backgroundColor: "#f0f0f0", '& .MuiLinearProgress-bar': { backgroundColor: "#4CAF50" } }}
            />
          </Grid>
        </Grid>
      </Paper>

 
      <Paper elevation={4} sx={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
          Progress Tracking
        </Typography>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: "10px" }}>
            You have burned <span style={{ color: "#4CAF50" }}>{totalCaloriesBurned}</span> out of {goals.calories} calories this week!
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            You have worked out for <span style={{ color: "#4CAF50" }}>{totalDurationSpent}</span> minutes out of {goals.duration} minutes this week!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;

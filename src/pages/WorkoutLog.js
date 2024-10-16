import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const WorkoutLog = ({ workoutData = [] }) => {
 
  const dummyWorkouts = [
    { activityType: 'Running', duration: 30, caloriesBurned: 300, date: '2024-10-12' },
    { activityType: 'Cycling', duration: 45, caloriesBurned: 400, date: '2024-10-13' },
    { activityType: 'Swimming', duration: 60, caloriesBurned: 500, date: '2024-10-14' },
    { activityType: 'Weightlifting', duration: 40, caloriesBurned: 350, date: '2024-10-15' },
    { activityType: 'Yoga', duration: 50, caloriesBurned: 250, date: '2024-10-16' },
    { activityType: 'HIIT', duration: 35, caloriesBurned: 450, date: '2024-10-17' },
    { activityType: 'Rowing', duration: 55, caloriesBurned: 520, date: '2024-10-18' },
  ];

  const workoutsToShow = workoutData.length > 0 ? workoutData : dummyWorkouts;

  return (
    <Box sx={{  margin: 'auto', mt: 5 ,width:"90%",}}>
      <Typography variant="h4" align="center" gutterBottom>
        Workout Log
      </Typography>

      <TableContainer component={Paper} elevation={6} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: '#4CAF50' }}>Activity Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4CAF50' }}>Duration (minutes)</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4CAF50' }}>Calories Burned</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#4CAF50' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workoutsToShow.map((workout, index) => (
              <TableRow key={index} hover>
                <TableCell>{workout.activityType}</TableCell>
                <TableCell>{workout.duration}</TableCell>
                <TableCell>{workout.caloriesBurned}</TableCell>
                <TableCell>{workout.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: '#4CAF50',
              ':hover': { backgroundColor: '#45A049' },
              py: 1.5,
              fontWeight: 'bold',
            }}
            component={Link}
            to="/workout-form"
          >
            Add Workout
          </Button>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default WorkoutLog;

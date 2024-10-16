import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Paper,
  Alert,
} from '@mui/material';

const activityTypes = [
  'Running',
  'Cycling',
  'Swimming',
  'Weightlifting',
  'Yoga',
  'Other',
];

const WorkoutForm = ({ onSaveWorkout }) => {
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [date, setDate] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const workoutData = {
      activityType,
      duration,
      caloriesBurned,
      date,
    };

    onSaveWorkout(workoutData);

    setActivityType('');
    setDuration('');
    setCaloriesBurned('');
    setDate('');
    
    setSuccessMessage('Workout logged successfully!');
    
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <Paper elevation={6} sx={{ padding: 4, width:"70%", margin: 'auto', mt: 5, alignItems:'center' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Log Your Workout
        </Typography>

        {successMessage && ( 
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <TextField
          select
          label="Activity Type"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
          required
          fullWidth
        >
          {activityTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Duration (minutes)"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Calories Burned"
          type="number"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          required
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            backgroundColor: '#4CAF50',
            ':hover': { backgroundColor: '#45A049' },
            py: 1.5,
            fontWeight: 'bold',
          }}
        >
          Log Workout
        </Button>
      </Box>
    </Paper>
  );
};

export default WorkoutForm;

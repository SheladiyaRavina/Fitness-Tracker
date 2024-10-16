import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from 'recharts';


const weeklyWorkoutData = [
  { name: 'Week 1', workouts: 4 },
  { name: 'Week 2', workouts: 5 },
  { name: 'Week 3', workouts: 3 },
  { name: 'Week 4', workouts: 6 },
];

const activityData = [
  { name: 'Running', value: 300 },
  { name: 'Cycling', value: 400 },
  { name: 'Swimming', value: 250 },
  { name: 'Yoga', value: 100 },
];

const workoutDurationData = [
  { activity: 'Running', duration: 120 },
  { activity: 'Cycling', duration: 100 },
  { activity: 'Swimming', duration: 80 },
  { activity: 'Yoga', duration: 40 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const Statistics = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Workout Statistics
      </Typography>
      <Grid container spacing={4}>
     
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", color: "#00bfa5" }}>
                Weekly Workout Trends
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={weeklyWorkoutData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="workouts" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

       
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", color: "#ff4081" }}>
                Activity Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

  
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", color: "#3f51b5" }}>
                Workout Durations by Activity
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={workoutDurationData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="activity" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="duration" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Statistics;

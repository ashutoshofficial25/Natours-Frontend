import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, marginBottom: 12 }}>
            <CardMedia
              component="img"
              image="https://natours-dev-jorge.herokuapp.com/img/tours/tour-1-cover.jpg"
              height="254"
              alt="tour-img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                EASY 5-DAY TOUR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breathtaking hike through the Canadian Banff National Park
              </Typography>
              <Grid container className="card-data">
                <Grid item xs={6}>
                  Simla
                </Grid>
                <Grid item xs={6}>
                  26 June
                </Grid>
                <Grid item xs={6}>
                  3 stops
                </Grid>
                <Grid item xs={6}>
                  20 people
                </Grid>
              </Grid>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography>233 per person</Typography>
                  <Typography>5 rating(9)</Typography>
                </Grid>
                <Grid item>
                  <Link underline="none" to="/tourDetails">
                    Details
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, marginBottom: 12 }}>
            <CardMedia
              component="img"
              image="https://natours-dev-jorge.herokuapp.com/img/tours/tour-1-cover.jpg"
              height="254"
              alt="tour-img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                EASY 5-DAY TOUR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breathtaking hike through the Canadian Banff National Park
              </Typography>
              <Grid container className="card-data">
                <Grid item xs={6}>
                  Simla
                </Grid>
                <Grid item xs={6}>
                  26 June
                </Grid>
                <Grid item xs={6}>
                  3 stops
                </Grid>
                <Grid item xs={6}>
                  20 people
                </Grid>
              </Grid>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography>233 per person</Typography>
                  <Typography>5 rating(9)</Typography>
                </Grid>
                <Grid item>
                  <Button>Details</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, marginBottom: 12 }}>
            <CardMedia
              component="img"
              image="https://natours-dev-jorge.herokuapp.com/img/tours/tour-1-cover.jpg"
              height="254"
              alt="tour-img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                EASY 5-DAY TOUR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breathtaking hike through the Canadian Banff National Park
              </Typography>
              <Grid container className="card-data">
                <Grid item xs={6}>
                  Simla
                </Grid>
                <Grid item xs={6}>
                  26 June
                </Grid>
                <Grid item xs={6}>
                  3 stops
                </Grid>
                <Grid item xs={6}>
                  20 people
                </Grid>
              </Grid>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography>233 per person</Typography>
                  <Typography>5 rating(9)</Typography>
                </Grid>
                <Grid item>
                  <Button>Details</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;

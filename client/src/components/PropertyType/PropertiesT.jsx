import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

import "./Properties.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const PropertiesT = () => {
  let { state } = useLocation();
  const [propertiesT, setPropertiesT] = React.useState([]);
  const [type, setType] = React.useState(state.type);

  const fetchTypes = () => {
    return axios
      .get(`http://mysterious-caverns-77924.herokuapp.com/property/type/${type}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    fetchTypes().then((data) => {
      setPropertiesT((prevState) => [...prevState, ...data]);
      console.log(data);
    });
  }, []);

  return (
    <Container className="PropertyList">
      <Grid container spacing={4}>
        {propertiesT.map((property, index) => (
          <Grid item xs={12} md={6}>
            <CardActionArea component="a">
              <Link
                style={{ textDecoration: "none" }}
                to={"/property"}
                state={{ id: property._id }}
              >
                <Item className="Property" sx={{ display: "flex" }}>
                  <CardMedia
                    className="propertyImage"
                    component="img"
                    sx={{ width: 160, display: { sm: "block" } }}
                    image={property.photos}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      className="PropertyTitle"
                      component="h2"
                      variant="h5"
                    >
                      {property.title}
                    </Typography>
                    <Typography
                      className="propertyLocation"
                      variant="subtitle1"
                    >
                      {property.location}
                    </Typography>
                    <Typography
                      className="PropertyPrice"
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      ${property.rental_price} CAD / night
                    </Typography>
                    <Typography
                      className="propertyDesc"
                      variant="subtitle1"
                      paragraph
                    >
                      {property.description}
                    </Typography>
                    {property.isBestseller && (
                      <Typography variant="subtitle1" color="primary">
                        <Chip color="primary" label="Bestseller" />
                      </Typography>
                    )}
                  </CardContent>
                </Item>
              </Link>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertiesT;

import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import "./Property.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const Property = () => {
  let { state } = useLocation();
  const [property, setProperty] = React.useState({});
  const [houseRules, setHouseRules] = React.useState([]);
  const [amenities, setAmenities] = React.useState([]);
  const [id, setId] = React.useState(state.id);
  console.log(id);
  const fetchTypes = () => {
    return axios
      .get(`http://mysterious-caverns-77924.herokuapp.com/property/${id}`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    fetchTypes().then((data) => {
      setProperty(data);
      setHouseRules(data.house_rules);
      setAmenities(data.amenities)
    });
  }, []);

  return (
    <div className="propertyItem" sx={{ display: "flex" }}>
      <CardMedia
        className="propertyitemimage"
        component="img"
        style={{ width: "30rem" }}
        image={property.photos}
      />
      <br className="newLine" />
      <CardContent className="propertyItemText">
        <Typography className="PropertyTitle" component="h2" variant="h5">
          {property.title}
        </Typography>
        
        <Typography className="propertyLocation" variant="subtitle1">
          {property.location}
        </Typography>
        <Typography
          className="PropertyPrice"
          variant="subtitle1"
          color="text.secondary"
        >
          ${property.rental_price} CAD / night
        </Typography>
        
        <Typography className="propertyDesc" variant="subtitle1" paragraph>
          {property.description}
        </Typography>
        {property.isBestseller && (
          <Typography className="bestsellerIcon" variant="subtitle1" color="primary">
            <Chip color="primary" label="Bestseller" />
          </Typography>
        )}
        <Divider light />
        <Typography className="propertyLocation" variant="subtitle1">
          House rules
        </Typography>
        <Typography className="propertyDesc" variant="subtitle1" paragraph>
          {
            houseRules.map(txt => 
              <div style={{ color: "grey" }}>{txt}</div>
            )
            // .map((rule, index) => {
            //   <div key={index}>rule</div>
            // })
          }
        </Typography>
        <Divider light />
        <Typography className="propertyLocation" variant="subtitle1">
          Amenities
        </Typography>
        <Typography className="propertyDesc" variant="subtitle1" paragraph>
          {
            amenities.map(txt => 
              <div style={{ color: "grey" }}>{txt}</div>
            )
            // .map((rule, index) => {
            //   <div key={index}>rule</div>
            // })
          }
        </Typography>
        <Button variant="contained">Choose</Button>
        <Button className="ButtonProperty" variant="contained">Add to favourite</Button>
      </CardContent>
      
    </div>
  );
};

export default Property;

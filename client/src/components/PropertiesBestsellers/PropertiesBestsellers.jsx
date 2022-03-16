import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PropertiesBestsellers.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const images = [
  "https://cdn-res.keymedia.com/cms/images/ca/155/0348_637266014596467663.jpg",
  "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/hotel.max-1300x1300.jpg",
];
const fetchTypes = () => {
  return axios
    .get("http://localhost:5000/property/bestsellers")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const PropertiesBestsellers = () => {
  const [bestsellers, setBestsellers] = React.useState([]);

  React.useEffect(() => {
    fetchTypes().then((data) => {
        setBestsellers((prevState) => [...prevState, ...data]);
      console.log(data);
    });
  }, []);
  return (
    <div className="propertyTypesSec">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {bestsellers.map((type, index) => (
           
          <Grid item xs={6} key={index} className="gridElemBestseller">
            <Link style={{textDecoration: 'none',}} to={"/property"} state={{ id: type._id }}>
              <Item className="propertyBestseller">
                <div>
                  <img
                    alt="img"
                    style={{
                      width: "100%",
                    }}
                    src={type.photos}
                    className="propertBestsellerImage"
                  />
                </div>
              </Item>
              
              <span className="BestsellerName">{type.location}</span>
              <span className="price">${type.rental_price} CAD / night</span>
            </Link>
          </Grid>
         
        ))}
      </Grid>
    </div>
  );
};

export default PropertiesBestsellers;

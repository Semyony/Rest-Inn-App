import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PropertyTypesSection.css";

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
    .get("http://localhost:5000/property/types")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const PropertyTypesSection = () => {
  const [types, setType] = React.useState([]);

  React.useEffect(() => {
    fetchTypes().then((data) => {
      setType(data);
      console.log(types);
    });
  }, []);
  return (
    <div className="propertyTypesSec">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {types.map((type, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={index}
            className="propertyTypeGrid"
          >
            <Link style={{textDecoration: 'none',}} to={"/propertybytype"} state={{ type: type }}>
            <Item className="propertyType">
              <div>
                <img
                  alt="img"
                  style={{
                    width: "100%",
                  }}
                  src={images[index]}
                  className="propertTypesImage"
                />
                <div className="propertyTypeName">{type}</div>
              </div>
            </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PropertyTypesSection;

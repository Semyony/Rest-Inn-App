import React from "react";
import "./FooterStyles.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


const Footer = () => {
  return (
    <div className="Box footerSec">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={3} className="gridElemfooter">
          <div className="footerItem">
            <div>
              <div className="footerItemName">Support</div>
              <div className="listFooter">Help Centre</div>
              <div className="listFooter">Safety information</div>
              <div className="listFooter">Cancellation options</div>
              <div className="listFooter">Our COVID-19 Response</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className="gridElemfooter">
          <div className="footerItem">
            <div>
              <div className="footerItemName">Community</div>
              <div className="listFooter">Help Centre</div>
              <div className="listFooter">Safety information</div>
              <div className="listFooter">Cancellation options</div>
              <div className="listFooter">Our COVID-19 Response</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className="gridElemfooter">
          <div className="footerItem">
            <div>
              <div className="footerItemName">Hosting</div>
              <div className="listFooter">Try hosting</div>
              <div className="listFooter">Protection for Hosts</div>
              <div className="listFooter">Visit our community forum</div>
              <div className="listFooter">How to host responsibly</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className="gridElemfooter">
          <div className="footerItem">
            <div>
              <div className="footerItemName">Community</div>
              <div className="listFooter">Newsroom</div>
              <div className="listFooter">Learn about new features</div>
              <div className="listFooter">Letter from our founders</div>
              <div className="listFooter">Careers</div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div class="bottom">© 2022 Airbnb, Inc. · Privacy · Terms · Sitemap</div>
    </div>
  );
};
export default Footer;

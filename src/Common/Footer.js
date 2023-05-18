import { Grid } from "@mui/material";
import React from "react";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { SocialIcon } from "react-social-icons";
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#D1C4E9", minHeight: "35vh", marginTop: "40px"}}>
      <Grid container sx={{pt:3}}>
        <Grid item xs={4}>
        <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <BuildOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>Dịch vụ</div>
            </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <CheckBoxOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>Dịch vụ 1</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <CheckBoxOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>Dịch vụ 2</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <CheckBoxOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>Dịch vụ 3</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <CheckBoxOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>Dịch vụ 4</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <CheckBoxOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>Dịch vụ 5</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
        <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <LocationOnOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>Địa chỉ</div>
            </div>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <PhoneCallbackOutlinedIcon
                  fontSize="small"
                  sx={{ pt: 0.5, mr: 1 }}
                />
              </div>
              <div>: +852 1234 5678</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <EmailOutlinedIcon fontSize="small" sx={{ pt: 0.5, mr: 1 }} />
              </div>
              <div>: confusion@food.net</div>
            </div>
          </address>
        </Grid>

        <Grid item xs={4}>
          <SocialIcon
            url="https://www.facebook.com/"
            target="_blank"
            style={{ height: 40, width: 40, color: "#ffffff", marginRight:"5px" }}
          />
          <SocialIcon
            url="https://www.youtube.com/"
            target="_blank"
            style={{ height: 40, width: 40, marginRight:"5px" }}
          />
          <SocialIcon
            url="https://gmail.com/"
            target="_blank"
            style={{ height: 40, width: 40, marginRight:"5px" }}
          />
          <SocialIcon
            url="https://twitter.com/"
            target="_blank"
            style={{ height: 40, width: 40, marginRight:"5px" }}
          />
          <SocialIcon
            url="https://tiktok.com/"
            target="_blank"
            style={{ height: 40, width: 40 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

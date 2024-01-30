import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

const ProfileSett = () => {
  return (
    <Box className="flex items-end justify-between border-b-1 pb-4">
      <Box>
        <div className="w-[90px] flex">
          <img
            className="aspect-square object-cover rounded-full"
            src={
              "https://media.wired.com/photos/5926e069af95806129f50e99/master/w_1600%2Cc_limit/Angelina-Jolie-100x130cm-2013.jpg"
            }
            alt="profile"
          />
        </div>
        <Typography
          sx={{
            bgcolor: "#2d2c2e",
            width: "fit-content",
            padding: ".2rem .4rem",
            fontSize: ".78rem",
            fontWeight: "400",
            color: "white",
            borderRadius: "4px",
            mt: "1rem",
            opacity: ".7",
          }}
        >
          Accountant
        </Typography>
      </Box>
      <button
        style={{ transition: "all .4s" }}
        className="hover:bg-black bg-secondary text-white px-3 flex align-center items-center h-[35px] gap-3 rounded-full text-sm py-2 cursor-pointer"
      >
        <i className="bi bi-cloud-upload-fill"></i>
        <span>Upload image</span>
      </button>
    </Box>
  );
};

export default ProfileSett;

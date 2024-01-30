import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

const CardSettings = () => {
  return (
    <Box className="flex  flex-col w-[30%] dsk">
      {/* TODO:use context api */}
      <div className=" mb-2 shadow rounded-md  py-4 px-3">
        <Tooltip title="privacy">
          <i className="bi bi-eye-slash-fill bg-neutral-color opacity-30 hover:opacity-100 hover:cursor-pointer text-white flex text-[1rem] w-8 h-8 align-middle items-center justify-center rounded-full "></i>
        </Tooltip>
        <h4 className="mt-2 text-secondary font-medium">
          Some Information isn't displayed
        </h4>
        <small className="text-slate-400 font-[400] ">
          Rest assure, safeguard precautions has been taken to keep your
          identity safe by not displaying certain account details
        </small>
        <br />
        <button>
          <span>Learn more</span>
        </button>

        {/* ACCORDION */}
      </div>
      <div className=" mb-2 shadow rounded-md py-4 px-3">
        {/* TODO: passkey has been set */}
        <Tooltip title="safety">
          <i className="bi bi-person-fill-lock bg-neutral-color opacity-30 hover:opacity-100 hover:cursor-pointer text-white flex text-[1rem] w-8 h-8 align-middle items-center justify-center rounded-full "></i>
        </Tooltip>
        <h4 className="mt-2 text-secondary font-medium">
          Some Information isn't displayed
        </h4>
        <small className="text-slate-400 font-[400] ">
          Rest assure, safeguard precautions has been taken to keep your
          identity safe by not displaying certain account details
        </small>
        <br />
        <button>
          <span>Learn more</span>
        </button>

        {/* ACCORDION */}
      </div>
      <div className=" mb-2 shadow rounded-md py-4 px-3">
        <Tooltip title="edit info">
          <i className="bi bi-pencil bg-neutral-color opacity-30 hover:opacity-100 hover:cursor-pointer text-white flex text-[1rem] w-8 h-8 align-middle items-center justify-center rounded-full "></i>
        </Tooltip>
        <h4 className="mt-2 text-secondary font-medium">
          Some Information isn't displayed
        </h4>
        <small className="text-slate-400 font-[400] ">
          Rest assure, safeguard precautions has been taken to keep your
          identity safe by not displaying certain account details
        </small>
        <br />
        <button>
          <span>Learn more</span>
        </button>

        {/* ACCORDION */}
      </div>
    </Box>
  );
};

export default CardSettings;

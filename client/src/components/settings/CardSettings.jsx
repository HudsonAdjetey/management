import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

const CardSettings = () => {
  return (
    <section className="w-[30%] flex flex-col sec-all ">
      <Box className="flex  flex-col dsk">
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
      <div className="historyCall my-4 mt-5">
        <div className="  schoolInfo">
          <h3 className="pb-2 border-b-1 mb-5 font-medium">School Info</h3>

          <div className="flex flex-col mb-5 shadow rounded-md p-4 items-center">
            <img
              src="https://cdn.dribbble.com/users/2367689/screenshots/5684285/media/e9d0a00f7ac09c3ac99dd71447965072.jpg?resize=180x0"
              alt="school crest"
            />
            <h4 className="text-[1rem] font-medium mt-4">
              Alfred International School
            </h4>
            <a
              href="mailto:alfred@gmail.com"
              className="underline text-blue-500"
            >
              alfred@gmail.com
            </a>
            <button className=" w-full mt-5 text-[.8rem] pt-1 border-t-1 font-medium hover:text-blue-500">
              Configure profile
            </button>
          </div>

          <h3 className="pb-2 border-b-1 mb-5 font-medium">Need Help?</h3>

          <div className="flex flex-col justify-evenly  shadow rounded-md p-4 ">
            <p className="flex items-center justify-between">
              <i className="bi bi-telephone-fill bg-green-100 w-10 h-10 flex items-center text-green-500 justify-center rounded-full"></i>
              <span className="font-[500]">Contact for support</span>
            </p>
            <p className="mt-4 text-[.8rem] font-medium text-secondary">
              Choose between emailing us or contacting our customer service
              agent. Lets help resolve the issue.
            </p>
            <div className="flex justify-end gap-4 mt-4  ">
              <button className="w-[90px] bg-secondary-bg rounded-full py-1 text-white text-[.8rem]">
                Email us
              </button>
              <button className="w-[90px] border-1 border-secondary rounded-full text-[.8rem] ">
                Contact
              </button>
            </div>
          </div>

          <h3 className="pb-2 border-b-1 my-5 font-medium">About</h3>

          <div className="flex flex-col shadow rounded-md p-4 mt-5 items-center">
            <p className="text-[.8rem] font-medium">
              We're excited about the future of education, and we invite you to
              join us on this journey. For inquiries, support, or to explore how
              our School Management System can benefit your institution, feel
              free to{" "}
              <a href="+22" className="text-blue-400 underline">
                contact us.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSettings;

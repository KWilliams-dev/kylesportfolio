import * as React from "react";
import { Link } from "react-router-dom";
import { style } from "../RequestCodeReview/RequestCodeReviewButton";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
import { ContactModal } from "../ContactModal/ContactModal";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import kyleImg from "../../assets/kyle.jpg";

const pages = ["Home", "Projects", "Contact", "Academics", "About"];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-slate-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2">
            Kyle Williams' Portfolio
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-600 dark:border-gray-700">
              <li>
                <Link to={"/"}>
                  <h3 class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white">
                    Home
                  </h3>
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/projects"}>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/academics"}>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Academics
                  </a>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleOpen}
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </button>
                {open && (
                  <div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <ContactModal />
                      </Box>
                    </Modal>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

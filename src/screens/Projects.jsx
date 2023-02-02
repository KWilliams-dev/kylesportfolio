import { Box, List, ListItem } from "@mui/material";
import { ProjectPanel } from "../components/ProjectPanel/ProjectPanel";
import interview from "../assets/interview.jpg";
import cart from "../assets/cart.jpg";
import spooky from "../assets/spooky.jpg";
import client from "../assets/client.jpg";
import Fade from "react-reveal/Fade";

const quicKartInfo =
  "This app was built by a team of 6 students as a project for a client during my Software Development 2 class at Georgia Gwinnett College. " +
  "The client gave the team a list of requirements and some guidance on as to how he envisioned the app. The idea is to enable users to " +
  "create a digital grocery list based off the store of their choosing and then have our app sort those items in order of proximity.";

const softIqInfo =
  "This apps goal is to help users sharpen their soft skills for interviews in tech. The user can select their " +
  "aspiring job type and receive questions based on that position. Once the user has answered via recorded video, our app will detect improvements " +
  "that could be made.";

const clientRegistrar =
  "The purpose is to demonstrate a basic example of full stack development. The backend is programmed using JDBC, " +
  "and SQL. The front end is coded using JavaFX. The idea behind this software is to pretend you work for a company, and you're responsible for " +
  "registering new clients to the database, and also removing them.";

const lostResidence =
  "This is a text based adventure game that uses Java, SQLite, and JDBC to allow a player to traverse a spooky mansion full of " +
  "rooms, items, and monsters. Through careful data modeling, each game is unique to a users account. They can save, leave, and pick up right where they left" +
  "off.";

const quicKartTechnologies = ["JavaScript", "React", "GraphQL", "MongoDB"];
const softIqTechnologies = ["JavaScript", "React", "GraphQL", "MongoDB"];
const lostResidentTechnologies = ["Java", "SQL", "JDBC", "SQLite"];
const clientRegistrarTechnologies = ["Java", "JavaFX", "JDBC", "MySQL"];


export const Projects = () => {
  return (
    <div style={{ height: "100%", width: "100%", marginBottom: 50 }}>
      <Fade left>
        <ProjectPanel
          image={cart}
          title="QuicKart"
          info={quicKartInfo}
          technologies={quicKartTechnologies}
        />
      </Fade>
      <Fade right>
        <ProjectPanel
          image={interview}
          title="SoftIQ"
          info={softIqInfo}
          technologies={softIqTechnologies}
        />
      </Fade>
      <Fade left>
        <ProjectPanel
          image={spooky}
          title="Lost Resident"
          info={lostResidence}
          technologies={lostResidentTechnologies}
        />
      </Fade>
      <Fade right>
        <ProjectPanel
          image={client}
          title="Client Registrar"
          info={clientRegistrar}
          technologies={clientRegistrarTechnologies}
        />
      </Fade>
    </div>
  );
};

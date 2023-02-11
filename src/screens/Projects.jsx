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

const listOfAccomplishmentsQuicKart = [
  "Implemented searchable dropdown menu that populated with grocery items (queried from MongoDB via GraphQL).", 
  "Wrote code that sorted the users grocery list in order of proximity.",
  "Implemented React-Redux into the project. I used this to update the users grocery list and time spent shopping.",
  "Designed the architecture of the app.",
  "Ensured my sprint tasks were completed on time."
]

const listOfAccomplishmentsSoftIQ = [
  "Modeled the data and set up the schemas via GraphQL.", 
  "Created the header and navigation using React Router and reuable components.",
  "Assisted with UX design in figma, and designed the landing page for when the user is not logged in.",
]

const listOfAccomplishmentsLostResident = [
  "Modeled the data for the database so that each user can save the state of their game and return to it upon logging in.", 
  "Coded the logic that goes behind the player being able to pick up items and drop them into a different room.",
  "Hard coded user authentication by taking in the user input for email and password and then querying the database to see if it finds a match between the pair.",
  "Coded the logic that goes behind the user being able to traverse rooms. This is done by giving the user their current direction options that they can travel. Once selected, the direction has an associated roomID and that becomes the player's new current room ID (current location)."
]

const listOfAccomplishmentsClientRegistrar = [
  "Learned how to write Java code that can connect to a database and execute queries based on user input via GUI. This was accomplished via JDBC.",
  "Coded a front end using JavaFX that takes in user input and allows them to add a clients to a database, and also remove them.",
  "Learned a lot about writing practical SQL queries that execute as a result of Java code instead of writing them out in the DB console.",
  "Used Mockaroo to create a database consisting of a thousand unique clients that the user can querie from."
]

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
          listOfAccomplishments={listOfAccomplishmentsQuicKart}
        />
      </Fade>
      <Fade right>
        <ProjectPanel
          image={interview}
          title="SoftIQ"
          info={softIqInfo}
          technologies={softIqTechnologies}
          listOfAccomplishments={listOfAccomplishmentsSoftIQ}
        />
      </Fade>
      <Fade left>
        <ProjectPanel
          image={spooky}
          title="Lost Resident"
          info={lostResidence}
          technologies={lostResidentTechnologies}
          listOfAccomplishments={listOfAccomplishmentsLostResident}
        />
      </Fade>
      <Fade right>
        <ProjectPanel
          image={client}
          title="Client Registrar"
          info={clientRegistrar}
          technologies={clientRegistrarTechnologies}
          listOfAccomplishments={listOfAccomplishmentsClientRegistrar}
        />
      </Fade>
    </div>
  );
};

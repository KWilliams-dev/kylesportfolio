import "./styles.css";
import { Box, Container, Typography } from "@mui/material";
import { Nav } from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import { Academics } from "./screens/Academics";
import { Home } from "./screens/Home";
import { Projects } from "./screens/Projects";
import { About } from "./screens/About";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { Footer } from "./components/Footer/Footer";

const quicKartInfo =
  "This app  is meant to help users navigate a grocery store quicker. The app retrieves a mock inventory " +
  "from a database and displays the selection of items to the user. They can then select their items and click start shopping " +
  "Once started, our app will run an algorithm that sorts the items in order of proximity from the entrance of the store.";

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

function App() {
  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Typography
        sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
        variant="h2"
      >
        Kyle's Portfolio
      </Typography>
      <Box>
        <Nav />
        <section className="card-list">
          <ProjectCard projectName="QuicKart" projectInfo={quicKartInfo} />
          <ProjectCard projectName="SoftIQ" projectInfo={softIqInfo} />
          <ProjectCard
            projectName="Lost Resident"
            projectInfo={lostResidence}
          />
          <ProjectCard
            projectName="Client Registrar"
            projectInfo={clientRegistrar}
          />
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/academics" element={<Academics />} />
        </Routes>
      </Box>
      <Footer />
    </Container>
  );
}

export default App;

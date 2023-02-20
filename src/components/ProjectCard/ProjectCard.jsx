import "./ProjectCard.css";
import { RequestCodeReviewButton } from "../RequestCodeReview/RequestCodeReviewButton";

export const ProjectCard = ({ projectName, projectInfo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="card">
      <header className="card-header">
        <h2>{projectName}</h2>
        <p>{projectInfo}</p>
      </header>
      <RequestCodeReviewButton />
    </div>
  );
};

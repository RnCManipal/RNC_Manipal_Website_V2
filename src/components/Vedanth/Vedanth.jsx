import React from "react";
import "./Vedanth.css";
import { Link } from "react-router-dom";
import Header2 from "../Header/Header2";
const Vedanth = () => {
  return (
    <div>
      <Header2 title="Vedanth 14.0" subtitle="Imagine Innovate Create" />
      <div className="vedanth">
        <div className="container">
          <div className="left-content">
            <h1>Tech Showdown Event</h1>
            <p className="info">
              Join us for an exciting competition that combines innovation,
              storytelling, and technical expertise. See event details and rules
              below.
            </p>
            <h3 className="event-heading">Event Overview</h3>
            <div className="details">
              <p>
                The event blends technology, storytelling, and innovation. Teams
                will present their projects while narrating their journey
                through ideation, problem-solving, and execution. Showcase both
                the technical and entrepreneurial aspects of your project.
              </p>
            </div>
            <h3 className="event-heading">Event Structure</h3>
            <div className="details">
              <ol>
                <li>Opening Remarks</li>
                <li>Film Screening (Pre-recorded Journey)</li>
                <li>Live Project Presentation</li>
                <li>Interactive Q&A Session</li>
                <li>Closing Ceremony and Award Announcement</li>
              </ol>
            </div>
            <h3 className="event-heading">Judging Criteria</h3>
            <div className="details juding-criteria">
              <h3>Innovation Vanguard Award:</h3>
              <ul>
                <li>Innovation and Creativity</li>
                <li>Feasibility</li>
                <li>Technical Expertise</li>
                <li>Real-world Impact</li>
              </ul>

              <h3>Story of Impact Award:</h3>
              <ul>
                <li>Clarity of Vision</li>
                <li>Storytelling</li>
                <li>Emotional Engagement</li>
                <li>Creativity in Presentation</li>
              </ul>
            </div>
          </div>
          <div className="right-content">
            <div className="details">
              <h3>Event Details</h3>
              <ul className="event-details">
                <li>
                  <i className="fas fa-users"></i> Team Size: 1-4 participants
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Venue: Quadrangle,
                  Academic Block 1, MIT
                </li>
                <li>
                  <i className="fas fa-calendar-alt"></i> Date: 17 Oct, 2024
                </li>
                <li>
                  <i className="fas fa-trophy"></i> Prize Pool: ₹35,000
                </li>
              </ul>
            </div>
            <div className="details ">
              {" "}
              <h4>General Rules</h4>
              <ul>
                <li>
                  All projects must be functional with proper documentation
                </li>
                <li>
                  Categories: AgriTech, EduTech, HealthTech, FinTech, etc.
                </li>
                <li>Language: All materials must be in English</li>
                <li>Plagiarism leads to disqualification</li>
                <li>Mandatory process video submission</li>
              </ul>
            </div>
            <div className="details">
              <h4>Video Submission Rules</h4>
              <ul>
                <li>Duration: 2-5 minutes</li>
                <li>Clear audio with voiceovers allowed</li>
              </ul>
            </div>
            <div className="details">
              {" "}
              <h4>Presentation Rules</h4>
              <ul>
                <li>Film Screening followed by Live Presentation and Q&A</li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/vedanth">
          {" "}
          <button className="register">Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Vedanth;

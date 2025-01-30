import React from "react";
import { BoardMembersByYear } from "../../assets/teams.js";
import "./Team.css";
import Header2 from "../Header/Header2.jsx";
const Aluminis = () => {
  return (
    <div>
      {" "}
      <Header2 title="Our Alumni" />
      <div className="team-board">
        {Object.keys(BoardMembersByYear)
          .sort((a, b) => b - a)
          .map((year) => (
            <section key={year} className="board">
              <div className="heading">
                <h1>Board {year}</h1>
              </div>
              <div className="team-members">
                {BoardMembersByYear[year].map((member, index) => (
                  <div key={index} className="member">
                    <div className="img-member">
                      <img
                        src={member.imageUrl}
                        alt={`${member.firstName} ${member.lastName}`}
                        style={{ objectFit: "cover" }}
                      />
                      {member.linkedIn && (
                        <div className="social_media">
                          <a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className=" fa fab fa-linkedin"></i>
                          </a>
                        </div>
                      )}
                    </div>
                    <h3>
                      {member.firstName} {member.lastName}
                    </h3>
                    <h5>{member.position}</h5>
                  </div>
                ))}
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

export default Aluminis;

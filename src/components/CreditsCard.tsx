/*import React from "react";
import { Link } from "react-router-dom";

interface Person {
  id: number;
  name: string;
  profile_path: string | null;
  character?: string;
  department?: string;
}

interface CreditsCardProps {
  dados: Person[];
}

const CreditsCard: React.FC<CreditsCardProps> = ({ dados }) => {
  return (
    <>
      {dados?.map((person) => {
        const info = person.character || person.department;

        return (
          <Link
            key={person.id}
            to={`/person/${person.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              style={{
                minWidth: "150px",
                width: "150px",
                height: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            >
              {/* IMG *//*}
              {person.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                  alt={person.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    background: "#222",
                    borderRadius: "8px",
                  }}
                />
              )}

              {/* NAME *//*}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "5px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {person.name}
              </p>

              {/* ROLE *//*}
              <p
                style={{
                  fontSize: "11px",
                  opacity: 0.7,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {info}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CreditsCard; */


import { Link } from "react-router-dom";

interface Person {
  id: number;
  name: string;
  profile_path: string | null;
  character?: string;
  department?: string;
  job?: string;
}

interface CreditsCardProps {
  dados: Person[];
  variant?: "cast" | "crew"; // 🔥 novo
}

const CreditsCard: React.FC<CreditsCardProps> = ({
  dados,
  variant = "cast",
}) => {
  return (
    <>
      {dados?.map((person) => {
        const isCast = variant === "cast";

        const info = isCast
          ? person.character
          : person.job || person.department;

        return (
          <Link
            key={person.id}
            to={`/person/${person.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              style={{
                minWidth: isCast ? "150px" : "200px",
                width: isCast ? "150px" : "200px",
                height: isCast ? "260px" : "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.2s",
                background: isCast ? "transparent" : "#3c3c40",
                padding: isCast ? "0" : "10px",
                borderRadius: "8px",
              }}
            >
              {/* 🎭 CAST → COM IMAGEM */}
              {isCast && (
                <>
                  {person.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                      alt={person.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        background: "#222",
                        borderRadius: "8px",
                      }}
                    />
                  )}
                </>
              )}

              {/* 👤 NAME */}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: isCast ? "5px" : "0",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {person.name}
              </p>

              {/* 🎬 ROLE */}
              <p
                style={{
                  fontSize: "11px",
                  opacity: 0.7,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {info}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CreditsCard;

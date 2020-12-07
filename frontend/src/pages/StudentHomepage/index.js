import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

import api from "../../service/api";

import BannerBackground from "../../components/Banner";

import "./student-homepage.css";

function StudentHomepage() {
  const [disciplines, setDisciplines] = useState([]);

  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    api
      .get("registrations", {
        headers: {
          Authorization: studentId,
        },
      })
      .then((response) => {
        setDisciplines(response.data);
      });
  }, [studentId]);


  return (
    <>
      <BannerBackground />

      <div className="student-homepage_container-box">
        <div className="student-homepage_content-box" >
          <Card>
            <CardBody>
              {/* <p>
                Consulte o número minímo de alunos para esta turma{" "}
                <span
                  style={{ textDecoration: "underline", color: "#333a56" }}
                  href="#"
                  id="UncontrolledTooltipExample"
                >
                  AQUI
                </span>
                .
              </p>
              <UncontrolledTooltip
                placement="top"
                target="UncontrolledTooltipExample"
              >
                10 alunos.
              </UncontrolledTooltip> */}
              <h1>Lista de cadeiras matriculadas</h1>
              <br />
              <Table className="student-homepage_table-list" dark>
                <thead>
                  <tr>
                    <th>Professor</th>
                    <th>Disciplina</th>
                    <th>Campus</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    disciplines.map(discipline => 
                      (<tr>
                        <td>{discipline.discipline.professor[0].name || "Não definido"}</td>
                        <td>
                          <span
                              href="#"
                              id="UncontrolledTooltipExample"
                            >
                            {discipline.discipline.title}
                            </span>
                          <UncontrolledTooltip
                            style={{ borderRadius: "2px", backgroundColor: "#ffffff", padding: "5px" }}
                            placement="top"
                            target="UncontrolledTooltipExample"
                          >
                            Número mínimo 30 alunos
                          </UncontrolledTooltip>
                        </td>
                        <td>{discipline.discipline.campus.name}</td>
                      </tr>)
                    )
                  }
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
export default StudentHomepage;

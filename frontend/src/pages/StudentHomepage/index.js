import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

import api from "../../service/api";

import BannerBackground from "../../components/Banner";

import "../StudentHomepage/index.css";

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

      <div
        name="viewport"
        content="width=device-width, initial-scale=1"
        className="content-box"
      >
        <Card>
          <CardBody className="">
            <p>
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
            </UncontrolledTooltip>
            <br />
            <Table className="table-list" dark>
              <thead>
                <tr>
                  <th>Professor</th>
                  <th>Disciplina</th>
                  <th>Campus</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </Table>
            <br />
            <br />
            <br />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
export default StudentHomepage;

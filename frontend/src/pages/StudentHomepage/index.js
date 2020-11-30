import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Tooltip,
  UncontrolledTooltip,
} from "reactstrap";
import BannerBackground from "../../components/Banner";
import "../StudentHomepage/index.css";

function StudentHomepage() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
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
            <CardTitle tag="h2">
              Consulte aqui o status de sua matrícula
            </CardTitle>
            <CardSubtitle tag="h3" className="mb-2 text-muted">
              Inserir aqui integração variável do curso
            </CardSubtitle>
            <br />
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
                  <th>Quantidade alunos cadastrados</th>
                  <th>Campus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                </tr>
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

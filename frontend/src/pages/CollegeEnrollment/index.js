import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";
import BannerBackground from "../../components/Banner";
import api from "../../service/api";
import "../CollegeEnrollment/index.css";

function CollegeEnrollment() {
  const history = useHistory();

  const [courses, setCourses] = useState([]);
  const [campus, setCampus] = useState([]);
  const [disciplines, setdisciplines] = useState([]);
  const [disciplinesSelect, setdisciplinesSelect] = useState({});
  const [courseSelect, setCourseSelect] = useState("");
  const [campusSelect, setCampusSelect] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("courses");

        const coursesResponse = response.data;

        setCourses(coursesResponse);
      } catch {
        alert("Nenhuma curso encontrado");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (courses.length === 0) {
          return;
        }

        const idCourse = courses.find((course) => course.title === courseSelect)
          .id;

        const disciplinesResponse = (
          await api.get(`disciplinesByCourse/${idCourse}`)
        ).data;

        const campusDuplicate = disciplinesResponse.map(
          (d) => d.discipline.campus.name
        );

        const campus = campusDuplicate.filter(
          (c, i) => campusDuplicate.indexOf(c) === i
        );

        setCampus(campus);
        setdisciplines(disciplinesResponse);
      } catch {
        alert("Nenhuma curso encontrado");
      }
    })();
  }, [courseSelect]);

  function hanbleChangeDiciplines(event) {
    const idDicipline = event.target.value;

    disciplinesSelect[idDicipline] = !disciplinesSelect[idDicipline];

    setdisciplinesSelect(disciplinesSelect);
  }

  async function onSubmit(event) {
    event.preventDefault();

    const studentId = localStorage.getItem("studentId");

    const disciplines = Object.keys(disciplinesSelect)
      .filter((id) => disciplinesSelect[id])
      .map((id) => ({ id_discipline: parseInt(id) }));

    if (disciplines.length < 1) {
      alert("Você precisa selecionar pelo menos uma disciplina");
    }

    const data = {
      id_student: parseInt(studentId),
      disciplines,
    };

    try {
      const response = await api.post("registrations", data).catch((error) => {
        const mensagem = error.response.data.error;

        const invalidDisciplines = error.response.data.invalidIncidences
          .map((i) => i.discipline.title.toLowerCase())
          .reduce((invalids, disciplines, index) => {
            const separator = index === 0 ? "" : ", ";

            return invalids + separator + disciplines;
          }, ": ");

        alert(mensagem + invalidDisciplines + ".");
      });

      const mensagem = response.data.success;

      alert(mensagem);

      history.push("/estudante");
    } catch {}
  }

  return (
    <>
      <BannerBackground />
      <div className="flex-box container-box">
        <form
          className="body-college-enrollment content-box"
          onSubmit={onSubmit}
        >
          <h1>Conclua sua matrícula</h1>
          <h2>Selecione o curso desejado</h2>

          <Input
            className="div-select select-style"
            type="select"
            name="select-graduation"
            onChange={(event) => {
              setCourseSelect(event.target.value);
              setdisciplinesSelect({});
            }}
          >
            <option disabled selected>
              {" "}
              -----{" "}
            </option>
            {courses.map((course) => (
              <option> {course.title} </option>
            ))}
          </Input>
          <br />
          <h1>Selecione o campus desejado</h1>
          <Input
            className="div-select select-style"
            type="select"
            name="select-campus"
            onChange={(event) => {
              setCampusSelect(event.target.value);
              setdisciplinesSelect({});
            }}
          >
            <option disabled selected>
              {" "}
              -----{" "}
            </option>
            {campus.map((c) => (
              <option> {c} </option>
            ))}
          </Input>

          <br />
          <h1>Selecione as disciplinas </h1>
          <InputGroup>
            <h2>Primeiro semestre</h2>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                {disciplines
                  .filter((d) => d.discipline.campus.name === campusSelect)
                  .map((d) => (
                    <>
                      <Label>
                        <Input
                          addon
                          key={d.id_discipline}
                          value={d.id_discipline}
                          onChange={hanbleChangeDiciplines}
                          type="checkbox"
                        />
                        {d.discipline.title}
                      </Label>
                      <br />
                    </>
                  ))}
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <br />
          <Button className="button" type="submit" appearance="primary" block>
            Continuar
          </Button>
        </form>
      </div>
    </>
  );
}
export default CollegeEnrollment;

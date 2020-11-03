# sistema-matricula
Um sistema de matricula de alunos desenvolvido com react.

* **Database**:
``docker run --name universidade-postgres -e POSTGRES_USER=docker -e POSTGRES_DB=universidade -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres``
<br />

* **Create database and tables:**
``npx sequelize db:migrate``
<br />

* **Run seeds (add default data):**
``npx sequelize db:seed:all``
<br />

* **Diagram:**
<p align="center">
  <img alt="Class Diagram" src="static/class_diagram.jpg" width="700px">
</p>
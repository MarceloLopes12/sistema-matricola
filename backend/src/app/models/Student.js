import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        registration: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (student) => {
      if (student.password) {
        student.password_hash = await bcrypt.hash(student.password, 8);
      }

      const cpfParts = student.cpf.split('.');

      student.registration = `${new Date().getFullYear()}${parseInt(
        cpfParts[0]
      )}${parseInt(cpfParts[1].split('').reverse().join(''))}`;
    });

    return this;
  }

  checkPassowrd(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {
    this.belongsToMany(models.Discipline, {
      through: 'StudentDiscipline',
      as: 'discipline',
      foreignKey: 'id_student',
    });
  }
}

export default Student;

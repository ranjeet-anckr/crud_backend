import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dataBaseName = process.env.DATABASE_NAME;
const dataBaseUsername = process.env.DATABASE_USERNAME;
const dataBaseNPassword = process.env.DATABASE_PASSWORD;
const dataBaseTDialect = process.env.DATABASE_DIALECT;
const dataBaseHost = process.env.DATABASE_HOST;

/* The code is creating a new instance of the Sequelize class and assigning it to the variable
`dbPostConnection`. The Sequelize constructor takes in several parameters: `dataBaseName`,
`dataBaseUsername`, `dataBaseNPassword`, and an options object. These parameters are used to
configure the connection to the database. */

const dbPostConnection = new Sequelize(
  dataBaseName,
  dataBaseUsername,
  dataBaseNPassword,
  {
    host: dataBaseHost,
    dialect: dataBaseTDialect,
  }
);
export default dbPostConnection;

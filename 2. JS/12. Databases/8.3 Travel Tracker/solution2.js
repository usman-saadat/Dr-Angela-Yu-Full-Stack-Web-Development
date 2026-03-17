import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"]; // taking 'country' key from body of request as it contains the name of country

  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1", // Countries table is reference table & $1 is placeholder for 'input'. Using 'countries' table to get both values: column (country code) & input country's code . Result will contain whole response object including colmn and value. (we need to get only row first, to get only code, that refining is done below)
    [input]
  );

  if (result.rows.length !== 0) {
    const data = result.rows[0]; // taking only first element'Key' from rows array, as its index is '0'
    const countryCode = data.country_code; // country_code is key/column, it's value is code of ocuntry e.g. 'PK'

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

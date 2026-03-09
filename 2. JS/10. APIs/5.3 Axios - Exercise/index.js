import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random"); // Makes an asynchronous GET request to the Bored API using Axios. The await pauses execution until the promise resolves.
    const result = response.data; // Extracts only the data portion from the Axios response object.
    res.render("index.ejs", { data: result }); // Renders the "index.ejs" template and passes the API data to it. The browser displays the rendered HTML page with the activity data.
  } catch (error) { // Catches any errors that occurred in the try block.  If the API call fails, execution continues here.
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { error: error.message, }); //Still renders the index page but passes an error message instead of data.
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);

  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

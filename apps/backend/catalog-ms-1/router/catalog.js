import express from "express";
import axios from 'axios';

const router = express.Router();

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:8091/product');
    // Assuming the response contains JSON data
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error.message);
    throw error; // Optionally rethrow the error if needed
  }
}

router.get("/", async (req, res) => {
  try {
    const data = await fetchData();
    res.send({
      products: data,
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
    res.status(500).send('An error occurred');
  }
});

export { router };

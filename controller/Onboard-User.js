import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

import {
  secretKey,
  secretKeyTimestamp,
} from "../controller/Secret-key-generator.js";
const EKO_API_BASE_URL = "https://staging.eko.in/ekoapi/v1/user/onboard";

export const OnboardUser = async (req, res) => {
  // console.log("data", req.body);
  // res.status(200).send("Data received successfully.");

  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      developer_key: process.env.key, // Replace with your developer key
      "secret-key": secretKey, // Replace with your secret key
      "secret-key-timestamp": secretKeyTimestamp, // Replace with your secret key timestamp
    };
    console.log(req.body);

    const formData = {
      initiator_id: "9962981729",
      pan_number: "BFUPM3499K",
      mobile: "9123354235",
      first_name: "Tina",
      last_name: "Chawla",
      email: "a@gmail.com",
      residence_address: JSON.stringify({
        line: "Eko India",
        city: "Gurgaon",
        state: "Haryana",
        pincode: "122002",
        district: "Banswara",
        area: "Mongol",
      }),
      dob: "1992-05-10",
      shop_name: "Akanksha Stores",
    };

    const response = await axios.put(EKO_API_BASE_URL, formData, { headers });

    console.log("API response:", response.data);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(error.response.status).json({
      error: "An error occurred while onboarding the user",
    });
  }
};

import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

import { secretKey, secretKeyTimestamp } from "./Secret-key-generator.js";
const developer_key = process.env.key;
const secret_key = secretKey;
const secret_key_timestamp = secretKeyTimestamp;

const url = "https://staging.eko.in/ekoapi/v1/user/service/activate";

const data = {
  service_code: "45",
  initiator_id: "9962981729",
  user_code: "20810200",
  latlong: "77.06794760,77.06794760",
};

export const ActivateService = async (req, res) => {
  const { service_code, initiator_id, user_code, latlong } = req.body;

  const data_form = {
    service_code: service_code,
    initiator_id: initiator_id,
    user_code: user_code,
    latlong: latlong,
  };

  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      developer_key: developer_key,
      secret_key: secret_key,
      secret_key_timestamp: secret_key_timestamp,
    };

    const response = await axios.put(url, data, { headers });

    // res.send(responseData);
    // console.log(responseData);
    // const responseData = await response.json();

    res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    console.error("Error:", error);
    res.status(500).send(error);
  }
};

import crypto from "crypto";

// Initialize key
const key = "d2fe1d99-6298-4af2-8cc5-d97dcf46df30";

// Encode key using base64 encoding
const encodedKey = Buffer.from(key).toString("base64");

// Get current timestamp in milliseconds since UNIX epoch
const secretKeyTimestamp = Math.round(new Date().getTime());

// Compute the signature by hashing the timestamp with the encoded key
const signature = crypto
  .createHmac("sha256", encodedKey)
  .update(secretKeyTimestamp.toString())
  .digest("base64");

// Encode the signature using base64 encoding
const secretKey = Buffer.from(signature).toString("base64");

// Export keys
export { secretKey, secretKeyTimestamp };

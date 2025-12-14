import { registerUser, loginUser } from "../services/auth.service.js";
import {
  registerSchema,
  loginSchema,
} from "../validations/auth.validation.js";

export async function register(req, res) {
  try {
    const data = registerSchema.parse(req.body);
    const result = await registerUser(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function login(req, res) {
  try {
    const data = loginSchema.parse(req.body);
    const result = await loginUser(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

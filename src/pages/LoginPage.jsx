import React, { useState } from "react";
import axios from "axios";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      // Save token + user info
      localStorage.setItem("token", res.token);
      localStorage.setItem("userName", res.user.name);
      localStorage.setItem("userId", res.user.id);

      // Set token for axios
      axios.defaults.headers.common["Authorization"] = "Bearer " + res.token;

      setMsg("Login Successful");

      // Redirect
      nav("/tasks");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: 320,
        }}
      >
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>{msg}</p>
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({mode: "onBlur",});
  const onSubmit = async (data) => {
   try {
  const res = await axios.post("https://dummyjson.com/auth/login", {
    username: data.username,
    password: data.password,})
  localStorage.setItem("token", res.data.accessToken);
  toast.success("Login successful!");
  navigate("/auth/profile");
  } catch (error) {
  toast.error("Invalid username or password");
  }
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0 p-4 rounded-3">
            <h2 className="text-center text-success mb-4 fw-bold">Admin Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Username</label>
                <input type="text" className={`form-control ${errors.username ? "is-invalid" : ""}`} placeholder="e.g. emilys" {...register("username", { required: "Username is required",})}/>
                {errors.username && (
                  <div className="invalid-feedback d-block text-danger mt-1"> {errors.username.message} </div> )}
              </div>
              <div className="mb-4 text-start">
                <label className="form-label fw-semibold">Password</label>
                <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} placeholder="e.g. emilyspass" {...register("password", { required: "Password is required",})}/>
                {errors.password && (<div className="invalid-feedback d-block text-danger mt-1"> {errors.password.message}</div>)}
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-success w-100 py-2 fw-bold rounded-2" >{isSubmitting ? "Signing In..." : "Sign In"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
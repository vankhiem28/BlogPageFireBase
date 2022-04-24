import { Form, Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { auth, db } from "../firebase-app/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import AuthPages from "./AuthPages";

function SignUpPage() {
  const [load, setLoad] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  return (
    <AuthPages>
      <div className="container">
        <NavLink to="/">
          <img srcSet="/LogoMonkey.png 2x" alt="" className="logo" />
        </NavLink>
        <h1 className="heading">Monkey Blogging</h1>
        <div className="form-box">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              fullName: Yup.string().required("Vui lòng nhập tên"),
              email: Yup.string()
                .email("Email không hợp lệ")
                .required("Vui lòng nhập email"),
              password: Yup.string()
                .min(8, "Mật khẩu phải lớn hơn hoặc bằng 8 ký tự")
                .required("Vui lòng nhập mật khẩu"),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setLoad(true);
              setDisable(true);
              await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
              );
              await updateProfile(auth.currentUser, {
                displayName: values.fullName,
              });
              const colRef = collection(db, "users");
              await addDoc(colRef, {
                fullName: values.fullName,
                email: values.email,
                password: values.password,
              });
              toast.success("Tạo tài khoản thành công");
              setLoad(false);
              setDisable(false);
              setSubmitting(false);
              resetForm();
              navigate("/");
            }}
          >
            <Form className="form">
              <Label htmlFor="fullNameID">FullName</Label>
              <Input
                type="text"
                name="fullName"
                id="fullNameID"
                placeholder="Please enter your fullname"
              ></Input>
              <div className="error_message">
                <ErrorMessage name="fullName"></ErrorMessage>
              </div>

              <Label htmlFor="fullNameID">Email</Label>
              <Input
                type="email"
                name="email"
                id="emailID"
                placeholder="Please enter your email"
              ></Input>
              <div className="error_message">
                <ErrorMessage name="email"></ErrorMessage>
              </div>

              <Label htmlFor="passwordID">Password</Label>
              <Input
                type="password"
                name="password"
                id="passwordID"
                placeholder="Please enter your password"
              ></Input>
              <div className="error_message">
                <ErrorMessage name="password"></ErrorMessage>
              </div>
              <div className="have_account">
                <div>
                  Bạn đã có tài khoản ?{" "}
                  <NavLink to={"/sign-in"}>Đăng nhập</NavLink>
                </div>
              </div>
              <Button
                type="submit"
                isLoading={load}
                disabled={disable}
                align="center"
              >
                Sign Up
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </AuthPages>
  );
}

export default SignUpPage;

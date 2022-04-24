import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import { auth } from "../firebase-app/firebase-config";
import AuthPages from "./AuthPages";

function SignInPage() {
  const [load, setLoad] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  useEffect(() => {
    if (userInfo?.email) navigate("/");
  }, []);
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
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string().required("Vui lòng nhập email"),
              password: Yup.string().required("Vui lòng nhập mật khẩu"),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                setLoad(true);
                setDisable(true);
                await signInWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
                navigate("/");
              } catch (error) {
                setLoad(false);
                setDisable(false);
                toast.error("Email hoặc mật khẩu không hợp lệ");
              }
            }}
          >
            <Form className="form">
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
                  Bạn chưa có tài khoản ?{" "}
                  <NavLink to={"/sign-up"}>Đăng ký</NavLink>
                </div>
              </div>
              <Button
                type="submit"
                isLoading={load}
                disabled={disable}
                align="center"
              >
                Sign In
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </AuthPages>
  );
}

export default SignInPage;

import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { Button } from "../button";
import { ToastContainer, toast } from "react-toastify";
const InputStyles = styled.div`
  .input {
    width: 100%;
    padding: 15px 15px;
    border: 1px solid ${(props) => props.theme.gray};
    border-radius: 8px;
    transition: all 0.2s linear;
    margin-top: 6px;
    margin-bottom: 12px;
  }
  input:focus {
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

function Input({ type, name, placeholder, id }) {
  return (
    <InputStyles>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        className="input"
      />
      {/* <div className="error_message">
          <ErrorMessage name={name}></ErrorMessage>
        </div> */}
      {/* {toast.error(<ErrorMessage name={name}></ErrorMessage>)} */}
    </InputStyles>
  );
}

export default Input;

import logo from "./logo.svg";
import { Input, Button, Form, message, Divider } from "antd";
import "./App.css";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
function App() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
    },
    validationSchema: Yup.object({
      // Input Validation for enhanced security
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required")
        .matches(/^[A-Za-z]+$/, "Only alphabetic characters are allowed"),
      password: Yup.string()
        .required("Required")
        .min(7, "Password must be 7 characters")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          "At least 7 basic characters allowed, at least one number required"
        ),
    }),
    onSubmit: (values) => {
      message.success("Login successful");
      setCurrentScreen("account"); // On successful login, go to account page
    },
  });

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#E6E6EA",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
      }}
    >
      {currentScreen === "login" ? ( // The following block is the Login Page Screen
        <>
          <h1 style={{ fontWeight: 300, fontSize: "3rem" }}>Login 🔒</h1>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form onFinish={formik.handleSubmit}>
              <p style={{ margin: "0", padding: "0" }}>Username: </p>
              <Input
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                style={{
                  margin: "0",
                  padding: "0",
                  height: "fit-content",
                  width: "200px",
                }}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              ) : (
                <div style={{ height: "1rem" }}> </div>
              )}
              <p style={{ margin: "0", padding: "0" }}>Password: </p>
              <Input
                name="password"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                style={{
                  margin: "0",
                  padding: "0",
                  height: "fit-content",
                  width: "200px",
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : (
                <div style={{ height: "1rem" }}> </div>
              )}
              <br />
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: "1rem" }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <>
          {/*  This block of code is the Account Page Screen */}
          <h1 style={{ fontWeight: 300, fontSize: "3rem" }}>
            Dino-Bank Accounts Page 💳
          </h1>
          <div
            style={{
              backgroundColor: "#F4F4F8",
              display: "flex",
              border: "1px solid black",
              boxShadow: "20px 20px",
              borderRadius: "8px",
              height: "500px",
              width: "500px",
              padding: "1rem",
              flexDirection: "column",
            }}
          >
            <p style={{ margin: "0", padding: "0", fontSize: "2rem" }}>
              Account Name: CurrentUser
            </p>
            <br />
            <p>Checking:</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0", padding: "0", fontSize: "1.25rem" }}>
                Account Number: 1234
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "0", padding: "0", fontSize: "1.25rem" }}>
                  Available Balance:
                </p>
                <p style={{ margin: "0", padding: "0" }}>$11,000.50</p>
              </div>
            </div>
            <Divider />
            <p style={{ margin: "0 0 1rem 0" }}>Savings:</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0", padding: "0", fontSize: "1.25rem" }}>
                Account Number: 5678
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "0", padding: "0", fontSize: "1.25rem" }}>
                  Available Balance:
                </p>
                <p style={{ margin: "0", padding: "0" }}>$5,500.55</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

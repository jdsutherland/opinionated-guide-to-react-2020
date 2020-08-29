import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Password must be at least 5 characters long";
  }

  return errors;
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const { values, touched, errors } = formik;
  return (
    <main className="App">
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...formik.getFieldProps("name")} />
        {errors.name && touched.name ? <span>{errors.name}</span> : null}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...formik.getFieldProps("email")} />
        {errors.email && touched.email ? <span>{errors.email}</span> : null}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...formik.getFieldProps("password")}
        />
        {errors.password && touched.password ? (
          <span>{errors.password}</span>
        ) : null}

        <button type="submit">Sign Up</button>
      </form>
      <pre>
        <code>{JSON.stringify(values)}</code>
      </pre>
    </main>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

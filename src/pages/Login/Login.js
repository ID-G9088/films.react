import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions";
import { Form, Formik } from "formik";
import FieldInput from "../../components/FieldInput/FieldInput";
import * as Yup from "yup";

const Login = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const authenticated = !!user.data;

  const setLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const validationFormSchema = Yup.object().shape({
    login: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
  });

  const onSubmit = (values) => {
    const { login, password } = values;

    const user = {
      login: login,
      password: password,
    };
    dispatch(setUser(user));
    setLocalStorage(user);
    console.log(user);
  };

  if (authenticated) {
    return <Redirect to="/films" />;
  }

  return (
    <div>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={validationFormSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => {
          return (
            <Form>
              <FieldInput name="login" type="text" label="Login" />
              <FieldInput name="password" type="password" label="Password" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

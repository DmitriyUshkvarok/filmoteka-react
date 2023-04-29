import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/auth-operation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).max(20).required(),
  email: yup.string().required(),
  password: yup.string().min(10).max(20).required(),
});

function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperation.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formRegistration}>
        <h2 className={css.formRegistrationTitle}>Form Registration</h2>
        <div className={css.feedbackFormGroup}>
          <Field
            className={css.inputName}
            type="text"
            name="name"
            placeholder="name"
          />
          <ErrorMessage name="name" />
        </div>
        <div className={css.feedbackFormGroup}>
          <Field
            className={css.inputEmail}
            type="email"
            name="email"
            placeholder="email"
          />
          <ErrorMessage name="email" />
        </div>
        <div className={css.feedbackFormGroup}>
          <div className={css.passwordWrapper}>
            <Field
              className={css.inputPassword}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
            />
            <span
              className={css.toggleShowPasword}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <BsEyeSlash color="var(--border-color)" />
              ) : (
                <BsEye color="var(--border-color)" />
              )}
            </span>
          </div>
          <ErrorMessage className={css.errorInput} name="password" />
        </div>
        <div className={css.btnwrapper}>
          <button className={css.btnRegister} type="submit">
            Registration
          </button>
        </div>
      </Form>
    </Formik>
  );
}
export default RegistrationForm;

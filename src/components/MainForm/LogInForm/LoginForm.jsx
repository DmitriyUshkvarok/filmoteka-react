import {
  FormikStyle,
  FormLogin,
  FormLoginTitle,
  FeedbackFormGroup,
  InputEmail,
  InputPassword,
  Btnwrapper,
  BtnLogIn,
  PasswordWrapper,
  ToggleShowPasword,
  FormPageDescription,
} from './LoginForm.styles.js';
import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/auth-operation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(10).max(20).required(),
});

function LogInForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperation.logIn(values));
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <FormikStyle
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormLogin>
          <FormLoginTitle>Login Form</FormLoginTitle>
          <FeedbackFormGroup>
            <InputEmail type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" />
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <PasswordWrapper>
              <InputPassword
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
              />
              <ToggleShowPasword onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <BsEyeSlash color="var(--border-color)" />
                ) : (
                  <BsEye color="var(--border-color)" />
                )}
              </ToggleShowPasword>
            </PasswordWrapper>
            <ErrorMessage name="password" />
          </FeedbackFormGroup>
          <Btnwrapper>
            <BtnLogIn type="submit">Log In</BtnLogIn>
          </Btnwrapper>
        </FormLogin>
      </FormikStyle>
      <FormPageDescription>
        Register as a user of our film library and get access to a special
        library page where you can save your favorite movies to your favorites
        list and add new films to it. Create your own watchlists and enjoy
        watching movies that are only available to our users. Register or log in
        now and start enjoying the best movies!
      </FormPageDescription>
    </>
  );
}
export default LogInForm;

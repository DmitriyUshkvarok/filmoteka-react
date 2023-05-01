import {
  FormRegistration,
  FormRegistrationTitle,
  FeedbackFormGroup,
  PasswordWrapper,
  InputForm,
  ToggleShowPasword,
  Btnwrapper,
  BtnRegister,
  FormPageDescription,
  StyleErrorMessage,
  Error,
} from './RegistrationForm.styled';
import { Formik } from 'formik';
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormRegistration>
          <FormRegistrationTitle>Form Registration</FormRegistrationTitle>
          <FeedbackFormGroup>
            <InputForm type="text" name="name" placeholder="name" />
            <StyleErrorMessage name="name">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <InputForm type="email" name="email" placeholder="email" />
            <StyleErrorMessage name="email">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <PasswordWrapper>
              <InputForm
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
            <StyleErrorMessage name="password">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <Btnwrapper>
            <BtnRegister type="submit">Registration</BtnRegister>
          </Btnwrapper>
        </FormRegistration>
      </Formik>
      <FormPageDescription>
        Register as a user of our film library and get access to a special
        library page where you can save your favorite movies to your favorites
        list and add new films to it. Create your own watchlists and enjoy
        watching movies that are only available to our users. Also, when you
        register you will get notification functionality about the latest
        expected movies!Register or log in now and start enjoying the best
        movies!
      </FormPageDescription>
    </>
  );
}
export default RegistrationForm;

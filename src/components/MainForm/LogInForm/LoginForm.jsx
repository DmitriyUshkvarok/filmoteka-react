import {
  FormikStyle,
  FormLogin,
  FormLoginTitle,
  FeedbackFormGroup,
  InputEmail,
  InputPassword,
  Btnwrapper,
  BtnLogIn,
} from './LoginForm.styles.js';
import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/auth-operation';

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

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperation.logIn(values));
    resetForm();
  };

  return (
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
          <InputPassword
            type="password"
            name="password"
            placeholder="password"
          />
          <ErrorMessage name="password" />
        </FeedbackFormGroup>
        <Btnwrapper>
          <BtnLogIn type="submit">Log In</BtnLogIn>
        </Btnwrapper>
      </FormLogin>
    </FormikStyle>
  );
}
export default LogInForm;

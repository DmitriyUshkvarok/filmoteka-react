import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

export const FormikStyle = styled(Formik)``;

export const FormLogin = styled(Form)`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background: var(--background-header);
  border: 1px solid var(--border-color);
  gap: 20px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  margin-top: 150px;
`;

export const FormLoginTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeedbackFormGroup = styled.div`
  width: 100%;
`;

export const InputEmail = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  outline: none;

  &::placeholder {
    opacity: 0.4;
  }
`;

export const InputPassword = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  outline: none;

  &::placeholder {
    opacity: 0.4;
  }
`;

export const Btnwrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const BtnLogIn = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  cursor: pointer;
`;

import { Form } from 'formik';
import styled from 'styled-components';

// приклад стилізації Form з Formik через styled-components
export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 16px;
  width: 25%;
  border: 1px solid;
`;

// інший підхід - стилізація Field з Formik через styled-components
export const Input = styled.input`
  width: 50%;
`;

export const SubmitButton = styled.button`
  margin-top: 15px;
  width: 30%;
`;

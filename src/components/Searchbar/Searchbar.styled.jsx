import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormSearch = styled(Form)`
  display: flex;
  align-items: center;
`;
export const InputSearch = styled(Field)`
  height: 30px;
  width: 200px;
  outline-color: blue;
  }
`;
export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: ${p => p.theme.borders.none};
`;

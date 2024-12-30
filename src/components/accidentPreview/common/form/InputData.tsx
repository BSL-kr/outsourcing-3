import { Form, Input } from 'antd';
import styled from 'styled-components';
import AccidentPreviewFormHeader from './header';

const StyledAccidentPreviewInputData = styled.div`
  input {
    border: 1px solid #cfcfcf;
    background-color: #f4f4f4;
    font-size: 17px;
    padding: 15px 0px 14px 11px;
  }
`;

const AccidentPreviewInputData = ({
  inputTitle,
  name,
  required
}: {
  inputTitle: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <StyledAccidentPreviewInputData>
      <AccidentPreviewFormHeader inputTitle={inputTitle} required={required} />
      <Form.Item name={name}>
        <Input className='gothic-a1-medium' />
      </Form.Item>
    </StyledAccidentPreviewInputData>
  );
};

export default AccidentPreviewInputData;

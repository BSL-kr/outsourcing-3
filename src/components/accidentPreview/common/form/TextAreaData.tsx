import { Form, Input } from 'antd';
import styled from 'styled-components';
import AccidentPreviewFormHeader from './header';

const { TextArea } = Input;

const StyledAccidentPreviewInputTextAreaData = styled.div`
  textArea {
    height: 172px;
    resize: none;
    font-size: 17px;
    background-color: #f4f4f4;

    &::placeholder {
      font-family: 'Gothic A1', sans-serif;
      font-weight: 500;
      font-style: normal;
    }
  }
`;

const AccidentPreviewInputTextAreaData = ({
  inputTitle,
  name,
  placeholder,
  required
}: {
  inputTitle: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <StyledAccidentPreviewInputTextAreaData>
      <AccidentPreviewFormHeader inputTitle={inputTitle} required={required} />
      <Form.Item name={name}>
        <TextArea placeholder={placeholder || ''} className='gothic-a1-medium' autoSize={false} />
      </Form.Item>
    </StyledAccidentPreviewInputTextAreaData>
  );
};

export default AccidentPreviewInputTextAreaData;

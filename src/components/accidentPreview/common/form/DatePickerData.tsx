import styled from 'styled-components';
import AccidentPreviewFormHeader from './header';
import { DatePicker, Form } from 'antd';

const StyledAccidentPreviewDatePicker = styled.div``;

const AccidentPreviewDatePicker = ({
  inputTitle,
  name,
  required
}: {
  inputTitle: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <StyledAccidentPreviewDatePicker>
      <AccidentPreviewFormHeader inputTitle={inputTitle} required={required} />
      <Form.Item name={name}>
        <DatePicker style={{ width: '100%', height: 52 }} />
      </Form.Item>
    </StyledAccidentPreviewDatePicker>
  );
};

export default AccidentPreviewDatePicker;

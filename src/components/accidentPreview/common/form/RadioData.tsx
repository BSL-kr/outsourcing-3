import styled from 'styled-components';
import AccidentPreviewFormHeader from './header';
import { Form, Radio } from 'antd';

const StyledAccidentPreviewRadioData = styled.div`
  .ant-radio-group {
    width: 100%;
    display: flex;
    gap: 8px;

    & > label {
      flex: 1;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid #cfcfcf !important;
      background-color: #f4f4f4 !important;
      color: #000;
      font-size: 17px;
      border-radius: 8px !important;
      padding: 0px !important;

      & > span.ant-radio-button-checked {
        border-radius: 8px !important;
        border: 1px solid #cfcfcf !important;
        background-color: #9c9c9b !important;

        & ~ span {
          color: #fff !important;
        }
      }

      &::before {
        width: 0px !important;
      }
    }
  }
`;

const AccidentPreviewRadioData = ({
  options,
  inputTitle,
  name,
  required
}: {
  options: { value: string; label: string }[];
  inputTitle: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <StyledAccidentPreviewRadioData>
      <AccidentPreviewFormHeader inputTitle={inputTitle} required={required} />
      <Form.Item name={name}>
        <Radio.Group>
          {options.map(({ value, label }) => (
            <Radio.Button key={value} className='gothic-a1-medium' value={value}>
              {label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
    </StyledAccidentPreviewRadioData>
  );
};

export default AccidentPreviewRadioData;

import styled from 'styled-components';

const StyledAccidentPreviewFormHeader = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  text-align: left;
  position: relative;
  width: fit-content;

  &.required::after {
      content:'';
      width: 4px;
      height:4px;
      display:inline-block;
      position: absolute;
      right: -3px;
      top: 1px;
      background-color:red;
      border-radius: 4px;
    }
  }
`;

const AccidentPreviewFormHeader = ({
  inputTitle,
  required
}: {
  inputTitle: string;
  required?: boolean;
}) => (
  <StyledAccidentPreviewFormHeader className={`gothic-a1-semibold ${required ? 'required' : ''}`}>
    {inputTitle}
  </StyledAccidentPreviewFormHeader>
);

export default AccidentPreviewFormHeader;

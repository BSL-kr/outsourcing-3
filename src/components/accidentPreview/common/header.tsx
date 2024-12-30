import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledAccidentPreviewSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 13px;
  margin-bottom: 24px;

  border-bottom: 1px solid #cfcfcf;

  .accident-preview-subtitle {
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 17px;
      border-radius: 5px;
      background-color: #2a64f6;
      margin-right: 5px;
    }
  }
`;

const AccidentPreviewSubTitle = ({
  subtitle,
  customRight
}: {
  subtitle: string;
  customRight?: ReactNode;
}) => {
  return (
    <StyledAccidentPreviewSubTitle>
      <div className='accident-preview-subtitle gothic-a1-bold'>{subtitle}</div>
      {customRight || null}
    </StyledAccidentPreviewSubTitle>
  );
};

export default AccidentPreviewSubTitle;

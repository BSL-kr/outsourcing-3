import { useState } from 'react';
import styled from 'styled-components';
import LeftArrow from '../assets/LeftArrow';

const AccidentPreviewPageHeader = styled.header`
  background-color: #121314;
  display: flex;
  padding: 8px 20px 8px 16px;
  justify-content: space-between;
  color: #fff;
  align-items: center;
`;

const AccidentPreviewPage = () => {
  const [accidentState, setAccidentState] = useState('before');

  return (
    <div>
      <AccidentPreviewPageHeader>
        <LeftArrow />
        <h1 className='gothic-a1-semibold'>아차사고</h1>
        <button>삭제</button>
      </AccidentPreviewPageHeader>
      <div></div>
    </div>
  );
};

export default AccidentPreviewPage;

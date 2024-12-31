import { useState } from 'react';
import styled from 'styled-components';
import LeftArrow from '../assets/LeftArrow';
import AccidentPreviewBeforeTab from '../components/accidentPreview/before';
import AccidentPreviewAfterTab from '../components/accidentPreview/after';

const StyledAccidentPreviewPageHeader = styled.header`
  background-color: #121314;
  display: flex;
  padding: 8px 20px 8px 16px;
  justify-content: space-between;
  color: #fff;
  align-items: center;

  h1 {
    font-size: 19px;
  }

  button {
    border: 1px solid #fff;
    background-color: #121314;
    color: #fff;
    font-size: 15px;
    padding: 4px 12px;
    line-height: 1;
  }
`;

const StyledAccidentPreviewPageTab = styled.div`
  height: 45px;
  padding: 0px 7.5px;
  display: flex;

  background-color: #121314;

  .accident-preview-tab-item {
    display: flex;
    width: 180px;

    font-size: 17px;

    align-items: center;
    justify-content: center;

    background-color: #121314;
    color: #fff;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &.active {
      background-color: #fff;
      color: #000;
    }
  }
`;

const AccidentPreviewPage = () => {
  const [accidentState, setAccidentState] = useState<'before' | 'after'>('before');

  const onClickTab = (type: typeof accidentState) => {
    setAccidentState(type);
  };

  return (
    <div>
      <StyledAccidentPreviewPageHeader>
        <LeftArrow />
        <h1 className='gothic-a1-semibold'>아차사고</h1>
        <button className='gothic-a1-semibold'>삭제</button>
      </StyledAccidentPreviewPageHeader>
      <StyledAccidentPreviewPageTab>
        <div
          className={`accident-preview-tab-item gothic-a1-semibold ${
            accidentState === 'before' ? 'active' : ''
          }`}
          onClick={() => {
            onClickTab('before');
          }}
        >
          조치 전
        </div>
        <div
          className={`accident-preview-tab-item gothic-a1-semibold ${
            accidentState === 'after' ? 'active' : ''
          }`}
          onClick={() => {
            onClickTab('after');
          }}
        >
          조치 후
        </div>
      </StyledAccidentPreviewPageTab>
      {accidentState === 'before' ? <AccidentPreviewBeforeTab /> : <AccidentPreviewAfterTab />}
    </div>
  );
};

export default AccidentPreviewPage;

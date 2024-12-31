import styled from 'styled-components';
import { useState } from 'react';

const StepArray = ['번호인증', '약관동의', '가입유형 선택', '본인정보'];

const Wrapper = styled.div`
  display: flex;
`;

const StepBlock = styled.button<{ state: string }>`
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 170px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  border-bottom: ${({ state }) => (state === 'true' ? '1px solid #4097FF' : '1px solid #0B245F')};

  > div:first-child {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: #4097ff;
  }

  > span {
    font-family: Gothic A1;
    font-size: 17px;
    font-weight: 500;
    line-height: 21.25px;
    color: #dceeff;
  }
`;

const Steps = ({
  currentStep,
  onClick
}: {
  currentStep: number;
  onClick: (step: number) => void;
}) => {
  const [isSuccess, setIsSuccess] = useState([true, false, false, false]);

  return (
    <Wrapper>
      {Array.from({ length: 4 }).map((_, i) => (
        <StepBlock key={i} state={currentStep === i ? 'true' : 'false'} onClick={() => onClick(i)}>
          <div>
            {isSuccess[i] ? (
              <img src={'/svg/signup-success.svg'} alt='success' />
            ) : (
              <span>{i + 1}</span>
            )}
          </div>
          <span>{StepArray[i]}</span>
        </StepBlock>
      ))}
    </Wrapper>
  );
};

export default Steps;

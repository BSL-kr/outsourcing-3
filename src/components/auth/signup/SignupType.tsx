import styled from 'styled-components';
import { Button, Typography } from 'antd';
import { useState } from 'react';

const { Text } = Typography;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  > div:first-child {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 21px;
  }

  > div:last-child {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 21px;
  }
`;

const Title = styled(Text)`
  font-family: Gothic A1;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: #dceeff;
`;

const Description = styled(Text)`
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #dceeff;
`;

const StyledButton = styled(Button)<{ state: boolean }>`
  width: 100%;
  height: 52px;
  border: 1px solid #4097ff;
  border-radius: 8px;
  background: ${({ state }) => (state ? '#4097FF' : 'transparent')};
  color: ${({ state }) => (state ? '#090909' : '#4097ff')};
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
`;

const SignupType = () => {
  const [target, setTarget] = useState<undefined | number>(undefined);

  const handleOnClick = (index: number) => {
    setTarget(index);
  };

  return (
    <Block>
      <div>
        <Title>가입유형 선택</Title>
        <Description>회원님의 가입 유형을 선택해 주세요.</Description>
      </div>

      <div>
        <StyledButton state={target === 0} onClick={() => handleOnClick(0)}>
          현장 관리자
        </StyledButton>
        <StyledButton state={target === 1} onClick={() => handleOnClick(1)}>
          지사
        </StyledButton>
        <StyledButton state={target === 2} onClick={() => handleOnClick(2)}>
          본사
        </StyledButton>
      </div>
    </Block>
  );
};

export default SignupType;

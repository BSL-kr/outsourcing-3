import styled from 'styled-components';
import { Button, Typography } from 'antd';
import Steps from './Steps.tsx';
import { useState } from 'react';
import AgreeToTerms from './AgreeToTerms.tsx';
import { MouseEvent } from 'react';
import SignupType from './SignupType.tsx';
import AccountInfo from './AccountInfo.tsx';
import AddressModal from '../AddressModal.tsx';

const { Text } = Typography;

const Container = styled.div`
  position: relative;
  width: 736px;
  height: auto;
  background: #091124;
  padding: 30px 28px 28px 28px;
  border: 1px solid transparent;
  border-image: linear-gradient(#4097ff 0%, #4097ff 100%) 1;
  box-shadow: 0 0 16px 0 #1f51ff66 inset;

  //  임시 공간 확보
  margin-top: 100px;

  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 180px;
    height: 65px;
    transform: translate(-8px, -14px);
    background: url('/svg/form-deco.svg');
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
`;

const ContentText = styled(Text)`
  font-family: Gothic A1;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  color: #4097ff;
`;

const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0;
  margin: 0;
  color: #fff;
`;

const ConfirmButton = styled(Button)`
  width: 160px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  justify-items: center;
  align-items: center;
  background: #4097ff;
  border: none;
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  color: #091124;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border: 1px solid #0b245f;
  flex: 1;
  height: auto;
  border-radius: 8px;
  padding: 24px 28px 28px 28px;
  margin-bottom: 32px;
  margin-top: 24px;
`;

const SignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleOnClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleOnClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (currentStep !== 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <ContentText>회원가입</ContentText>
          <CloseButton>
            <img src='/svg/close.svg' alt='close button' />
          </CloseButton>
        </Header>

        <Steps currentStep={currentStep} onClick={handleOnClick} />

        <ContentBlock>
          {currentStep === 1 && <AgreeToTerms />}
          {currentStep === 2 && <SignupType />}
          {currentStep === 3 && <AccountInfo />}
        </ContentBlock>

        <div>
          <ConfirmButton onClick={handleOnClickSubmit}>다음</ConfirmButton>
        </div>
      </Container>
      <AddressModal />
    </>
  );
};

export default SignupForm;

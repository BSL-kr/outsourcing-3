import styled from 'styled-components';
import { Button, Input, Typography } from 'antd';

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

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border: 1px solid #0b245f;
  flex: 1;
  height: 237px;
  border-radius: 8px;
  padding: 24px 28px 28px 28px;
  margin-bottom: 32px;
`;

const Description = styled(Text)`
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #dceeff;
  text-align: left;
`;

const InputBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 24px;

  & > div {
    position: relative;

    &:first-child {
      display: flex;
      gap: 12px;

      input {
        width: 452px;
      }

      button {
        width: 160px;
      }
    }

    &:last-child {
      span {
        position: absolute;
        right: 13.5px;
        top: 50%;
        transform: translateY(-50%);
        font-family: Gothic A1;
        font-size: 20px;
        font-weight: 600;
        line-height: 25px;
        color: #4097ff;
      }
    }
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  height: 52px;
  border-radius: 6px;
  border: 1px solid #0b3d91;
  background: transparent;

  &::placeholder {
    font-family: Gothic A1;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: #2a5b95;
  }
`;

const StyledButton = styled(Button)`
  width: 160px;
  height: 52px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #4097ff;
  background: transparent;
  display: flex;
  justify-items: center;
  align-items: center;
  color: #4097ff;

  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
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

const FindForm = () => {
  return (
    <Container>
      <Header>
        <ContentText>비밀번호 찾기</ContentText>
        <CloseButton>
          <img src='/svg/close.svg' alt='close button' />
        </CloseButton>
      </Header>

      <ContentBlock>
        <Description>회원가입 시 등록한 휴대폰 번호와 발송된 인증번호를 입력해 주세요.</Description>
        <InputBlock>
          <div>
            <StyledInput placeholder='휴대폰 번호를 숫자만 입력해 주세요.' />
            <StyledButton>인증번호 발송</StyledButton>
          </div>
          <div>
            <StyledInput placeholder='인증번호를 입력해 주세요.' />
            <Text>05:00</Text>
          </div>
        </InputBlock>
      </ContentBlock>

      <div>
        <ConfirmButton>확인</ConfirmButton>
      </div>
    </Container>
  );
};

export default FindForm;

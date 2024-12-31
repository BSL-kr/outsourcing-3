import styled from 'styled-components';
import { Button, Typography, Input } from 'antd';
import AlertMessage from '../AlertMessage.tsx';

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

  & > div {
    display: flex;
    align-items: center;
  }
`;

const Description = styled(Text)`
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #dceeff;
  text-align: left;
`;

const OTPWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 52px;
  border: 1px solid #0b3d91;
  border-radius: 6px;

  gap: 8px;

  > div {
    position: relative;

    .ant-input {
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 18px;
      border: none;
      background: transparent;
      color: #fff;
    }

    &:not(:last-child)::after {
      content: '-';
      position: absolute;
      width: 12px;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      font-size: 18px;
    }
  }
`;

const Label = styled(Text)`
  font-family: Gothic A1;
  text-align: left;
  font-size: 17px;
  font-weight: 700;
  line-height: 21.25px;
  color: #dceeff;
  width: 144px;
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

const ChangeForm = () => {
  return (
    <>
      <Container>
        <Header>
          <ContentText>비밀번호 변경</ContentText>
          <CloseButton>
            <img src='/svg/close.svg' alt='close button' />
          </CloseButton>
        </Header>

        <ContentBlock>
          <Description>변경하실 비밀번호를 입력해 주세요.</Description>
          <div>
            <Label>새 비밀번호</Label>
            <OTPWrapper>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
            </OTPWrapper>
          </div>

          <div>
            <Label>새 비밀번호 확인</Label>
            <OTPWrapper>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
              <div>
                <Input maxLength={1} />
              </div>
            </OTPWrapper>
          </div>
        </ContentBlock>

        <div>
          <ConfirmButton>변경하기</ConfirmButton>
        </div>
      </Container>

      <AlertMessage type={'success'} />
    </>
  );
};

export default ChangeForm;

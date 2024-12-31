import styled from 'styled-components';
import { Button, Typography } from 'antd';

const { Text } = Typography;

const Container = styled.div`
  width: 480px;
  height: 56px;
  top: 752px;
  left: 1309px;
  padding: 0 20px 0 16px;
  border-radius: 8px;
  border: 1px solid;
  border-image-source: linear-gradient(117.06deg, #4097ff 0%, rgba(64, 151, 255, 0) 99.03%);
  display: flex;
  align-items: center;
  background: #091124f2;
  justify-content: space-between;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const StyledButton = styled(Button)`
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
`;

const Message = styled(Text)`
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #dceeff;
  text-align: left;
`;

const AlertMessage = ({ type }: { type: 'success' | 'error' }) => {
  return (
    <Container>
      <div>
        <img src={type === 'success' ? '/svg/success.svg' : '/svg/error.svg'} alt='messageicon' />
        <Message>
          {type === 'error'
            ? '인증번호 입력 시간을 초과하였습니다. 재전송 해주세요.'
            : '인증번호 확인이 완료되었습니다.'}
        </Message>
      </div>

      <StyledButton>
        <img src='/svg/close.svg' alt='close' />
      </StyledButton>
    </Container>
  );
};

export default AlertMessage;

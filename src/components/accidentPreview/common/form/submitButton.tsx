import { Button } from 'antd';
import styled from 'styled-components';

const StyledSubmitButton = styled(Button)`
  width: 100%;
  height: 48px;
`;

const SubmitButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <StyledSubmitButton type='primary' htmlType='submit' disabled={disabled}>
      확인
    </StyledSubmitButton>
  );
};

export default SubmitButton;

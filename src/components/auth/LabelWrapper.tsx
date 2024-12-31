import { ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  > div:first-child {
    width: 142px;
    text-align: left;
    > span {
      padding-top: 4px;
    }
  }
`;

const StyledText = styled(Text)`
  color: #dceeff;
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const RedDot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: red;
  border-radius: 50%;
  margin-left: 2px; // 텍스트와 점 사이 간격
  transform: translateY(-300%);
`;

const LabelWrapper = ({
  title,
  children,
  hasDot = false
}: {
  title: string;
  children: ReactNode;
  hasDot?: boolean;
}) => {
  return (
    <Wrapper>
      <div>
        <StyledText style={{ display: 'inline-block' }}>{title}</StyledText>
        {hasDot && <RedDot />}
      </div>
      {children}
    </Wrapper>
  );
};

export default LabelWrapper;

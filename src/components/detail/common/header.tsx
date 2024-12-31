import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledDetailContentsHeader = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  span {
    font-size: 17px;
  }
`;

const DetailContentsHeader = ({ Icon, title }: { Icon: ReactNode; title: string }) => {
  return (
    <StyledDetailContentsHeader>
      {Icon}
      <span className='gothic-a1-semibold'>{title}</span>
    </StyledDetailContentsHeader>
  );
};

export default DetailContentsHeader;

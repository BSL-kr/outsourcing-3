import styled from 'styled-components';
import { Button, Typography } from 'antd';
import { useState, type MouseEvent } from 'react';

const { Text } = Typography;

const Container = styled.div`
  //  임시용
  margin-top: 100px;

  width: 624px;
  height: 588px;
  background: #091124;
  border: 1px solid;
  border-image-source: linear-gradient(117.06deg, #4097ff 0%, rgba(64, 151, 255, 0) 99.03%);
  box-shadow: 0 0 16px 0 #1f51ff66 inset;
  padding: 25px 27px 0 35px;

  > div:last-child {
    display: flex;
    align-items: center;
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
  gap: 24px;
  border: 1px solid #0b245f;
  flex: 1;
  height: auto;
  border-radius: 8px;
  padding: 24px 28px 28px 28px;
  margin-bottom: 32px;
  margin-top: 24px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  > input {
    border: 1px solid #0b3d91;
    background: transparent;
    height: 52px;
    border-radius: 6px;

    font-family: Gothic A1;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: #fff;
    padding-left: 12px;
  }
`;

const StyledText = styled(Text)`
  max-width: 314px;
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #dceeff;

  em {
    color: #4097ff;
  }
`;

const EmptyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: -7px;

  > span:first-child {
    text-align: left;
    color: #fff;
  }

  > span:last-child {
    text-align: left;
    color: #2a5b95;
  }
`;

const EmptyText = styled(Text)`
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 500;
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

const AddressItem = styled.button<{ state: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ state }) => (state ? '#4097FF' : 'transparent')};
  padding: 12px;
  border: 1px solid #0b3d91;
  width: 100%;
  height: 83px;
  gap: 10px;
  border-radius: 8px;
  cursor: pointer;
`;

const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AddressItemText = styled(Text)<{ state: boolean }>`
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: ${({ state }) => (state ? '#091124' : '#82acd4')};
`;

const DUMMY = [
  {
    name: 'Dummy1',
    address: 'Dummy 1 address'
  },
  {
    name: 'Dummy2',
    address: 'Dummy 2 address'
  }
];

const AddressModal = () => {
  const [list, setList] = useState(DUMMY);
  const [target, setTarget] = useState<{ [key: string]: string; name: string } | null>(null);

  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement>,
    item: { [key: string]: string; name: string }
  ) => {
    e.preventDefault();
    setTarget(item);
  };

  return (
    <Container>
      <Header>
        <ContentText>현장 검색</ContentText>
        <CloseButton>
          <img src='/svg/close.svg' alt='close button' />
        </CloseButton>
      </Header>

      <ContentBlock>
        <div>
          <StyledText>
            현장 검색을 위해 <em>현장명</em> 또는
          </StyledText>
          <StyledText>
            <em>현장 주소</em> 입력해 주세요.
          </StyledText>
        </div>

        <input value='청계산로 193' />

        {!list ? (
          <EmptyBlock>
            <EmptyText>조회된 현장이 없습니다.</EmptyText>
            <EmptyText>*Web에서 해당 현장이 등록되지 않은 경우 조회되지 않습니다.</EmptyText>
          </EmptyBlock>
        ) : (
          <ListBlock>
            {DUMMY.map(item => (
              <AddressItem onClick={e => handleOnClick(e, item)} state={target?.name === item.name}>
                <AddressItemText state={target?.name === item.name}>{item.name}</AddressItemText>
                <AddressItemText state={target?.name === item.name}>{item.address}</AddressItemText>
              </AddressItem>
            ))}
          </ListBlock>
        )}
      </ContentBlock>

      <div>
        <ConfirmButton>변경하기</ConfirmButton>
      </div>
    </Container>
  );
};

export default AddressModal;

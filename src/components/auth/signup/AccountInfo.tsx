import { Button, Checkbox, Input, Select, Typography } from 'antd';
import styled from 'styled-components';
import LabelWrapper from '../LabelWrapper.tsx';

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
    height: 52px;
    border-radius: 8px;
    border: 1px solid #0b3d91;
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

const Wrapper = styled.div`
  position: relative;
  width: 480px;
`;

const SearchInput = styled(Input)`
  border: 1px solid #0b3d91;
  background: transparent;
  border-radius: 8px;
  height: 52px;

  &::placeholder {
    font-family: Gothic A1;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: #2a5b95;
  }

  &:disabled {
    border: 1px solid #0b3d91;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background: #113d71;
  border: none;
`;

const StyledSelect = styled(Select)`
  border-radius: 8px;
  height: 52px;
  width: 100%;
  position: relative;

  &:where(.css-dev-only-do-not-override-161f05s).ant-select-outlined:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    border: 1px solid #0b3d91;
    background: transparent;
  }

  .ant-select-selection-placeholder {
    font-family: Gothic A1;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: #2a5b95;
    text-align: left;
  }

  .ant-select-arrow {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-37%);
    background: #113d71;
    width: 44px;
    height: 44px;

    img {
      transform: translateX(80%);
    }
  }
`;

const GapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  &:nth-child(2) {
    > div:last-child {
      input:disabled {
        background: #223154;
      }
    }
  }
`;

const BirthWrapper = styled.div`
  display: flex;
  gap: 12px;

  & > .ant-select {
    &:nth-of-type(1) {
      width: 190px;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      width: 133px;
    }
  }
`;

const SignWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: flex-end;

  .left-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    .description {
      font-family: Gothic A1;
      font-size: 20px;
      font-weight: 500;
      line-height: 25px;
      color: #2a5b95;
    }
  }
`;

const ResignButton = styled(Button)`
  height: 44px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #4097ff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  color: #4097ff;
`;

const SignInput = styled(Input)`
  width: 100%;
  height: 224px;
  background: transparent;
  border: 1px solid #0b3d91;
`;

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledConfirmCheckBox = styled(Checkbox)`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  gap: 17px;

  > span:last-child {
    font-family: Gothic A1;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    color: #fff;
    padding-top: 4px;
  }

  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
  }

  .ant-checkbox-inner {
    background: transparent;
  }

  .ant-checkbox,
  .ant-checkbox-inner {
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1.5px solid #4097ff;
  }

  .ant-checkbox-checked {
    display: flex;
    align-items: center;
    justify-items: center;
    background: #4097ff;
  }
`;

const AccountInfo = () => {
  return (
    <Block>
      <div>
        <Title>본인정보</Title>
        <Description>회원가입을 위한 정보를 입력해 주세요.</Description>
      </div>

      <GapWrapper>
        <LabelWrapper title={'현장'} hasDot>
          <Wrapper>
            <SearchInput placeholder='현장 및 업체 검색' disabled />
            <StyledButton>
              <img src='/svg/input-search.svg' alt='search icon' />
            </StyledButton>
          </Wrapper>
        </LabelWrapper>
        <LabelWrapper title={'업체'} hasDot>
          <Wrapper>
            <SearchInput placeholder='경기 수원시 장안구 천천동 524-4' disabled />
          </Wrapper>
        </LabelWrapper>
        <LabelWrapper title={'팀'} hasDot>
          <Wrapper>
            <StyledSelect
              placeholder='팀을 선택해 주세요.'
              suffixIcon={<img src='/svg/collapse-button.svg' alt='list open' />}
            />
          </Wrapper>
        </LabelWrapper>
        <LabelWrapper title={'직책'} hasDot>
          <Wrapper>
            <StyledSelect
              placeholder='직책을 선택해 주세요.'
              suffixIcon={<img src='/svg/collapse-button.svg' alt='list open' />}
            />
          </Wrapper>
        </LabelWrapper>
        <LabelWrapper title={'이름'} hasDot>
          <Wrapper>
            <SearchInput placeholder='이름을 입력해 주세요.' />
          </Wrapper>
        </LabelWrapper>
        <LabelWrapper title={'생년월일'} hasDot>
          <Wrapper>
            <BirthWrapper>
              <StyledSelect
                placeholder='YYYY'
                suffixIcon={<img src='/svg/collapse-button.svg' alt='list open' />}
              />
              <StyledSelect
                placeholder='MM'
                suffixIcon={<img src='/svg/collapse-button.svg' alt='list open' />}
              />
              <StyledSelect
                placeholder='DD'
                suffixIcon={<img src='/svg/collapse-button.svg' alt='list open' />}
              />
            </BirthWrapper>
          </Wrapper>
        </LabelWrapper>
        <LabelWrapper title={'비밀번호'} hasDot>
          <Wrapper>
            <SearchInput placeholder='비밀번호를 입력해 주세요.' />
          </Wrapper>
        </LabelWrapper>
        <LabelWrapper title={'비밀번호 확인'} hasDot>
          <Wrapper>
            <SearchInput placeholder='비밀번호를 입력해 주세요.' />
          </Wrapper>
        </LabelWrapper>
      </GapWrapper>

      <SignContainer>
        <SignWrapper>
          <div className='left-text'>
            <div>
              <StyledText style={{ display: 'inline-block' }}>전자서명</StyledText>
              <RedDot />
            </div>
            <span className='description'>사각형에 서명을 등록해 주세요.</span>
          </div>

          <div>
            <ResignButton>다시쓰기</ResignButton>
          </div>
        </SignWrapper>

        <SignInput />
      </SignContainer>

      <div>
        <StyledConfirmCheckBox>
          필기한 전자서명의 법적 효력이 있음에 동의합니다.
        </StyledConfirmCheckBox>
      </div>
    </Block>
  );
};

export default AccountInfo;

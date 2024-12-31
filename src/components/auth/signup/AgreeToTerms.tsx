import styled from 'styled-components';
import { Checkbox, CheckboxChangeEvent, Collapse, Typography } from 'antd';
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

  .ant-collapse-header {
    display: flex;
    align-items: center !important;
    gap: 8px;
    height: 52px;
    padding: 14px 18px !important;
  }

  .ant-collapse-header-text {
    display: flex;
    height: 52px;
  }

  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 17px;
  }
  .ant-checkbox,
  .ant-checkbox-inner {
    width: 24px;
    height: 24px;
    //background: transparent;
    border: 1.5px solid #4097ff;
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

const CheckBlock = styled.div`
  width: 624px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #0b3d91;
  display: flex;
  flex-direction: column;
`;

const AllCheckBox = styled(Checkbox)`
  display: flex;
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

const StyledCheckbox = styled(Checkbox)`
  font-family: Gothic A1;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  color: #fff;

  > span:last-child {
    padding-top: 4px;
  }

  .ant-checkbox-inner {
    background: transparent;
  }

  .ant-checkbox-checked {
    display: flex;
    align-items: center;
    justify-items: center;
    background: #4097ff;
  }
`;

const AgreeToTerms = () => {
  const [checked, setChecked] = useState([false, false, false]);

  const handleAllCheckboxChange = (e: CheckboxChangeEvent) => {
    const isChecked = e.target.checked;
    setChecked([isChecked, isChecked, isChecked]);
  };

  const handleCheckboxChange = (index: number, e: CheckboxChangeEvent) => {
    e.stopPropagation();
    setChecked(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      updated[0] = updated[1] && updated[2];
      return updated;
    });
  };

  const items = [
    {
      key: '2',
      label: (
        <div onClick={e => e.stopPropagation()} style={{ display: 'flex' }}>
          <StyledCheckbox checked={checked[1]} onChange={e => handleCheckboxChange(1, e)}>
            (필수) 서비스 이용약관 동의
          </StyledCheckbox>
        </div>
      ),
      children: (
        <Text>
          여기에 이용약관 내용을 작성합니다. 사용자는 이 내용을 읽고 체크박스를 통해 동의할 수
          있습니다.
        </Text>
      )
    },
    {
      key: '3',
      label: (
        <div onClick={e => e.stopPropagation()} style={{ display: 'flex' }}>
          <StyledCheckbox checked={checked[2]} onChange={e => handleCheckboxChange(2, e)}>
            (필수) 개인정보 처리 방침
          </StyledCheckbox>
        </div>
      ),
      children: (
        <Text>
          여기에 이용약관 내용을 작성합니다. 사용자는 이 내용을 읽고 체크박스를 통해 동의할 수
          있습니다.
        </Text>
      )
    }
  ];

  return (
    <Block>
      <div>
        <Title>약관동의</Title>
        <Description>S100 안전관리 솔루션 서비스 이용을 위해 약관 동의가 필요합니다.</Description>
      </div>

      <CheckBlock>
        <AllCheckBox
          checked={checked[0]}
          onChange={handleAllCheckboxChange}
          indeterminate={checked[1] !== checked[2]}
        >
          전체 동의
        </AllCheckBox>

        <Collapse
          ghost
          expandIconPosition='end'
          expandIcon={({ isActive }) => (
            <img
              src='/svg/collapse-button.svg'
              alt='button'
              style={{ transform: isActive ? 'rotate(0)' : 'rotate(180deg)' }}
            />
          )}
          items={items}
        />
      </CheckBlock>
    </Block>
  );
};

export default AgreeToTerms;

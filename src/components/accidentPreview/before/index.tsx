import styled from 'styled-components';
import AccidentPreviewSubTitle from '../common/header';
import { ChangeEvent, useState } from 'react';
import CheckBoxCheck from '../../../assets/CheckBoxCheck';
import AccidentPreviewInputData from '../common/form/InputData';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import AccidentPreviewRadioData from '../common/form/RadioData';
import AccidentPreviewInputTextAreaData from '../common/form/TextAreaData';
import AccidentPreviewInputUploadImageData from '../common/form/uploadImage';
import SubmitButton from '../common/form/submitButton';

const StyledAccidentPreviewBeforeTab = styled.div`
  padding: 34px 20px 19px;
`;

const StyledAnonymityCheckBox = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  label {
    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;
    background-color: #9c9c9b;

    input {
      width: 1px;
      height: 1px;
      position: absolute;
      visibility: hidden;
    }
  }
`;

const AnonymityCheckBox = ({
  isChecked,
  onChange
}: {
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <StyledAnonymityCheckBox>
      <label>
        <input type='checkbox' checked={isChecked} onChange={onChange} />
        {isChecked && <CheckBoxCheck />}
      </label>
      <div className='gothic-a1-medium'>익명</div>
    </StyledAnonymityCheckBox>
  );
};

const RADIO_CONST = [
  {
    value: '추락',
    label: '추락'
  },
  {
    value: '끼임',
    label: '끼임'
  },
  {
    value: '부딪힘',
    label: '부딪힘'
  },
  {
    value: '기타',
    label: '기타'
  }
];

const AccidentPreviewBeforeTab = () => {
  const [isAnonymity, setIsAnonymity] = useState(false);

  const [form] = useForm();

  const onChangeAnonymity = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsAnonymity(checked);
  };

  return (
    <StyledAccidentPreviewBeforeTab>
      <Form form={form}>
        <AccidentPreviewSubTitle
          subtitle='신고자 정보'
          customRight={<AnonymityCheckBox isChecked={isAnonymity} onChange={onChangeAnonymity} />}
        />
        <AccidentPreviewInputData name='place' inputTitle='현장' />
        <AccidentPreviewSubTitle subtitle='신고 내용' />
        <AccidentPreviewRadioData options={RADIO_CONST} inputTitle='사고 유형' name='type' />
        <AccidentPreviewInputData name='point' inputTitle='발생 장소' />
        <AccidentPreviewInputTextAreaData
          placeholder='신고 내용'
          name='contents'
          inputTitle='신고 내용'
        />
        <AccidentPreviewInputUploadImageData form={form} name='image' inputTitle='사진' />
        <SubmitButton disabled={false} />
      </Form>
    </StyledAccidentPreviewBeforeTab>
  );
};

export default AccidentPreviewBeforeTab;

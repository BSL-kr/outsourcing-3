import { Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import styled from 'styled-components';
import AccidentPreviewSubTitle from '../common/header';
import AccidentPreviewInputData from '../common/form/InputData';
import AccidentPreviewInputTextAreaData from '../common/form/TextAreaData';
import AccidentPreviewDatePicker from '../common/form/DatePickerData';
import AccidentPreviewInputUploadImageData from '../common/form/uploadImage';
import SubmitButton from '../common/form/submitButton';
import Warnning from '../../../assets/Warnning';

const StyledAccidentPreviewAfterTab = styled.div`
  padding: 34px 20px 19px;
  min-height: 565px;
  display: flex;
  flex-direction: column;

  .not-validate-case {
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      flex: 1;

      p {
        line-height: 20px;
      }
    }
  }
`;

const AccidentPreviewAfterTab = () => {
  const [form] = useForm();

  const isValidate = false;

  return (
    <StyledAccidentPreviewAfterTab>
      {isValidate ? (
        <Form form={form}>
          <AccidentPreviewSubTitle subtitle='조치하기' />
          <AccidentPreviewInputData name='company' inputTitle='업체' />
          <AccidentPreviewInputData name='manager' inputTitle='조치자' />
          <AccidentPreviewDatePicker name='date' inputTitle='조치일자' />
          <AccidentPreviewInputTextAreaData
            placeholder='발생 원인을 입력해주세요.'
            name='cause'
            inputTitle='신고 내용'
            required={true}
          />
          <AccidentPreviewInputTextAreaData
            placeholder='조치 내용 및 재발방지대책을 입력해주세요.'
            name='result'
            inputTitle='신고 내용'
            required={true}
          />
          <AccidentPreviewInputUploadImageData form={form} name='image' inputTitle='사진' />
          <SubmitButton disabled={false} />
        </Form>
      ) : (
        <div className='not-validate-case'>
          <div>
            <Warnning />
            <div>
              <p className='gothic-a1-semibold'>해당 아차사고는 ‘조치 전’상태 입니다.</p>
              <p className='gothic-a1-semibold'>관리자에게 아차사고 조치를 요청해 주세요.</p>
            </div>
          </div>
          <SubmitButton disabled={false} />
        </div>
      )}
    </StyledAccidentPreviewAfterTab>
  );
};

export default AccidentPreviewAfterTab;

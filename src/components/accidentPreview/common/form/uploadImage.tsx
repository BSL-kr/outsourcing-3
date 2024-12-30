import { Form, FormInstance, Upload } from 'antd';
import styled from 'styled-components';
import AccidentPreviewFormHeader from './header';
import { useState } from 'react';
import { RcFile } from 'antd/es/upload';
import UploadIcon from '../../../../assets/Upload';

const StyledAccidentPreviewInputUploadImageData = styled.div`
  margin-bottom: 32px;

  .ant-upload {
    display: inline-block;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: #777;

    img {
      object-fit: contain;
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      background-color: #f4f4f4;
    }
  }

  .upload-file {
    display: flex;
    width: 147px;
    align-items: center;
    justify-content: center;
    border: 1px dashed #cfcfcf;
    height: 52px;
    gap: 4px;
    border-radius: 8px;

    .upload-file-text {
      color: #777;
    }
  }
`;

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const AccidentPreviewInputUploadImageData = ({
  inputTitle,
  name,
  form,
  required
}: {
  inputTitle: string;
  name: string;
  form: FormInstance;
  required?: boolean;
}) => {
  const [imageUrl, setImageUrl] = useState('');

  const getImageDataFromForm = () => {
    return form.getFieldValue(name);
  };

  const onChangeImage = () => {
    const { file } = getImageDataFromForm() as { file: RcFile };
    getBase64(file, url => {
      setImageUrl(url);
    });
  };

  return (
    <StyledAccidentPreviewInputUploadImageData>
      <AccidentPreviewFormHeader inputTitle={inputTitle} required={required} />
      <Form.Item name={name} valuePropName='avator'>
        <Upload
          name='file'
          listType='picture'
          beforeUpload={() => false}
          onChange={onChangeImage}
          showUploadList={false}
        >
          {imageUrl ? (
            <img src={imageUrl} alt='avatar' width={334} height={334} />
          ) : (
            <div className='upload-file'>
              <UploadIcon />
              <span className='upload-file-text gothic-a1-semibold'>파일 올리기</span>
            </div>
          )}
        </Upload>
      </Form.Item>
    </StyledAccidentPreviewInputUploadImageData>
  );
};

export default AccidentPreviewInputUploadImageData;

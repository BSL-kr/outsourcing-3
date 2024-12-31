import styled from 'styled-components';
import Alret from '../../../assets/Alert';
import DetailContentsHeader from '../common/header';
import StopHand from '../../../assets/StopHand';

const StyledDetailWorkStop = styled.div`
  height: 84px;
  margin-bottom: 24px;

  .contents {
    position: relative;
    margin: 0px 20px;

    height: 100%;
    border-radius: 8px;
    background: linear-gradient(111.64deg, #ff814b -40.02%, #ff0f0f 275.96%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .bg-icon {
      position: absolute;
      right: 0px;
      bottom: -18px;
    }

    p {
      color: #fff;

      &:first-child {
        margin-bottom: 5px;
      }
    }
  }
`;

const DetailWorkStop = () => {
  return (
    <StyledDetailWorkStop>
      <DetailContentsHeader Icon={<Alret />} title='작업중지권' />
      <div className='contents'>
        <div className='bg-icon'>
          <StopHand />
        </div>
        <div>
          <p className='gothic-a1-medium'>위험 상황 발생 시 작업중지!</p>
          <p className='gothic-a1-bold'>작업 중지요청</p>
        </div>
      </div>
    </StyledDetailWorkStop>
  );
};

export default DetailWorkStop;

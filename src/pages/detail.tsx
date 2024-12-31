import styled from 'styled-components';
import LeftArrow from '../assets/LeftArrow';
import { Button, Select } from 'antd';
import DetailDangerPointContent from '../components/detail/dangerPoint';
import DetailWorkStop from '../components/detail/workStop';
import DetailPoint from '../components/detail/point';
import DetailFooter from '../components/detail/footer';

const StyledDetailPageHeader = styled.header`
  background-color: #121314;

  padding: 8px 20px 8px 16px;
  justify-content: space-between;
  color: #fff;
  align-items: center;

  .arrow-box {
    text-align: left;
    margin-bottom: 19px;
  }

  .header-contents {
    display: flex;
    justify-content: space-between;

    gap: 13px;

    .left-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .ant-select-selection-item {
        text-align: left;
        font-family: 'Gothic A1', sans-serif;
        font-weight: 500;
        font-style: normal;
      }

      .user {
        font-size: 16px;
      }
      .greating {
        font-size: 15px;
      }
    }

    button {
      font-size: 17px;
      width: 86px;
      height: 76px;
    }
  }
`;

const StyledDetailPage = styled.div`
  .contents-box {
    padding: 20px 0px 115px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    background: linear-gradient(180deg, #ffffff -21.58%, #eeeff3 65.53%);
  }
`;

const DetailPage = () => {
  return (
    <StyledDetailPage>
      <StyledDetailPageHeader>
        <div className='arrow-box'>
          <LeftArrow />
        </div>
        <div className='header-contents'>
          <div className='left-content'>
            <div>
              <span className='user gothic-a1-semibold'>김시공</span>
              <span className='greating gothic-a1-medium'>님, 오늘도 안전 작업 하세요!</span>
            </div>
            <div>
              <Select
                defaultValue='안성 아레나스 현장'
                style={{ width: '100%', height: 44 }}
                className='gothic-a1-medium'
                options={[]}
              />
            </div>
          </div>
          <Button className='gothic-a1-semibold' type='primary'>
            출근
          </Button>
        </div>
      </StyledDetailPageHeader>
      <div className='contents-box'>
        <DetailDangerPointContent />
        <DetailWorkStop />
        <DetailPoint />
      </div>
      <DetailFooter />
    </StyledDetailPage>
  );
};

export default DetailPage;

import { Divider } from 'antd';
import styled from 'styled-components';

const StyledDangerPointCard = styled.div`
  width: 282px;
  height: 326px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;

  box-shadow: 0px 0px 6px 0px #00000026;
  background-color: #fff;

  .header {
    padding: 16px 0px 12px;
    text-align: center;
    font-size: 16px;
    height: 48px;
  }

  .body {
    padding: 15px 11px 12px;

    .step-title {
      text-align: left;
      font-size: 17px;
    }

    .ant-divider {
      margin: 10px 0px 15px !important;
    }

    .content {
      border-radius: 8px;
      overflow: hidden;
      position: relative;

      .bg {
        position: absolute;
        z-index: 1;
        background-color: #ffeeef;
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .content-body {
        position: relative;
        z-index: 2;
        padding: 16px 8px 21px;
        display: flex;
        flex-direction: column;

        div {
          line-height: 20px;
        }

        .amount-box {
          margin-bottom: 16px;
        }

        .type {
          padding: 3px 9px 1px 8px;
          border-radius: 14px;
          background-color: #ffaa0d;
          color: #fff;
          display: flex;
          align-items: center;
        }

        .type-box,
        .cause-box {
          margin-bottom: 14px;
        }

        .measure-box,
        .cause-box {
          align-items: flex-start;
        }

        & > div {
          display: flex;
          align-items: center;
          font-size: 16px;
          gap: 10px;

          & div {
            &:nth-child(odd) {
              word-break: keep-all;
            }
          }
        }
      }
    }
  }
`;

const DangerPointCard = ({
  cardTitle,
  type,
  stepTitle,
  cause,
  amount,
  strength,
  measures,
  headerColor,
  dangerous
}: {
  cardTitle: string;
  type: string;
  stepTitle: string;
  amount: number;
  strength: number;
  cause: string;
  measures: string;
  headerColor: string;
  dangerous: string;
}) => {
  return (
    <StyledDangerPointCard>
      <div
        className='header gothic-a1-bold'
        style={{
          backgroundColor: headerColor
        }}
      >
        {cardTitle}
      </div>
      <div className='body'>
        <div className='step-title gothic-a1-bold'>{stepTitle}</div>
        <Divider style={{ borderColor: '#CACACA' }} />
        <div className='content'>
          <div className='bg'>{dangerous}</div>
          <div className='content-body'>
            <div className='type-box'>
              <div className='sub-title gothic-a1-semibold'>피해형태</div>
              <div className='type'>{type}</div>
            </div>
            <div className='amount-box'>
              <div className='sub-title gothic-a1-semibold'>빈도</div>
              <div>{amount}</div>
              <div className='sub-title gothic-a1-semibold'>강도</div>
              <div>{strength}</div>
            </div>
            <div className='cause-box'>
              <div className='sub-title gothic-a1-semibold'>위험요인</div>
              <div className='contents gothic-a1-medium'>{cause}</div>
            </div>
            <div className='measure-box'>
              <div className='sub-title gothic-a1-semibold'>감소대책</div>
              <div className='contents gothic-a1-medium'>{measures}</div>
            </div>
          </div>
        </div>
      </div>
    </StyledDangerPointCard>
  );
};

export default DangerPointCard;

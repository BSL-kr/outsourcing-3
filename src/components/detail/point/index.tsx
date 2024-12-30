import styled from 'styled-components';
import ChartIcon from '../../../assets/Chart';
import DetailContentsHeader from '../common/header';
import CheckBoxCheck from '../../../assets/CheckBoxCheck';
import { useState } from 'react';

const StyledDetailPoint = styled.div`
  margin-top: 12px;

  .point-cards {
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > div {
      border-radius: 8px;
    }
  }
`;

const PointList = [
  {
    title: '안전 OX 퀴즈',
    subTitle: '안전 상식쌓기',
    image: '/images/ox.png'
  },
  {
    title: '안전 초성 퀴즈',
    subTitle: '똑똑한 안전',
    image: '/images/initial-const.png'
  },
  {
    title: '안전한 하루의 시작',
    subTitle: '오늘의 운세',
    image: '/images/luck.png'
  }
];

const StyledPointCard = styled.div`
  display: flex;
  position: relative;

  padding: 6px 34px 6px 23px;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 2px 3px 16px 0px #5c5c5c26;

  .text-area {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    justify-content: center;

    .subtitle {
      color: #777;
      font-size: 15px;
    }

    .title {
      color: #000;
      font-size: 18px;
    }
  }

  .check-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: #e9e9e9;
    width: 24px;
    height: 24px;

    border-radius: 12px;
    box-shadow: 0px 1px 3px 0px #0000001a;
    display: flex;

    align-items: center;
    justify-content: center;

    &.active {
      background-color: #2a64f6;
    }
  }
`;

const PointCard = ({
  title,
  subTitle,
  image
}: {
  title: string;
  subTitle: string;
  image: string;
}) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <StyledPointCard>
      <div className='text-area'>
        <p className='subtitle gothic-a1-medium'>{subTitle}</p>
        <p className='title gothic-a1-bold'>{title}</p>
      </div>
      <div>
        <img src={image} />
      </div>
      <div
        className={`check-btn ${isComplete ? 'active' : ''}`}
        onClick={() => {
          setIsComplete(state => !state);
        }}
      >
        <CheckBoxCheck />
      </div>
    </StyledPointCard>
  );
};

const DetailPoint = () => {
  return (
    <StyledDetailPoint>
      <DetailContentsHeader Icon={<ChartIcon />} title='안전하게 일하고 포인트 쌓기!' />
      <div className='point-cards'>
        {PointList.map(({ title, subTitle, image }) => (
          <PointCard key={title} title={title} subTitle={subTitle} image={image} />
        ))}
      </div>
    </StyledDetailPoint>
  );
};

export default DetailPoint;

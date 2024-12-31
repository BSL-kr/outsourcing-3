import styled from 'styled-components';
import DetailContentsHeader from '../common/header';
import CheckList from '../../../assets/CheckList';
import { useState } from 'react';
import { Carousel } from 'antd';
import DangerPointCard from './card';

const StlyedDetailDangerPointContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .slick-list {
    padding: 0 20% 0 0 !important;
  }
`;

const mockData = [
  {
    cardTitle: '토목 및 기초공사',
    stepTitle: '단위작업명',
    type: '추락',
    amount: 3,
    strength: 3,
    dangerous: '상',
    cause: '위험요인1에 대한 내용이 두 줄로 들어갑니다.',
    measures: '위험요인1에 대한 내용이 두 줄로 들어갑니다.',
    headerColor: '#FDE5E5'
  },
  {
    cardTitle: '토목 및 기초공사',
    stepTitle: '단위작업명',
    type: '추락',
    amount: 3,
    strength: 3,
    dangerous: '상',
    cause: '위험요인1에 대한 내용이 두 줄로 들어갑니다.',
    measures: '위험요인1에 대한 내용이 두 줄로 들어갑니다.',
    headerColor: '#f6f6f6'
  },
  {
    cardTitle: '토목 및 기초공사',
    stepTitle: '단위작업명',
    type: '추락',
    amount: 3,
    strength: 3,
    dangerous: '상',
    cause: '위험요인1에 대한 내용이 두 줄로 들어갑니다.',
    measures: '위험요인1에 대한 내용이 두 줄로 들어갑니다.',
    headerColor: '#FFDF8C'
  }
];

const DetailDangerPointContent = () => {
  const [page, setPage] = useState(0);

  return (
    <StlyedDetailDangerPointContent>
      <DetailContentsHeader Icon={<CheckList />} title={`금일 중점 위험사항(${page + 1}/3)`} />
      <Carousel
        swipeToSlide
        draggable
        dots={false}
        afterChange={currentNumber => {
          setPage(currentNumber);
        }}
        style={{
          paddingLeft: 20
        }}
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth={true}
      >
        {mockData.map(
          (
            {
              cardTitle,
              type,
              stepTitle,
              cause,
              amount,
              strength,
              measures,
              headerColor,
              dangerous
            },
            index
          ) => (
            <DangerPointCard
              key={index}
              cardTitle={cardTitle}
              type={type}
              stepTitle={stepTitle}
              cause={cause}
              amount={amount}
              strength={strength}
              measures={measures}
              headerColor={headerColor}
              dangerous={dangerous}
            />
          )
        )}
      </Carousel>
    </StlyedDetailDangerPointContent>
  );
};

export default DetailDangerPointContent;

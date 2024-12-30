import styled from 'styled-components';
import HomeIcon from '../../../assets/Home';
import AccountIcon from '../../../assets/Account';
import QRIcon from '../../../assets/QR';

const StlyedDetailFooter = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;

  width: 100%;
  max-width: 375px;

  background-color: #fff;

  height: 64px;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px -4px 11px 0px #00000014;

  .footer-icon {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
  }

  .center-btn {
    position: absolute;
    left: 50%;
    bottom: 17px;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #2a64f6;
  }
`;

const DetailFooter = () => {
  return (
    <StlyedDetailFooter>
      <div className='footer-icon'>
        <div>
          <HomeIcon />
        </div>
        <div className='gothic-a1-semibold text'>홈</div>
      </div>
      <div className='footer-icon'>
        <div>
          <AccountIcon />
        </div>
        <div className='gothic-a1-semibold text'>MY</div>
      </div>
      <div className='center-btn'>
        <QRIcon />
      </div>
    </StlyedDetailFooter>
  );
};

export default DetailFooter;

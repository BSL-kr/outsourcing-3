import '../report.css';

const SafeReportPage = () => {
  return (
    <div className='safe-report-page'>
      <header>
        <div className='title gothic-a1-bold'>2024년 07월 안전 리포트</div>
        <div className='button-box'>
          <button className='gothic-a1-semibold'>인쇄</button>
          <img src='./svg/Icon_close.svg' />
        </div>
      </header>
      <table>
        <tbody>
          <tr className='safe-report-contents-header'>
            <td className='left'>
              <div>
                <div className='title gothic-a1-bold'>현장</div>
                <div className='contents gothic-a1-medium'>현장명이 입력됩니다.</div>
              </div>
              <div>
                <div className='title gothic-a1-bold'>시공사</div>
                <div className='contents gothic-a1-medium'>시공사1, 시공사2</div>
              </div>
              <div>
                <div className='title gothic-a1-bold'>현장소장</div>
                <div className='contents gothic-a1-medium'>박소장</div>
              </div>
            </td>
            <td className='divider' />
            <td className='right'>
              <div className='total-box'>
                <div className='title gothic-a1-semibold'>전체 TBM 수행률</div>
                <div className='amount gothic-a1-extrabold'>67%</div>
              </div>
              <div></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SafeReportPage;

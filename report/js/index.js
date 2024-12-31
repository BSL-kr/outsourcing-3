const totalTBMWorkRate = document.getElementById('total-TBM-work-rate');
const TBMWorkRate = document.getElementById('TBM-work-rate');
const compareSafePoint = document.getElementById('compare-safe-point');
const disasterType = document.getElementById('disaster-type');
const declarationType = document.getElementById('declaration-type');
const accidentPlace = document.getElementById('accident-place');
const completeRate = document.getElementById('complete-rate');

new Chart(totalTBMWorkRate, {
  type: 'doughnut',
  data: {
    labels: ['#2A64F6', '#735BE9', '#D2E0FF', '#75C9C8'],
    datasets: [
      { data: [60, 30, 5, 5], backgroundColor: ['#2A64F6', '#735BE9', '#D2E0FF', '#75C9C8'] }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false // 범례 숨기기
      }
    }
  }
});

new Chart(TBMWorkRate, {
  type: 'bar',
  data: {
    labels: ['현장 평균', '우리 현장'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [81, 68],
        backgroundColor: ['#C1C1C1', '#2A64F6'],
        borderWidth: 1,
        borderRadius: 10,
        barPercentage: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 60, // 시작값
        max: 90, // 최대값
        ticks: {
          stepSize: 10, // 간격 설정 (선택 사항)
          color: 'black',
          font: {
            color: 'black',
            size: 20,
            family: 'Gothic A1'
          }
        }
      },
      x: {
        ticks: {
          color: 'black', // X축 텍스트 색상
          font: {
            size: 20,
            family: 'Gothic A1',
            weight: '600'
          }
        }
      }
    },
    plugins: {
      datalabels: {
        color: 'black',
        font: {
          size: 20
        }
      },
      legend: {
        display: false // 범례 숨기기
      }
    }
  },
  plugins: [ChartDataLabels]
});

new Chart(compareSafePoint, {
  type: 'line',
  data: {
    labels: ['1일', '5일', '10일', '15일', '20일', '25일', '30일'], // X축 라벨
    datasets: [
      {
        label: '60점 이상 80점 미만',
        data: [23, 22, 16, 18, 19, 23, 19],
        borderColor: '#F6B42A',
        borderWidth: 1,
        fill: false,
        tension: 0.1, // 곡선 정도 (0.0: 직선, 1.0: 매우 곡선)
        borderWidth: 2, // 선 두께
        pointBackgroundColor: 'white', // 데이터 포인트 색상
        pointRadius: 5, // 포인트 크기
        datalabels: {
          display: false // 데이터 라벨 표시하지 않음
        },
        clip: false
      },
      {
        label: '60점 미만',
        data: [24, 18, 21, 21, 15, 19, 24],
        borderColor: '#B0B0B0',
        borderWidth: 1,
        fill: false,
        tension: 0.1, // 곡선 정도 (0.0: 직선, 1.0: 매우 곡선)
        borderWidth: 2, // 선 두께
        pointBackgroundColor: 'white', // 데이터 포인트 색상
        pointRadius: 5, // 포인트 크기
        datalabels: {
          display: false // 데이터 라벨 표시하지 않음
        },
        clip: false
      },
      {
        label: '80점 이상',
        data: [4, 11, 18, 16, 22, 28, 23],
        borderColor: '#2A64F6',
        borderWidth: 1,
        fill: false,
        tension: 0.1, // 곡선 정도 (0.0: 직선, 1.0: 매우 곡선)
        borderWidth: 2, // 선 두께
        pointBackgroundColor: 'white', // 데이터 포인트 색상
        pointRadius: 5, // 포인트 크기
        datalabels: {
          display: false // 데이터 라벨 표시하지 않음
        },
        clip: false
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 0, // 시작값
        max: 40, // 최대값
        borderColor: 'transparent', // Y축 경계선을 투명하게 설정
        grid: {
          display: false, // 그리드 라인은 표시하지만
          drawBorder: false // Y축 시작 지점의 경계선은 그리지 않음
        },
        ticks: {
          stepSize: 20, // 간격 설정 (선택 사항)
          color: 'black',
          font: {
            color: 'black',
            size: 20,
            family: 'Gothic A1'
          }
        }
      },
      x: {
        min: 0, // 시작값
        max: 30, // 최대값
        grid: {
          display: true, // Y축 그리드 라인 숨기기
          drawBorder: false // Y축 경계선 제거
        },
        ticks: {
          stepSize: 5,
          color: 'black', // X축 텍스트 색상
          font: {
            size: 20,
            family: 'Gothic A1',
            weight: '600'
          }
        }
      }
    },
    plugins: {
      datalabels: {
        color: 'black',
        font: {
          size: 20
        }
      },
      legend: {
        display: false // 범례 숨기기
      }
    }
  },
  plugins: [ChartDataLabels]
});

new Chart(disasterType, {
  type: 'bar',
  data: {
    labels: [
      '떨어짐',
      '끼임',
      '부딪힘',
      '무너짐',
      '물체에 맞음',
      '깔림',
      '감전',
      '화재 및 폭발',
      '기타'
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [6, 3, 2.2, 2.2, 2.3, 2.3, 0.4, 0.8, 1.9],
        backgroundColor: [
          '#F6932A',
          '#F6932A',
          '#F6932A',
          '#F6932A',
          '#F6932A',
          '#F6932A',
          '#F6932A',
          '#F6932A',
          '#F6932A'
        ],
        borderWidth: 0.5,
        barPercentage: 0.5
      },
      {
        label: 'Dataset 1',
        data: [7.5, 1, 5, 1.8, 3.9, 1.8, 2, 2.3, 3],
        backgroundColor: [
          '#2A64F6',
          '#2A64F6',
          '#2A64F6',
          '#2A64F6',
          '#2A64F6',
          '#2A64F6',
          '#2A64F6',
          '#2A64F6',
          '#2A64F6'
        ],
        borderWidth: 0.5,
        barPercentage: 0.5
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          drawBorder: false // y축의 시작 경계선도 제거 (필요시)
        },
        min: 0, // 시작값
        max: 10, // 최대값
        ticks: {
          stepSize: 2, // 간격 설정 (선택 사항)
          color: 'black',
          font: {
            color: 'black',
            size: 20,
            family: 'Gothic A1'
          }
        }
      },
      x: {
        grid: {
          display: false, // Y축 그리드 라인 숨기기
          drawBorder: false // Y축 경계선 제거
        },
        ticks: {
          autoSkip: false,
          color: 'black', // X축 텍스트 색상
          display: true,
          maxRotation: 0, // 최대 회전 각도
          minRotation: 0, // 최소 회전 각도,
          font: {
            size: 20,
            family: 'Gothic A1',
            weight: '600'
          }
        }
      }
    },
    plugins: {
      datalabels: {
        display: false
      },
      legend: {
        display: false // 범례 숨기기
      }
    }
  },
  plugins: [ChartDataLabels]
});

new Chart(declarationType, {
  type: 'doughnut',
  data: {
    labels: ['#ffd966', '#ff6b6b', '#4ecdc4', '#ffc2ae'],
    datasets: [
      { data: [60, 30, 5, 5], backgroundColor: ['#ffd966', '#ff6b6b', '#4ecdc4', '#ffc2ae'] }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false // 범례 숨기기
      }
    }
  }
});

new Chart(accidentPlace, {
  type: 'doughnut',
  data: {
    labels: ['#ffd966', '#ff6b6b', '#4ecdc4', '#ffc2ae'],
    datasets: [
      { data: [60, 30, 5, 5], backgroundColor: ['#ffd966', '#ff6b6b', '#4ecdc4', '#ffc2ae'] }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false // 범례 숨기기
      }
    }
  }
});

const ctx = completeRate.getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 400); // 상단에서 하단으로 그라데이션
gradient.addColorStop(0, '#fd792d'); // 상단 색상
gradient.addColorStop(1, '#ffd966'); // 하단 색상

new Chart(completeRate, {
  type: 'doughnut',
  data: {
    labels: ['#2A64F6', '#735BE9', '#D2E0FF', '#75C9C8'],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: [gradient, '#efefef'],
        borderWidth: 0,
        pointStyle: 'circle', // 포인트 스타일 (circle, triangle, rect 등)
        pointRadius: 6, // 포인트 크기
        pointBackgroundColor: ['#fd792d', '#ffd966', '#ff5733'], // 포인트 색상
        pointBorderColor: '#ffffff', // 포인트 테두리 색상
        pointBorderWidth: 2 // 포인트 테두리 두께
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%', // 도넛의 중심 크기 조정
    plugins: {
      legend: {
        display: false // 범례 숨기기
      },
      centerText: {
        text: `${Math.round((90 / 100) * 100)}%` // 중앙 텍스트에 달성률 표시
      },
      datalabels: {
        display: true,
        formatter: function (value, ctx) {
          return ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0); // 총합을 계산하여 표시
        },
        color: '#000000',
        font: {
          weight: 'bold',
          size: 24
        },
        align: 'center',
        anchor: 'center'
      }
    }
  },
  plugins: [
    {
      id: 'centerText',
      beforeDraw: function (chart) {
        const { width } = chart;
        const { height } = chart;
        const ctx = chart.ctx;

        ctx.restore();
        const fontSize = (height / 100).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';

        ctx.fillStyle = '#fd792d';
        const text = '90%';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ]
});

import React, { useEffect, useState } from 'react';
import './Board.css';
import axios from 'axios';

const Board = () => {
  // State로 viewList를 관리
  const [viewList, setViewList] = useState([]);

  // 데이터 가져오는 함수
  useEffect(() => {
    // 백엔드에서 데이터 가져오기
    axios.get('http://localhost:8080/views')
      .then(response => {
        console.log(response.data); // 데이터 확인용 로그
        setViewList(response.data); // 가져온 데이터를 state에 저장
      })
      .catch(error => {
        console.error('Error fetching viewList:', error);
      });
  }, []); // 빈 배열: 컴포넌트가 처음 렌더링될 때 한 번 실행

  return (
    <div className="viewList">
      {viewList.map((view, index) => (
        <div key={index} className="viewCard">
          <div className="viewImage">
            {Array.from({ length: view.imageCount }).map((_, imgIndex) => (
              <div key={imgIndex} className="thumbnail" />
            ))}
          </div>
          <p className="viewText">{view.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Board;

import React, { Component } from 'react';
import './Footer.css';
import { VscHome, VscMenu, VscHeart, VscArchive, VscChevronUp, VscSearch } from 'react-icons/vsc';
import { Carousel } from 'antd';
import PopupSearch from '../PopupSearch/PopupSearch'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        {/* TopMenu */}
        <div className='topMenu'>
          <VscMenu />
          <span className='logo'>PUBLIC</span>
          <PopupSearch />
        </div>
        {/* Antd Carousel 캐러셀 */}
        <Carousel autoplay> {/* autoplay 속성 추가 */}
          <div className='contentStyle'>
            <img src={process.env.PUBLIC_URL + '/sa.png'} alt="슬라이드 이미지 1" className="carouselImage"/>
          </div>
          <div className='contentStyle'>
            <img src={process.env.PUBLIC_URL + '/sa.png'} alt="슬라이드 이미지 2" className="carouselImage"/>
          </div>
          <div className='contentStyle'>
            <img src={process.env.PUBLIC_URL + '/sa.png'} alt="슬라이드 이미지 3" className="carouselImage"/>
          </div>
          <div className='contentStyle'>
            <img src={process.env.PUBLIC_URL + '/sa.png'} alt="슬라이드 이미지 4" className="carouselImage"/>
          </div>
        </Carousel>

        {/* Contents */}

        <div className='boardList'>
        What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        </div>

        {/* 하단 네비게이션 바 */}
        <nav className='nav'>
          <ul className='navBar'>
            <li><VscHome />HOME</li>  
            <li><VscMenu />CATEGORY</li>  
            <li><VscHeart />MYPAGE</li>  
            <li><VscArchive />CART</li>  
            <li><VscChevronUp />TOP</li>  
          </ul>   
        </nav>
      </div>
    );
  }
}

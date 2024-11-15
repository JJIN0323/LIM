import React, { Component } from 'react'
import './Swiper.css'

export default class Swiper extends Component {
  render() {
    return (
      <div>
        <Swiper className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    )
  }
}

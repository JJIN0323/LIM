import React, { Component } from 'react'
import './Copyright.css'

export default class copyrightContainer extends Component {
  render() {
    return (
      <div className='copyrightContainer'>
        <div className='inner'>
            <ul className='linkWrap'>
                <li>소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>API 출처</li>
            </ul>
            <ul className='btnWrap' onClick={() => window.location.href = 'tel:1365'}>
                <li>Copyright By HEYJIN & 1365 Volunteer</li>
            </ul>
        </div>
      </div>
    )
  }
}

import React from 'react';
import './Field.css';
import { VscSearch } from 'react-icons/vsc'

const Field = () => {
  return (
    <fieldset className="fieldContainer">
      <legend>검색</legend>
      <input
        className="inputTypeText"
        id="keyword"
        name="keyword"
        placeholder="어떤 봉사를 찾으세요?"
        type="text"
      />
      <VscSearch className='searchBtn'/>
    </fieldset>
  );
};

export default Field;

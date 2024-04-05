import React from 'react';
import {loader} from "../../utils/images";

const Loader = () => {
  return (
    <div className='container'>
      <div className='flex justify-center align-center'>
        <img src = {loader} alt = "" />
      </div>
    </div>
  )
}

export default Loader
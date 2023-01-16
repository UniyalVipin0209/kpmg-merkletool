import React from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

export const TopBackNavButton =({url, history})=>{
    return  <div className='topVerticalBackButton' onClick={()=>history.push(url)}>
                <BsArrowLeftCircle className='topIcon' size={22}></BsArrowLeftCircle>
            </div>
}
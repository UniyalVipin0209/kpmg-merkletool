import React from 'react';

export const autoCompOff=event => {

    if(event.target.autocomplete)
    {
      event.target.autocomplete = "whatever";
    }
 
 };
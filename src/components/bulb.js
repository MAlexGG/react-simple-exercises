import React from 'react';
import bulbOn from '../assets/bulbOn.jpg';
import bulbOff from '../assets/bulbOff.jpg';

export default function Bulb({ lampState }) {
  return lampState ?
    (<span>
      <img src={bulbOn} width={50} alt='on'/>
    </span>) :
    (<span>
      <img src={bulbOff} width={50} alt='off'/>
    </span>)
}

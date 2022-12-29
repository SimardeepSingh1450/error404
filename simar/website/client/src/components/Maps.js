import React, { useEffect } from 'react'
import { useState } from 'react';

const Maps = () => {
const [inputLocation,setInputLocation]=useState('Punjab')
const [currentLatitude,setCurrentLatitude]=useState('');
const [currentLongitude,setCurrentLongitude]=useState('');
const [emptyMapMsg,setEmptyMapMsg]=useState('Enter a Valid Location Please')

const attainLatLong=async()=>{
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputLocation}.json?access_token=sk.eyJ1Ijoic2ltYXJkZWVwMTQ1MCIsImEiOiJjbGM5NXg4eGMweXduM3BwMmtjZ3ZoN2I5In0.JQ6pwdvsjjV2n1MAd6RNMQ`);
  const data=await response.json();
  // console.log(data.features[0].center);
  setCurrentLatitude(data.features[0].center[0]);
  setCurrentLongitude(data.features[0].center[0]);
}

useEffect(()=>{
  attainLatLong();
},[inputLocation])

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <input onChange={(e)=>{setInputLocation(e.target.value)}} style={{height:'50px'}} placeholder='Enter Location'/>

{ inputLocation? <iframe title='Map'
  width="450"
  height="250"
  frameborder="0" style={{width:'450',height:'250'}}
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAyRk5PMF4BJveL1mx69cUmIL439C5jLxQ&q=${inputLocation}`}
  allowfullscreen>
</iframe> : <h2>{emptyMapMsg}</h2>
}

    </div>

  )
}

export default Maps
import React, { useEffect, useRef, useState } from 'react'
import crossImg from './../../Images/EndStories.png'
import './Container.css'

const Container = ({showdisplay,ShowStories}) => {
  const [count, setCount] = useState(0)

  const StyleBar = {
    backgroundColor: 'white',
    heigth:'100%',
    width: {count}
  }

  const requestRef = useRef()
  const previousTimeRef = useRef()

  const animate = count => {
    if(requestRef.current <= 100) {
      count +=1
      setCount((prev) => prev + 1);
    }
    previousTimeRef.current = count 
    requestRef.current = requestAnimationFrame(animate);

  }

  useEffect(() => {

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);

  },[])


    console.log('container rendered')
  return (
    <div className='stories-container' style={{display: showdisplay ? 'block' : 'none'}} >
        <img className ='imgEdit' src={crossImg} alt='img' onClick={ShowStories}></img>
        <div className='img-container'>
          <div className='img-header'>
            <div className='progressBars'>
              <div className='first slider' style={StyleBar}>
                <div className='bar one '></div>
              </div>
              <div className='second slider'>
                <div className='bar two'></div>
              </div>
              <div className='third slider'>
                <div className='bar three'></div>
              </div>
              <div className='fourth slider'>
                <div className='bar four'></div>
              </div>
            </div>

          </div>
            
        </div>
    </div>
  )
}

export default Container
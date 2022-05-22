import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Scroll from "./components/Scroll";


function App() {
  const {scrollY, scrollYProgress}=useViewportScroll();
  const scrollAni=useAnimation();
  const imgRef=useRef();
  const [seeImg, setSeeImg]=useState(false);
  const imgAni=useAnimation();
  useEffect(()=>{
    scrollYProgress.onChange(()=>{
      scrollAni.start({opacity:1 ,top:`calc( ${scrollYProgress.current*100}% - ${scrollYProgress.current*30}px`,transition:{type:"linear",duration:0.1}}).then(()=>scrollAni.start({opacity:0, transition:{delay:0.5}}));
    })
    scrollY.onChange(()=>{
      if(scrollY.get()+window.innerHeight>imgRef.current.offsetTop+70)
        setSeeImg(true)
      if(scrollY.get()+window.innerHeight<imgRef.current.offsetTop+70)
        setSeeImg(false);
    })
  },[scrollYProgress]);
  useEffect(()=>{
    if(seeImg)
      imgAni.start({x:"500px"})
    else
      imgAni.start({x:"-100%", transition:{duration:0}})
  },[seeImg])
  useEffect(()=>{
    console.log(imgRef.current.offsetTop)
  },[imgRef]);
  return (
    <>
      <div style={{height:"200vh", backgroundColor:"red"}}>
        df
      </div>
      <motion.img ref={imgRef} src="/logo192.png" initial={{x:"-100%"}} animate={imgAni} transition={{duration:1}} />
      <Scroll />
    </>
  );
}

export default App;

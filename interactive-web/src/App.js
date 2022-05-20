import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import Scroll from "./components/Scroll";


function App() {
  const {scrollYProgress}=useViewportScroll();
  const scrollAni=useAnimation();
  useEffect(()=>{
    scrollYProgress.onChange(()=>{
      scrollAni.start({opacity:1 ,top:`calc( ${scrollYProgress.current*100}% - ${scrollYProgress.current*30}px`,transition:{type:"linear",duration:0.1}}).then(()=>scrollAni.start({opacity:0, transition:{delay:0.5}}));
    })
  },[scrollYProgress])
  return (
    <>
      <div style={{height:"200vh", backgroundColor:"red"}}>
        df
      </div>
      <div style={{height:"200vh"}} />
      <Scroll />
    </>
  );
}

export default App;

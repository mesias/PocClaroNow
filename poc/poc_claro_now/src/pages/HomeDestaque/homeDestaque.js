import React, { useState } from 'react';
import NavBarHome from '../../components/NavBar/navBar';
import VideoShowCase from '../videoshowcase';
import YouTube from "react-youtube";



const HomeDestaque = () => {  

  return(
    <section className='container-hd'>
    <NavBarHome></NavBarHome>
    {/* <VideoShowCase></VideoShowCase> */}
    </section>
  )
}
export default HomeDestaque;
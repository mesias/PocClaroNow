import React from 'react'
import { bool, func } from 'prop-types';
import imagemap from '../../consts/imagemap'
import "./SideMenu.css";

const SideMenu = ({open, screens,onImgClick}) => {
    console.log('Side', screens);
    return (
        <section >
            {open &&
                <div className="sidenav">
                    <div className={`container-img ${screens > 1 ? 'container-img-over' : ''}`}>
                        {screens > 1 &&
                            <img src={imagemap.playerRem1} onClick={()=> onImgClick(1) }/>
                        }

                        <img src={imagemap.playerAdd1} onClick={()=> onImgClick(2) }/>

                        <img src={imagemap.playerAdd2} onClick={()=> onImgClick(3) }/>

                        <img src={imagemap.playerAdd1} onClick={()=> onImgClick(4) }/>

                    </div>
                </div>
            }
        </section>
    );
}

SideMenu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default SideMenu;
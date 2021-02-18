import React from 'react';
import "./index.sass";
import Principal from "../../Assests/Images/foxbel-music.png";
import PrincipalSmll from "../../Assests/Images/foxbel-music-icon.png"

const Sidebar = (props) => {
    return(
        <div className={props.open_sb ? "sidebar lcs2 lc3 mc2 mcs2 sc3 scs3 xscs4 xsc4" :  "sidebar lcs1 lc1 mc1 mcs1 scs1 sc1 xscs2 xsc2"}>
            <div className={props.open_sb ? "navbar lcs3 lc3 mc3 mcs2 sc3 scs3 xscs4 xsc4 " :  "navbar lcs1 lc1 mc1 mcs1 scs1 sc2 xscs2 xsc2 "}>
                <div className={props.open_sb ? "lcs2 mcs2 xscs3 scs2" :  "none"}></div>
                <i onClick={() => props.setOpen_sb(!props.open_sb)} className={props.open_sb ? "xscs1 scs1 mcs1 lcs1 burger fas fa-bars" :  "xscs2 scs2 mcs1 lcs1 burger fas fa-bars"}></i>
                <figure className={props.open_sb ? "xscs4 xsc4 scs3 sc3 mcs3 mc3 lcs3 lc3" :  "xscs2 xsc2 scs2 sc2 mcs2 mc2 lc2 lcs2"}>
                    <img className={props.open_sb ? "principalSmll xscs4 scs3 mcs3 lcs3" :  "principalSmll xscs2 scs2 mcs2 lcs2"} src={PrincipalSmll} alt=""/>
                    <img className="principalLrg" src={Principal} alt="Foxbel Music"/>
                </figure>
                <div className={props.open_sb ? "xscs4 xsc4 scs3 sc3 mcs3 mc3" : " xscs2 xsc2 scs2 sc2 mcs2 mc2 lcs2 lc2"}>
                    <i class={props.open_sb ? "xscs1 scs1 mcs1 lcs1 fas fa-archive" :  "xscs2 scs2 mcs2 lcs2 fas fa-archive"}></i>
                    <h1 class={props.open_sb ? "xscs3 scs2 mcs2 lcs2 library" :  "none"}>Mi Librería</h1>
                </div>
                <div className={props.open_sb ? "xscs4 xsc4 scs3 sc3 mcs3 mc3" : " xscs2 xsc2 scs2 sc2 mcs2 mc2 lcs2 lc2"}>
                    <i class={props.open_sb ? "xscs1 scs1 mcs1 lcs1 fas fa-history" :  "xscs2 scs2 mcs2 lcs2 fas fa-history"}></i>
                    <p class={props.open_sb ? "xscs3 scs2 mcs2 lcs2" :  "none"}>Recientes</p>
                </div>
                <div className={props.open_sb ? "xscs4 xsc4 scs3 sc3 mcs3 mc3" : " xscs2 xsc2 scs2 sc2 mcs2 mc2 lcs2 lc2"}>
                    <i class={props.open_sb ? "xscs1 scs1 mcs1 lcs1 fas fa-users" :  "xscs2 scs2 mcs2 lcs2 fas fa-users"}></i>
                    <p class={props.open_sb ? "xscs3 scs2 mcs2 lcs2" :  "none"}>Artistas</p>
                </div>
                <div className={props.open_sb ? "xscs4 xsc4 scs3 sc3 mcs3 mc3" : " xscs2 xsc2 scs2 sc2 mcs2 mc2 lcs2 lc2"}>
                    <i class={props.open_sb ? "xscs1 scs1 mcs1 lcs1 fas fa-file-audio" :  "xscs2 scs2 mcs2 lcs2 fas fa-file-audio"}></i>
                    <p class={props.open_sb ? "xscs3 scs2 mcs2 lcs2" :  "none"}>Álbums</p>
                </div>
                <div className={props.open_sb ? "xscs4 xsc4 scs3 sc3 mcs3 mc3" : " xscs2 xsc2 scs2 sc2 mcs2 mc2 lcs2 lc2"}>
                    <i class={props.open_sb ? "xscs1 scs1 mcs1 lcs1 fas fa-music" :  "xscs2 scs2 mcs2 lcs2 fas fa-music"}></i>
                    <p class={props.open_sb ? "xscs3 scs2 mcs2 lcs2" :  "none"}>Canciones</p>
                </div>
                <div className={props.open_sb ? "xscs4 xsc4 scs3 sc3 mcs3 mc3" : " xscs2 xsc2 scs2 sc2 mcs2 mc2 lcs2 lc2"}>
                    <i class={props.open_sb ? "xscs1 scs1 mcs1 lcs1 fas fa-microphone-alt" :  "xscs2 scs2 mcs2 lcs2 fas fa-microphone-alt"}></i>
                    <p class={props.open_sb ? "xscs3 scs2 mcs2 lcs2" :  "none"}>Estaciones</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
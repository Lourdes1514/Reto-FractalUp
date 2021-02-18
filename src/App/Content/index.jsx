import React from 'react';
import "./index.sass";
import photo from "../../Assests/Images/Vector.png";

const Content = (props) => {
    return(
        <div className={props.open_cnt ? "principal lcs8 lc8 mcs8 mc8 sc7 scs7 xscs6 xsc6" :  "principal lc9 lcs9 mc9 mcs9 sc9 scs9 xscs8 xsc8"}>
            <div className={props.open_cnt ? "content lcs9 lc9 mcs8 mc8 sc7 scs7 xscs6 xsc6" :  "content sc9 scs9 xscs8 xsc8 mcs9 mc9 lc9 lcs9"}>
                <div className={props.open_cnt ? "actions lcs9 lc9 mcs8 mc8 sc7 scs7 xscs6 xsc7" :  "actions sc9 scs9 xscs8 xsc8 mcs9 mc9 lc9 lcs9"}>
                    <div className={props.open_cnt ? "barSearch scs3 sc6 xscs3 xsc6 mcs4 mc6 lcs4 lc6" :  "barSearch scs5 sc6 xscs4 xsc6 mcs5 mc6 lcs5 lc6"}>
                        <input type="text" className={props.open_cnt ? "searchInput scs5 xscs5 mcs5 lcs5" :  "searchInput scs5 xscs5 mcs5 lcs5"} placeholder="Buscar" ></input>
                        <i class="fas fa-search scs1 xscs1 mcs1 lcs1"></i>
                    </div>
                    <div className={props.open_cnt ? "xscs1 scs1" :  "block scs1 xscs1"}></div>
                    <div className={props.open_cnt ? "user scs3 sc3 xscs3 xsc3" :  "user scs3 sc3 xscs3 xsc3"}>
                        <i className={props.open_cnt ? "xscs1 scs1 fas fa-user" :  "xscs1 scs1 fas fa-user"}></i>
                        <p className={props.open_cnt ? "name xscs2 scs2" :  "name scs2 xscs2"}>Francisco M.</p>
                    </div>
                </div>
                <div className={props.open_cnt ? "description scs7 sc7 xscs6 xsc6" :  "description scs9 sc9 xscs8 xsc8"}>
                    <figure className={props.open_cnt ? "scs3 sc3 xscs3 xsc3" :  "scs3 sc3 xscs3 xsc3"}>
                        <img className={props.open_cnt ? "scs3 xscs3" : "scs3 xscs3"} src={photo} alt=""/>
                        <i className={props.open_cnt ? "play fas fa-play scs3 xscs3" : "play fas fa-play scs3 xscs3"}></i>
                    </figure>
                    <div className={props.open_cnt ? "text scs4 sc4 xscs3 xsc3" :  "text scs6 sc6 xscs5 xsc5"}>
                        <div className={props.open_cnt ? "about scs4 sc4 xscs3 xsc3" :  "about scs6 sc6 xscs5 xsc5"}>
                            <h1 className={props.open_cnt ? "nameArt scs4 xscs3" :  "nameArt scs6 xscs5"}>Adele 21</h1>
                            <p className={props.open_cnt ? "descripArt scs4 xscs3" :  "descripArt scs6 xscs5"}>
                                Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988),
                                conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.
                            </p>
                        </div>
                        <div className={props.open_cnt ? "buttons scs4 sc4 xscs3 xsc2" :  "buttons scs6 sc6 xscs5 xsc4"}>
                            <button className={props.open_cnt ? "reproduce scs4 xscs1" :  "reproduce scs3 xscs2"}>Reproducir</button>
                            <button className={props.open_cnt ? "follow scs4 xscs1" :  "follow scs3 xscs2"}>Seguir</button>
                        </div>
                    </div>
                </div>
                <div className={props.open_cnt ? "results scs7 sc8 xscs6 xsc6" :  "results scs9 sc8 xscs8 xsc8"}>
                    <h1 className={props.open_cnt ? "title scs8 xscs6" :  "title scs8 xscs8"}>Resultados</h1>
                    <div className={props.open_cnt ? "music scs4 sc4 xscs3 xsc4" :  "music scs4 sc4 xscs4 xsc4"}>
                        <div className={props.open_cnt ? "musicContent scs4 sc4 xscs3 xsc4" :  "musicContent scs4 sc4 xscs4 xsc4"}>
                            <i class="musicIcon fas fa-ellipsis-v"></i>
                            <img className="scs4 xscs4" src={photo} alt=""/>
                            <i className="musicPlay fas fa-play "></i>
                        </div>
                        <h1 className={props.open_cnt ? "musicTitle scs4 xscs4" :  "musicTitle scs4 xscs4"}>21</h1>
                        <p className={props.open_cnt ? "musicArts scs4 xscs4" :  "musicArts scs4 xscs4"}>Adele</p>
                    </div> 
                    <div className={props.open_cnt ? "music scs4 sc4 xscs3 xsc4" :  "music scs4 sc4 xscs4 xsc4"}>
                        <div className={props.open_cnt ? "musicContent scs4 sc4 xscs3 xsc4" :  "musicContent scs4 sc4 xscs4 xsc4"}>
                            <i class="musicIcon fas fa-ellipsis-v"></i>
                            <img className="scs4 xscs4" src={photo} alt=""/>
                            <i className="musicPlay fas fa-play "></i>
                        </div>
                        <h1 className={props.open_cnt ? "musicTitle scs4 xscs4" :  "musicTitle scs4 xscs4"}>21</h1>
                        <p className={props.open_cnt ? "musicArts scs4 xscs4" :  "musicArts scs4 xscs4"}>Adele</p>
                    </div> 
                    <div className={props.open_cnt ? "music scs4 sc4 xscs3 xsc4" :  "music scs4 sc4 xscs4 xsc4"}>
                        <div className={props.open_cnt ? "musicContent scs4 sc4 xscs3 xsc4" :  "musicContent scs4 sc4 xscs4 xsc4"}>
                            <i class="musicIcon fas fa-ellipsis-v"></i>
                            <img className="scs4 xscs4" src={photo} alt=""/>
                            <i className="musicPlay fas fa-play "></i>
                        </div>
                        <h1 className={props.open_cnt ? "musicTitle scs4 xscs4" :  "musicTitle scs4 xscs4"}>21</h1>
                        <p className={props.open_cnt ? "musicArts scs4 xscs4" :  "musicArts scs4 xscs4"}>Adele</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Content 
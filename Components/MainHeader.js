'use client'

import Styles from "../Styles/mainheader.module.css";
import Image from "next/image";
import Avatar from "../Images/Avatar.svg";
import button from "../Images/button.svg";
import button2 from "../Images/button2.svg";
import { useState } from "react";


export default function MainHeader() {

    const [active, setActive] = useState(0);
    const [activeminitab, setActiveminitab] = useState(0);

    return (
        <>
        <div className={Styles.minitab}>
            <div onClick={()=>{setActiveminitab(1)}} className ={activeminitab === 1 ? Styles.minitabactive: Styles.minitabdiv}>Tab 1</div>
            <div onClick={()=>{setActiveminitab(2)}} className ={activeminitab === 2 ? Styles.minitabactive: Styles.minitabdiv}>Tab 2</div>
            <div onClick={()=>{setActiveminitab(3)}} className ={activeminitab === 3 ? Styles.minitabactive: Styles.minitabdiv}>Tab 3</div>
        </div>
            <div className={Styles.container}>
                <div className={Styles.leftcontainer}>
                    <div className={Styles.avatar}>
                        <Image src={Avatar}></Image>
                    </div>

                    <div className={Styles.name}>Van Arsdel</div>

                    <div  onClick={()=>{setActive(1)}} className ={active === 1 ? Styles.active: Styles.thikcontainer}>Home
                        
                    </div>

                    <div onClick={()=>{setActive(2)}} className ={active === 2 ? Styles.active: Styles.thikcontainer}>Timeline
                        
                    </div>

                    <div onClick={()=>{setActive(3)}} className ={active === 3 ? Styles.active: Styles.thikcontainer}>Chat
                        
                    </div>

                    <div onClick={()=>{setActive(4)}} className ={active === 4 ? Styles.active: Styles.thikcontainer}>Assigned to you
                        
                    </div>
                </div>
                <div className={Styles.buttons}>
                    <div>
                        <Image src={button}></Image>
                    </div>
                    <div>
                        <Image src={button2}></Image>
                    </div>
                </div>
            </div>
        </>
    );
}

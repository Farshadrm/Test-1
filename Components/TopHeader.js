import Styles from "../Styles/TopHeader.module.css"
import Image from "next/image"
import TopHeaderLogo from "../Images/TopHeaderLogo.svg"
import Search from "../Images/Search.svg"
import arwleft from '../Images/arwleft.svg'
import arwright from '../Images/arwright.svg'
import max from '../Images/ChromeMaximize.svg'
import min from '../Images/ChromeMinimize.svg'
import close from '../Images/Close.svg'
import dots from '../Images/Dots.svg'
import person from '../Images/person.png'
import tik from '../Images/tik.svg'
import minitablogo from '../Images/minitablogo.svg'

export default function TopHeader(){
    return(
        <>
        <div className={Styles.container}>

            {/* minitab header */}
            <div className={Styles.minitabcontainer}>
                <div className={Styles.leftminitabcontainer}>
                    <div className={Styles.userpic}>
                        <Image src ={person} alt="" fill={true}></Image>
                    </div>
                    Van Arsdel
                </div>
                <div className={Styles.rightblockcontainer}>
                <Image src={minitablogo}></Image>
                <Image src={dots}></Image>
                </div>
            </div>

            {/* fullsize header */}
            <div className={Styles.leftBlock}>
                <Image src={TopHeaderLogo}></Image>
            </div>
            <div className={Styles.middleBlock}>
            <button><Image src ={arwleft} alt=""></Image></button>
            <button><Image src ={arwright} alt=""></Image></button>
            <div className={Styles.searchbox}>
                    <Image src ={Search} alt=""></Image>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className={Styles.rightBlock}>
                <button><Image src ={dots} alt=""></Image></button>
                <div className={Styles.userpic}><Image src ={person} alt="" fill={true}></Image><div className={Styles.tik}><Image src ={tik} alt="" ></Image></div></div>
                <button><Image src ={min} alt=""></Image></button>
                <button><Image src ={max} alt=""></Image></button>
                
                <button><Image src ={close} alt=""></Image></button>
            </div>

        </div>
        </>
    )
}
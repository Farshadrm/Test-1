'use client'

import Image from "next/image";
import Styles from "../Styles/header.module.css";
import Lines from "../Images/3lineheader.svg"
import Circle from "../Images/Circle.svg"
import Search from "../Images/Search.svg"
import btnarw from "../Images/btnarw.svg"
import { useState } from "react";


export default function Header (){

    const [active, setActive] = useState(0);
    

    return (
        <>
        <div className ={Styles.container}>
            <div className={Styles.leftblock}>
                <div className={Styles.menu}><Image src={Lines} alt=""></Image></div>
                <div className={Styles.leftblockdiv}>
                    <div onClick={()=>{setActive(1)}} className ={active === 1 ? Styles.active: Styles.txtcontainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ===1 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                    <div onClick={()=>{setActive(2)}} className ={active === 2 ? Styles.active: Styles.txtcontainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ==2 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                    <div onClick={()=>{setActive(3)}} className ={active === 3 ? Styles.active: Styles.txtcontainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ===3 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                </div>
                <div className={Styles.leftblockdiv}>
                <div onClick={()=>{setActive(4)}} className ={active === 4 ? Styles.active: Styles.txtcontainer}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ===4 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                    <div onClick={()=>{setActive(5)}} className ={active === 5 ? Styles.active: Styles.txtcontainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ===5 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                    <div onClick={()=>{setActive(6)}} className ={active === 6 ? Styles.active: Styles.txtcontainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ===6 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                </div>
                <div className={Styles.leftblockdiv}>                   
                <div onClick={()=>{setActive(7)}} className ={active === 7 ? Styles.active: Styles.txtcontainer}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ===7 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                    <div onClick={()=>{setActive(8)}} className ={active === 8 ? Styles.active: Styles.txtcontainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" fill={active ===8 ? '#ffffff': '#424242'}/>
                    </svg>
                        <p>Text</p>
                        <Image src={btnarw} alt="" ></Image>
                    </div>
                </div>
            </div>
            <div className={Styles.rightblock}>
                <p>Filter</p>
                <div className={Styles.searchbox}>
                    <Image src ={Search} alt=""></Image>
                    <input type="text" placeholder="Find"/>
                </div>
            </div>
        </div>
        </>
    )
}
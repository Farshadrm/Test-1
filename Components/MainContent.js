'use client'


import Link from "next/link";
import Styles from "../Styles/maincontent.module.css";
import Image from "next/image";
import Arrow from "../Images/Arrow.svg";
import Twoarrow from "../Images/Twoarrow.svg";
import Search from "../Images/Search.svg";
import Setting from "../Images/Setting.svg";
import Dots from "../Images/Dots.svg"

/**Importing chart ChartComponents */
import Dropdown from '../Components/Dropdown'
import BarChart from '../ChartComponents/BarChart'
import DoughnutChart from '../ChartComponents/DoughnutChart'
import LineChart from '../ChartComponents/LineChart'
import GaugeChart from '../ChartComponents/GaugeChart'
import MultipleRings from "../ChartComponents/MultipleRings"
import GroupBarChart from "../ChartComponents/GroupBarChart"
import { useState } from "react";

export default function MainContent() {

    const [active, setActive] = useState(0);

    return (
        <>
            <div className={Styles.container}>
            
                <Dropdown/>

                <div className={Styles.main}>

                    {/* 1st chart */}

                    <div className={Styles.firstChart}>
                        <div className={Styles.upHeader}>
                            <div>
                                <div className={Styles.chartName}>Chart 1</div>
                                <div className={Styles.description}>Description</div>
                            </div>
                            
                            <button className={Styles.dotsBtn}><Image src={Dots}></Image></button>
                        </div>
                            <div className={Styles.tabs}>
                                <button onClick={()=>{setActive(1)}} className ={active === 1 ? Styles.active: Styles.thikcontainer}>7 days
                                
                                </button>
                                <button onClick={()=>{setActive(2)}} className ={active === 2 ? Styles.active: Styles.thikcontainer}>30 days
                                
                                </button>
                                <button onClick={()=>{setActive(3)}} className ={active === 3 ? Styles.active: Styles.thikcontainer}>60 days
                                
                                </button>
                            </div>
                        <div className={Styles.eachSectionChart}><GaugeChart/>
                        
                        <ul className={Styles.gaugechartlegend} style={{position:'absolute',display:'flex',listStyle:'none', alignItems:'center',gap:'5px', bottom:'0', left:'25%'}}>
          <li style={{display:'flex', alignItems:'center', gap:'5px'}}>
            <div style={{width: '10px ', height:'10px', backgroundColor: '#00b7c3',marginTop:'5px'}}></div>
            <div style={{color:'#424242'}}>Lable 1</div>
          </li>
          <li style={{display:'flex', alignItems:'center',gap:'5px'}}>
          <div style={{width: '10px ', height:'10px', backgroundColor: '#d1d1d1', marginTop:'5px'}}></div>
          <div style={{color:'#424242'}}>Label 2</div>
          </li>
        </ul>
                        
                        </div>
                        <div className={Styles.viewDetailsContainer}><Link href="" className={Styles.viewDetails}>View details</Link></div>
                    </div>

                    {/* 2nd chart */}

                    <div className={Styles.secondChart}>
                    <div className={Styles.upHeader}>
                            <div>
                                <div className={Styles.chartName}>Chart 2</div>
                                <div className={Styles.description}>Description</div>
                            </div>
                            <button className={Styles.dotsBtn}><Image src={Dots}></Image></button>
                        </div>
                        <div className={Styles.eachSectionChart}><BarChart/></div>
                        <div className={Styles.viewDetailsContainer}><Link href="" className={Styles.viewDetails}>View details</Link></div>
                    </div>

                    {/* 3rd chart */}

                    <div className={Styles.thirdChart}>
                    <div className={Styles.upHeader}>
                            <div>
                                <div className={Styles.chartName}>Chart 3</div>
                                <div className={Styles.description}>Description</div>
                            </div>
                            <button className={Styles.dotsBtn}><Image src={Dots}></Image></button>
                        </div>
                        <div className={Styles.tabs}>
                                <button onClick={()=>{setActive(10)}} className ={active === 10 ? Styles.active: Styles.thikcontainer}>7 days
                                
                                </button>
                                <button onClick={()=>{setActive(11)}} className ={active === 11 ? Styles.active: Styles.thikcontainer}>30 days
                                
                                </button>
                                <button onClick={()=>{setActive(12)}} className ={active === 12 ? Styles.active: Styles.thikcontainer}>60 days
                                
                                </button>
                            </div>
                        <div className={Styles.eachSectionChart}><LineChart/></div>
                        <div className={Styles.viewDetailsContainer}><Link href="" className={Styles.viewDetails}>View details</Link></div>

                        {/* 4th chart */}


                    </div>
                    <div className={Styles.fourthChart}>
                    <div className={Styles.upHeader}>
                            <div>
                                <div className={Styles.chartName}>Chart 4</div>
                                <div className={Styles.description}>Description</div>
                            </div>
                            <div className={Styles.btnsContainer}>
                                <button className={Styles.underBtnsContainer}><Image src={Search}></Image></button>
                                <button className={Styles.underBtnsContainer}><Image src={Twoarrow}></Image></button>
                                <button className={Styles.underBtnsContainer}><Image src={Setting}></Image></button>
                                <button className={Styles.underBtnsContainer}><Image src={Dots}></Image></button>
                            </div>
                        </div>
                        <div className={Styles.eachSectionChart}><MultipleRings/></div>
                        <div className={Styles.viewDetailsContainer}><Link href="" className={Styles.viewDetails}>View details</Link></div>
                    </div>

                    {/* 5th chart */}


                    <div className={Styles.fifthChart}>
                    <div className={Styles.upHeader}>
                            <div>
                                <div className={Styles.chartName}>Chart 5</div>
                                <div className={Styles.description}>Description</div>
                            </div>
                            <button className={Styles.dotsBtn}><Image src={Dots}></Image></button>
                        </div>
                        <div className={Styles.tabs}>
                                <button onClick={()=>{setActive(4)}} className ={active === 4 ? Styles.active: Styles.thikcontainer}>7 days
                                
                                </button>
                                <button onClick={()=>{setActive(5)}} className ={active === 5 ? Styles.active: Styles.thikcontainer}>30 days
                                
                                </button>
                                <button onClick={()=>{setActive(6)}} className ={active === 6 ? Styles.active: Styles.thikcontainer}>60 days
                                
                                </button>
                            </div>
                        <div className={Styles.eachSectionChart}><DoughnutChart/></div>
                        <div className={Styles.viewDetailsContainer}><Link href="" className={Styles.viewDetails}>View details</Link></div>
                    </div>

                    {/* 6th chart */}


                    <div className={Styles.sixthChart}>
                    <div className={Styles.upHeader}>
                            <div>
                                <div className={Styles.chartName}>Chart 6</div>
                                <div className={Styles.description}>Description</div>
                            </div>
                            <button className={Styles.dotsBtn}><Image src={Dots}></Image></button>
                        </div>
                        <div className={Styles.tabs}>
                                <button onClick={()=>{setActive(7)}} className ={active === 7 ? Styles.active: Styles.thikcontainer}>7 days
                                
                                </button>
                                <button onClick={()=>{setActive(8)}} className ={active === 8 ? Styles.active: Styles.thikcontainer}>30 days
                                
                                </button>
                                <button onClick={()=>{setActive(9)}} className ={active === 9 ? Styles.active: Styles.thikcontainer}>60 days
                                
                                </button>
                            </div>
                        <div className={Styles.eachSectionChart}><GroupBarChart/></div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

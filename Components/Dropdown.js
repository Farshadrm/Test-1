'use client'

import { useState } from 'react';
import Styles from "../Styles/maincontent.module.css";
import Image from 'next/image';
import botarw from '../Images/botarw.svg'



export default function Dropdown(){
  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [openTitle, setOpenTitle] = useState(null);

  const titles = [
    { name: 'Option 1', submenus: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] },
    { name: 'Option 2', submenus: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] },
  ];

  const toggleGroup = () => setIsGroupOpen(!isGroupOpen);
  const toggleTitle = (title) => setOpenTitle(openTitle === title ? null : title);

  return (
    <div className={Styles.dropdownContainer}>
      <button onClick={toggleGroup} className={Styles.groupBtn}> <Image src={botarw}/>Group title</button>
      {isGroupOpen && (
        <div >
          {titles.map((title) => (
            <div key={title.name} >
              <div className={Styles.menu} onClick={() => toggleTitle(title.name)}><Image src={botarw}/>{title.name}</div>
              {openTitle === title.name && (
                <div style={{ paddingLeft: '20px' }}>
                  {title.submenus.map((submenu) => (
                    <div className={Styles.items} key={submenu}><Image src={botarw}/>{submenu}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};




// export default function Dropdown() {
    
//     const [openSubmenu1, setOpenSubmenu1] = useState(false);
//     const [openSubmenu2, setOpenSubmenu2] = useState(false);
  
    
//     const toggleSubmenu1 = () => {
//       setOpenSubmenu1(!openSubmenu1);
//       setOpenSubmenu2(false); 
//     };
  
//     const toggleSubmenu2 = () => {
//       setOpenSubmenu2(!openSubmenu2);
//       setOpenSubmenu1(false); 
//     };
  
//     return (
//       <>
//       <div className={Styles.container}>

      
//       <div className={Styles.dropdownContainer}>
//         <div className={Styles.group}>
//           <button className={Styles.groupButton}>Group title</button>
//           <ul className={Styles.menu}>
//             {/* Option  1 */}
//             <li onClick={toggleSubmenu1} className={Styles.menuItem}>
//               Option 1
//               {openSubmenu1 && (
//                 <ul className={Styles.submenu}>
//                   <li>item 1</li>
//                   <li>item 1</li>
//                   <li>item 1</li>
//                   <li>item 1</li>
//                 </ul>
//               )}
//             </li>
  
//             {/* Option 2 */}
//             <li onClick={toggleSubmenu2} className={Styles.menuItem}>
//               Option 2
//               {openSubmenu2 && (
//                 <ul className={Styles.submenu}>
//                   <li>item 2</li>
//                   <li>item 2</li>
//                   <li>item 2</li>
//                   <li>item 2</li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//       </div>
//       </>
//     );
//   }
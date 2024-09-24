import SideBar from "@/Components/SideBar";
import MainHeader from "@/Components/MainHeader";
import Header from "@/Components/Header";
import MainContent from "@/Components/MainContent";
import TopHeader from "@/Components/TopHeader";
export default function Home() {
    return (
        <>
        
        <body class="body">
            <div class='topHeader'>
                <TopHeader/>
            </div>

            
            
            
                <div class="containers">
                <div class='leftmenu'><SideBar /></div>
                <div class='maincontent'>
                        <MainHeader />
                        <Header />
                        <MainContent />
                    </div>
                    
                    
                </div>
            
            
            
        </body>
        </>
    );
}

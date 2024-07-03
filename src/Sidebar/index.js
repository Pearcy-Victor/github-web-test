import React from "react";
import SidebarIcon from "./icon";

const texts = "RORI IS A GAYFUCK";

const Sidebar = () => {
    return (
        <div>
            <div className="bg-gray-900 fixed flex flex-col w-20 top-0 left-0 h-screen"></div>
            <div className="fixed w-56 overflow-y-scroll h-screen no-scrollbar">
                <div className="top-0 left-0 absolute flex-col w-20 h-screen m-0 shadow-lg">
                    {texts.split("").map((e)=>{
                        return <SidebarIcon icon={e} key={e}/>
                    })}
                </div>
            </div>
        </div>
    )
};

export default Sidebar

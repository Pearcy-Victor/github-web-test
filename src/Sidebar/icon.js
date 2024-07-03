import React from "react";

const SidebarIcon = ({ icon, text = "Test Text", key }) => {
    return (
        <div className="relative overflow-visible">
            <div className="sidebar-icon peer" key={key}>
                {icon}
            </div>
            <div className="sidebar-dot flash-appear"></div>
            <span className="sidebar-text flash-appear justify-center items-center">
                {text}
                <div className="absolute h-2 w-2 rounded-full bg-black origin-right right-[69px] top-[14px]"></div>
            </span>
        </div>
    )
};

export default SidebarIcon

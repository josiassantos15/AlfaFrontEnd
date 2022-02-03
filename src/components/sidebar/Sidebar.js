import React from 'react'
import "../sidebar/sidebar.css";
import { SidebarData } from './SidebarData.js';

function Sidebar() {
    return (
        <div className="App">
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} 
                            className="row"
                            id={ window.location.pathname == val.link ? "active" : "" }
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
        </div>
    );
}

export default Sidebar;
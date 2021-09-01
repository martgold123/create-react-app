import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">

                <Link to="/" className="link">
                <div className="topLeft">
                    <span className="logo">VietAdmin</span>
                </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    
                    </div>
                    <img src="https://images.unsplash.com/photo-1630183476656-0f87b7e49565?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
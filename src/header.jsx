import React, { } from 'react';
import './App.css';
import defaultImage from './default-avatar.png';
import './header.css'
const Header = function () {
    return (
        <div className="headerContainer">
            <div>
                <div className="container">
                    <img src={defaultImage} width='100px' alt="Default"

                        height='100px'
                    />
                    <nav>
                        <ul>
                            <li>
                                Sukesh Hublikar
                </li>
                            <li>
                                25
                </li>
                            <li>
                                sukeshhublikar2015@gmail.com
                </li>
                            <li>
                                9036038675
                </li>
                        </ul>
                    </nav>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

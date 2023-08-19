import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import logo from '../assets/LOGO.svg'
import arrow from '../assets/keyboard_arrow_down.svg'

import '../css/header.css'
import TopicList from './Topiclist'

function Header_1() {

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const topicList = document.getElementById('topic-list');
            const exploreButton = document.querySelector('.dropdown');

            if (topicList && exploreButton) {
                if (
                    visible &&
                    !topicList.contains(event.target as Node) &&
                    !exploreButton.contains(event.target as Node)
                ) {
                    setVisible(false);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [visible]);

    const handleExploreClick = () => {
        setVisible(!visible);
    };

    return (
        <>
            <header>
                <div className="int-home">
                    <Link to={"/home"}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="dropdown"
                        aria-expanded={visible}
                        onClick={handleExploreClick}>
                        <button
                            aria-controls="topic-list"
                            aria-expanded="false"
                        >Explore
                        </button>
                        <img src={arrow} alt="" />
                        <div id="topic-list" data-visible={visible}>
                            <TopicList />
                        </div>
                    </div>
                </div>
                <div className="login-btn">
                    <Link className='register-btn' to={"/register"}>Register</Link>
                    <Link
                        to={"/login"}>Log in</Link>
                </div>
            </header>
        </>
    )
}

export default Header_1
import React, { useState } from 'react'
// import { a } from 'react-router-dom';







export default function Header() {

    const [dm, setdm] = useState(false)
    // function dropmenu() {
    //     document.getElementById('mobile-menu-button').addEventListener
    //     document.getElementById('mobile-menu').classList.toggle('hidden');
    // };

    function toggleDarkMode() {
        // Get the <html> element
        var htmlElement = document.querySelector('html');
        // Toggle the 'dark-mode' class on the <html> element
        htmlElement.classList.toggle('dark');
        if(htmlElement.classList.contains('dark')){
            setdm(true)
        }
        // Toggle between moon and day icons
        // var moonIcon = document.getElementById('moonIcon');
        // if (htmlElement.classList.contains('dark')) {
        //     // If in dark mode, switch href day icon
        //     moonIcon.classList.remove('bi-moon-stars-fill');
        //     moonIcon.classList.add('bi-brightness-high-fill');
        // } else {
        //     // If in light mode, switch href moon icon
        //     moonIcon.classList.remove('bi-brightness-high-fill');
        //     moonIcon.classList.add("bi-moon-stars-fill");
        // }
    }

    function drop() {
        const menu = document.getElementById("mmenu")
        menu.classList.toggle("none")
    }

    // <button onClick={toggleDarkMode} id='moonicon' className='text-accent h-10 w-10'><i class="bi bi-brightness-high-fill"></i></button>

    // function setdms(){

    // }

    return (
        <div className='mt-2'>
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        <h1 className='text-text'>Logo</h1>
                    </a>
                </div>
                <div className="theme">
                    <button onClick={toggleDarkMode} className='text-text rounded-md h-10 w-10'>
                        {/* <i id='moonIcon' class="bi bi-moon-stars-fill"></i> */}
                        {dm ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-moon-fill"></i>}
                    </button>
                </div>
                <div className="navlink">
                    <div>
                        <a href="/">
                            <h2 className='text-text'>home</h2>
                        </a>
                    </div>
                    <div>
                        <a href="#service">
                            <h2 className='text-text'>service</h2>
                        </a>
                    </div>
                    <div>
                        <a href="#about">
                            <h2 className='text-text'>about</h2>
                        </a>
                    </div>
                    <div>
                        <a href="#contact">
                            <h2 className='text-text'>contact</h2>
                        </a>
                    </div>
                </div>
                <div className="menbtn">
                    <button id='menuicon' onClick={drop}>
                        <h1 className='text-text'>menu</h1>
                    </button>
                </div>
                <div id='mmenu' onClick={drop} className="h-full none text-center absolute left-0 bg-background w-full gap-4 flex flex-col">
                    <div>
                        <a href="/">
                            <h2 className='text-text m-1'>home</h2>
                        </a>
                    </div>
                    <div>
                        <a href="#service">
                            <h2 className='text-text m-1'>service</h2>
                        </a>
                    </div>
                    <div>
                        <a href="#about">
                            <h2 className='text-text m-1'>about</h2>
                        </a>
                    </div>
                    <div>
                        <a href="#contact">
                            <h2 className='text-text m-1'>contact</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

'use client'
import React, { useEffect, useState, useRef } from 'react';
import Dropdown from './DropDown';
import "../style.css";
import Link from 'next/link';

const Menu = () : React.JSX.Element => {
    const options = ["Simulate DFA", "DFA to NFA", "NFA to DFA"];
    const links = ["/simDFA/", "/DFAtoNFA/", "/NFAtoDFA/"];
    const [showDropDown, setShowDropDown] = useState(false)
    const [selectOption, setSelectOption] = useState<string>("");

    const menuRef = useRef<any>(null);

    const toggleDropDown = ():void => {
        setShowDropDown(!showDropDown);
    }

    const optionSelect = (option:string) => {
        setSelectOption(option);
    }

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                 console.log("click registered");
                    setShowDropDown(false);
            }
        })

    }, []);

    return(
        <div id="button">
            <p>
                You have selected {selectOption};
            </p>
            <button id="selections" onClick={():void => {toggleDropDown()}} ref={menuRef}>
                <div>
                    {selectOption ? "Select " + selectOption : "Select..."}
                </div>
                {showDropDown && 
                    (<Dropdown options={options} showDropDown={showDropDown} toggleDropDown={toggleDropDown} optionSelection={optionSelect} links={links}/>)
                }
            </button>
        </div>
    )
}

export default Menu;
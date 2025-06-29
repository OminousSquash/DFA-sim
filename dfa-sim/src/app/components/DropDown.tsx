'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type DropDownProps = {
  options: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
  links: string[]
};


const Dropdown = ({ options, showDropDown,  optionSelection, links } : DropDownProps) : React.JSX.Element => {

    const onClickHander = (option:string) => {
        optionSelection(option);
    }

    return (
        <div className={showDropDown ? 'dropdown-active' : 'dropdown'}>
            {
                options.map((option:string, idx: number): React.JSX.Element => {
                    return (
                        <li id={ option } key={ idx }>
                            <Link href={links[idx]}>
                                { option }
                            </Link>
                        </li>
                    )
                })
            }
        </div>
    );
}

export default Dropdown;
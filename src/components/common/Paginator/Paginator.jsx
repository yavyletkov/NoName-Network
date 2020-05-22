import s from "./Paginator.module.css";
import React, {useState} from "react";
import Select from 'react-select'
import {NavLink} from "react-router-dom";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageClick, urlPrefix}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push({value: i, label: i});
    }

    let [betterType, setBetterType] = useState(false)

    let activateBetterType = () => {
        setBetterType(true)
    }

    let disactivateBetterType = () => {
        setBetterType(false)
    }

    return (
        <div>

            <button className={s.btn} onClick={betterType?disactivateBetterType:activateBetterType}>{betterType?'Show pages in LINE':'Show pages in LIST'}</button>

            {betterType ?
                <div className={s.selectField}>
                    <Select options={pages} onSelect={(item) => onPageClick(item.value)} />
                </div>
                :
                <div className={s.paginator}>
                    {pages.map(item => {
                        return <NavLink to={`/${urlPrefix}/${item.value}`}><span key={item.value} onClick={() => onPageClick(item.value)}
                                     className={+currentPage === item.value ? s.activePage : s.page}> {item.value} </span>
                        </NavLink>
                    })}
                </div>
            }

        </div>
    )
};

export default Paginator
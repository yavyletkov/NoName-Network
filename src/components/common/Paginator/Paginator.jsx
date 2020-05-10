import s from "./Paginator.module.css";
import React from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageClick}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.paginator}>
            {pages.map(item => {
                return <span key={item} onClick={() => onPageClick(item)}
                             className={currentPage === item ? s.activePage : s.page}> {item} </span>
            })}
        </div>
    )
};

export default Paginator
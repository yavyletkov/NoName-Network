import React, {useState} from "react";
import * as classnames from "classnames";
import {NavLink} from "react-router-dom";

const Pagination = ({totalItemsCount, pageSize, currentPage = 1, portionSize = 10, onPageChange, urlPrefix}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let firstPageInPortion = (portionNumber - 1) * portionSize + 1;
    let lastPageInPortion = portionNumber * portionSize;


    return (
        <nav>
            <ul className='pagination justify-content-center mt-3' >
                {portionNumber > 1 && <li className='page-item' onClick={() => setPortionNumber(portionNumber - 1)}>
                    <span className='page-link'>PREV</span>
                </li>}

                {pages
                    .filter(page => {
                        return page >= firstPageInPortion && page <= lastPageInPortion
                    })
                    .map(page => {
                        let liClassName = classnames('page-item', {'active': +page === currentPage});
                        return <li className={liClassName} key={page}>
                            <NavLink to={`/${urlPrefix}/${page}`} className='page-link' onClick={() => onPageChange(page)}>{page}</NavLink>
                        </li>
                    })}

                {portionNumber < portionsCount && <li className='page-item' onClick={() => setPortionNumber(portionNumber + 1)}>
                    <span className='page-link'>NEXT</span>
                </li>}
            </ul>
        </nav>
    )

}

export default Pagination
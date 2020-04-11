import React from 'react';

const Pagination = (props) => {
    if (props.adsCount === 0) return (<React.Fragment />);

    // We calculate the number of pages (according to the number of ads sent by the API and the number of ads displayed on a page) and round to superior integer if necessary
    const pagesCount = Math.ceil(props.adsCount / props.size);
    // We calculate the page we're on
    const currentPage = (props.pagination / props.size) + 1;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // by default, adsSecoundCount = Number of elements x Page Number (eg: page 5 is 100 if there are 20 elements by page)
    let adsSecondCount = Number(props.pagination) + Number(props.size);

    // if we're on he last page, the adsSecondCount may be higher than the total number of ads
    // in that case we cap it to the total number of ads
    if (adsSecondCount > props.adsCount) {
        adsSecondCount = props.adsCount;
    }

    // if we're on the first page, the adsSecondCount may be lower than twenty as we base our calculus on an outdated array (from the previous page, because we have triggered a component reload but haven't yet fetched the data from the new page)
    // we wan't to make sure that the total number of ads is not lower than 20 (or it is equals to the total number of ads)
    if (adsSecondCount < 20 && props.adsCount >= 20) {
        adsSecondCount = 20;
    }

    return (
        <div>
            <p>Annonces
                <span className="ads-number"> {Number(props.pagination) + 1} </span>
                à
                <span className="ads-number"> {adsSecondCount} </span>
                sur
                <span className="ads-number"> {props.adsCount} </span>
            </p>
            <div className="pagination-btns">
                {pages.map((page => {
                    let classNameState = 'page-number';

                    if (page === currentPage) {
                        classNameState = 'page-number clicked-display';
                    }

                    return (
                        <button type="button" className={classNameState} key={page} value={page * props.size - props.size} onClick={(e) => (props.setPagination(e.target.value))}>
                            {page}
                        </button>
                    );
                }))}
            </div>
        </div>
    );
};

export default Pagination;

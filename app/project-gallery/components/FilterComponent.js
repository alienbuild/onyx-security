"use client"

import {Button} from "@nextui-org/react";

const FilterComponent = ({ filter, setFilter }) => {

    const buttonStyle = "onyx-heading"; // common style for all buttons

    return (
        <div className="flex justify-center gap-4 my-6">
            <Button auto color={filter === 'all' ? "danger" : "default"} className={buttonStyle} onClick={() => setFilter('all')}>
                All
            </Button>
            <Button auto color={filter === 'commercial' ? "danger" : "default"} className={buttonStyle} onClick={() => setFilter('commercial')}>
                Commercial
            </Button>
            <Button auto color={filter === 'domestic' ? "danger" : "default"} className={buttonStyle} onClick={() => setFilter('domestic')}>
                Domestic
            </Button>
        </div>
    );
};


export default FilterComponent
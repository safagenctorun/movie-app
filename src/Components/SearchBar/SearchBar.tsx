import React, { useState } from "react";
import "./SearchBar.scss"
import { AutoComplete, Input } from 'antd';

const SearchBar = ({ setSearchItem, searchItemsData }: any) => {

    const optionsGenerator = () => {
        let options: any = [];
        searchItemsData.forEach((item: any) => {
            options.push({ value: item.title, key: item.id });
            // console.log(item.title);

        });

        return options;
    };
    return (
        <div className="serach-bar">
            <Input.Group compact className="safa">
                <AutoComplete

                    className="search-bar-input"
                    onSelect={(text) => console.log(text)}
                    onChange={(text) => setSearchItem(text)}
                    style={{ width: "25%" , }}
                    options={optionsGenerator()}
                    placeholder="ara"
                />
            </Input.Group>

            {/* <select></select> */}
        </div>
    );
};

export default SearchBar;

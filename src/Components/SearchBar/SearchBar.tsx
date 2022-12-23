import React, { useState, useContext } from "react";
import "./SearchBar.scss"
import { AutoComplete, Input } from 'antd';
import { MOVIE_URL, API_KEY } from "../../config/Urls";
// import { Context } from "../../context/GlobalContext";


const SearchBar = ({ setSearchItem, searchItemsData }: any) => {

    // const {setSelectedMovieProperties} = useContext(Context)

    const changePage = (value: string, properties: any) => {
        window.location.replace(`/moviedetail/${properties.key}`)
    }

    const optionsGenerator = () => {
        let options: any = [];
        searchItemsData.forEach((item: any) => {
            options.push({ value: item.title, key: item.id, /*name: item */ });
        });

        return options;
    };


    return (
        <div className="search-bar">
            <div className="search-margin">

                <Input.Group compact className="general-search">
                    <AutoComplete

                        className="search-bar-input"
                        onSelect={changePage}
                        onChange={(text) => setSearchItem(text)}
                        style={{ width: "25%", }}
                        options={optionsGenerator()}
                        placeholder="search"
                    />
                </Input.Group>
            </div>
        </div>
    );
};

export default SearchBar;

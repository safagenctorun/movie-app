import React, { useState, useContext } from "react";
import "./SearchBar.scss"
import { AutoComplete, Input } from 'antd';
import { MOVIE_URL, API_KEY } from "../../config/Urls";
import { Context } from "../../context/GlobalContext";


const SearchBar = ({ setSearchItem, searchItemsData }: any) => {
    
    const {setSelectedMovieProperties} = useContext(Context)

    const select = (value:string, properties:any) => {
        setSelectedMovieProperties(properties)
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
            <Input.Group compact className="general-search">
                <AutoComplete

                    className="search-bar-input"
                    onSelect={select}
                    onChange={(text) => setSearchItem(text)}
                    style={{ width: "25%", }}
                    options={optionsGenerator()}
                    placeholder="search"
                />
            </Input.Group>

            {/* <select></select> */}
        </div>
    );
};

export default SearchBar;

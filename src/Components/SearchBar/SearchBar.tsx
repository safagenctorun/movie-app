import React from "react";
import "./SearchBar.scss"
import { AutoComplete } from 'antd';
import { MoviesOutput, SearchItemsOutput } from "../../Models";


const SearchBar = ({ setSearchItem, searchItemsData }: any) => {

    const changePage = (value: string, properties: SearchItemsOutput) => {

        window.location.replace(`/moviedetail/${properties.key}`)
    }

    const optionsGenerator = () => {
        let options: any = [];
        searchItemsData.forEach((item: MoviesOutput) => {
            options.push({ value: item.title, key: item.id,  popularity: item.popularity });
        });
        options.sort((a:any,b:any) => b.popularity - a.popularity);
        
        return options;
    };

    return (
        <div className="search-bar">

            <AutoComplete
                onSelect={changePage}
                onChange={(text) => setSearchItem(text)}
                options={optionsGenerator()}
            >
                <input
                    placeholder="search"
                    type="text"
                    className="search-bar-input"
                />
            </AutoComplete>

        </div>

    );
};

export default SearchBar;

import React, { useContext } from "react";
import "./SearchBar.scss"
import { AutoComplete } from 'antd';

// import { Context } from "../../context/GlobalContext";


const SearchBar = ({ setSearchItem, searchItemsData }: any) => {

    // const {setSelectedMovieProperties} = useContext(Context)

    const changePage = (value: string, properties: any) => {
        window.location.replace(`/moviedetail/${properties.key}`)
    }

    const optionsGenerator = () => {
        let options: any = [];
        searchItemsData.forEach((item: any) => {
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

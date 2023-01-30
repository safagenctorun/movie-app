import React, {useState} from "react";
import "./SearchBar.scss"
import { AutoComplete, Button } from 'antd';
import { MoviesOutput, SearchItemsOutput } from "../../Models";

interface Props{
    searchItem: string
    setSearchItem: React.Dispatch<React.SetStateAction<string>>
    searchItemsData: MoviesOutput[]
}


const SearchBar = ({ setSearchItem, searchItemsData, searchItem }: Props) => {

    const [isSearchItemEmpty, setIsSearchItemEmpty] = useState <boolean>(true)


    const changePage = (value: string, properties: SearchItemsOutput) => {

        window.location.replace(`/moviedetail/${properties.key}`)
    }

    const optionsGenerator = () => {
        let options: any = [];
        searchItemsData.forEach((item: MoviesOutput) => {
            options.push({ value: item.title, key: item.id,  popularity: item.popularity });
        });
        options.sort((a:MoviesOutput,b:MoviesOutput) => b.popularity - a.popularity);
        
        return options;
    };

    const searchItemHandler = (text:string) => {
        setSearchItem(text)

        text 
        ?
        setIsSearchItemEmpty(false) 
        : 
        setIsSearchItemEmpty(true)
    }

    const changePageToFilterPage = () => {
        window.location.replace(`/moviefilter/${searchItem}`)
    }

    return (
        <div className="search-bar">

            <AutoComplete
                onSelect={changePage}
                onChange={(text) => searchItemHandler(text)}
                options={optionsGenerator()}
            >
                <input
                    placeholder="search"
                    type="text"
                    className="search-bar-input"
                />
            </AutoComplete>

            <Button onClick={changePageToFilterPage} style={{display: isSearchItemEmpty === true ? "none" : "block"}}> Search </Button>

        </div>

    );
};

export default SearchBar;

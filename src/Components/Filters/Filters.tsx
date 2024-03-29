import React from 'react'
import "./Filters.scss";
import { Checkbox, Collapse, DatePicker, Slider, DatePickerProps, Space } from 'antd';
import { Genre } from '../../Models';

interface Props{
    genres: Genre[]
    setSelectedGenres: React.Dispatch<React.SetStateAction<number[]>>
    selectedGenres: any
    setVoteCountValue: React.Dispatch<React.SetStateAction<number | null>>
    setRuntimeValue: any 
    setIncludeAdult: React.Dispatch<React.SetStateAction<number[]>>
    setStartReleaseDate :  React.Dispatch<React.SetStateAction<string>>
    setEndReleaseDate : React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({ genres, setSelectedGenres, selectedGenres, setVoteCountValue, setRuntimeValue, setIncludeAdult, setStartReleaseDate, setEndReleaseDate }: Props) => {

    const startDateHandler: DatePickerProps['onChange'] = (date, dateString:string) => {
        setStartReleaseDate(dateString )
    };
    const endDateHandler: DatePickerProps['onChange'] = (date, dateString:string) => {
        setEndReleaseDate(dateString)
    };

    const genresHandler = (key: number) => {
             
        if (!selectedGenres.includes(key))
            setSelectedGenres([...selectedGenres, key])
        else
            setSelectedGenres(selectedGenres.filter((fil: number) => fil !== key));
    }

    const voteCountHandler = (newValue: number) => {
        setVoteCountValue(newValue);
    };

    const runtimeHandler = (value: number | [number, number]) => {
        setRuntimeValue(value)
    };

    return (
        <div>
            <Collapse style={{ width: "250px", backgroundColor: "white" }}>
                <Collapse.Panel header="Filters" key="1">

                    <Collapse style={{ width: "245px", backgroundColor: "white" }}>
                        <Collapse.Panel header="Release Dates" key="2">
                            <Space direction="vertical">
                                <DatePicker  placeholder='from' style={{ display: "flex", justifyContent: "center" }} onChange={startDateHandler} />
                                <DatePicker  placeholder='to' style={{ display: "flex", justifyContent: "center" }} onChange={ endDateHandler} />
                            </Space>
                        </Collapse.Panel>
                    </Collapse>

                    <Collapse style={{ width: "245px", backgroundColor: "white" }}>
                        <Collapse.Panel header="Genres" key="3">

                            <div className="genres">
                                {genres.map((genre: Genre) => (

                                    <span style={{ backgroundColor: selectedGenres.includes(genre.id) && "#1b79b8", color: selectedGenres.includes(genre.id) && "#fff" }} onClick={e => genresHandler(genre.id)} key={genre.id}>
                                        {genre.name}
                                    </span>                                   
                                ))}
                            </div>

                        </Collapse.Panel>
                    </Collapse>
                    <Collapse style={{ width: "245px", backgroundColor: "white" }}>
                        <Collapse.Panel header="Minimum User Votes" key="4">
                            <Slider
                                min={0}
                                max={500}
                                onChange={voteCountHandler}
                                marks={{ 0: 0, 100: 100, 200: 200, 300: 300, 400: 400, 500: 500, }}
                            />
                        </Collapse.Panel>
                    </Collapse>
                    <Collapse style={{ width: "245px", backgroundColor: "white" }}>
                        <Collapse.Panel header="Runtime" key="5">
                            <Slider
                                range
                                min={0}
                                max={400}
                                defaultValue={[200, 200]}
                                marks={{ 0: 0, 100: 100, 200: 200, 300: 300, 400: 400, }}
                                onAfterChange={runtimeHandler}
                            />
                        </Collapse.Panel>
                    </Collapse>
                    <Checkbox style={{ padding: "10px" }} onChange={e => setIncludeAdult((e.target as any ).checked)}> Include Adult </Checkbox>
                </Collapse.Panel>
            </Collapse>
        </div>
    )
}

export default Filter

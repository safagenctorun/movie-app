import React from 'react'
import "./Sort.scss";
import { Collapse,Select } from 'antd';

const Sort = ({ setSortData }: any) => {
    return (
        <div>
            <Collapse style={{ width: "250px", backgroundColor: "white", marginBottom: "15px", marginTop: "15px" }} >
                <Collapse.Panel header="Sort" key="1">
                    <Select
                        placeholder="Sort"
                        style={{  display:"flex", justifyContent:"center", margin: "1rem" }}
                        onChange={value=>setSortData(value)}
                        options={[
                            { value: 'popularity.desc', label: 'Popularity Descending' },
                            { value: 'popularity.asc', label: 'Popularity Ascending' },
                            { value: 'vote_average.desc', label: 'Rating Descending' },
                            { value: 'vote_average.asc', label: 'Rating Ascending' },
                            { value: 'primary_release_date.desc', label: 'Release Date Descending' },
                            { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
                            { value: 'title.asc', label: 'Title (A-Z)' },
                            { value: 'title.desc', label: 'Title (Z-A)' }
                            
                        ]}
                    />
                </Collapse.Panel>
            </Collapse>
        </div>
    )
}

export default Sort
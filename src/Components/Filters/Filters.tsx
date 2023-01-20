import React from 'react'
import "./Filters.scss";
import { Collapse } from 'antd';

const Filter = () => {
    return (
        <div>
            <Collapse onChange={e => console.log(e)}>
                <Collapse.Panel header="Filters" key="1">
                    This is panel header 1"
                </Collapse.Panel>
            </Collapse>
        </div>
    )
}

export default Filter
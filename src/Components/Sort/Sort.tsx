import React from 'react';
import './Sort.scss';
import { Collapse, Select } from 'antd';

const Sort = ({ setSortData }: any) => {
  return (
    <div>
      <Collapse
        style={{
          width: '250px',
          backgroundColor: 'white',
          marginBottom: '15px',
          marginTop: '15px',
        }}
      >
        <Collapse.Panel header="Sort" key="1">
          <Select
            placeholder="Sort"
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '1rem',
            }}
            onChange={(value) => setSortData(value)}
            options={[
              { value: 'popularity.desc', label: 'Most Popular' },
              { value: 'popularity.asc', label: 'Least Popular' },
              { value: 'vote_average.desc', label: 'Highest Rated' },
              { value: 'vote_average.asc', label: 'Lowest Rated' },
              {
                value: 'primary_release_date.desc',
                label: 'Newest Releases',
              },
              {
                value: 'primary_release_date.asc',
                label: 'Oldest Releases',
              },
              { value: 'title.asc', label: 'Title (A to Z)' },
              { value: 'title.desc', label: 'Title (Z to A)' },
            ]}
          />
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default Sort;

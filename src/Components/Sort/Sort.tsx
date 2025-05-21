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
        <Collapse.Panel header="Sırala" key="1">
          <Select
            placeholder="Sırala"
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '1rem',
            }}
            onChange={(value) => setSortData(value)}
            options={[
              { value: 'popularity.desc', label: 'En Popüler' },
              { value: 'popularity.asc', label: 'En Az Popüler' },
              { value: 'vote_average.desc', label: 'En Yüksek Puanlı' },
              { value: 'vote_average.asc', label: 'En Düşük Puanlı' },
              {
                value: 'primary_release_date.desc',
                label: 'En Yeni Çıkışlar',
              },
              {
                value: 'primary_release_date.asc',
                label: 'En Eski Çıkışlar',
              },
              { value: 'title.asc', label: "Başlık (A'dan Z'ye)" },
              { value: 'title.desc', label: "Başlık (Z'den A'ya)" },
            ]}
          />
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default Sort;

import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


export function HomeSearchBar() {
   

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

// const onSearch = value => console.log(value);

return (



  <Space direction="vertical">
    <Search
      placeholder="Where would you like to go?"
      allowClear
      enterButton="Search"
      size="large"
      style={{
          width: '800px'
      }}
    //   onSearch={onSearch}
    />
  </Space>

);
}

export default HomeSearchBar;
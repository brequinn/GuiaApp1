import { Input, Space, Dropdown, Button, Menu } from 'antd';
import { AudioOutlined, DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


export function HomeSearchBar() {

  const history = useHistory();
  const clickResult = () => history.push('/searchResults');
const { Search } = Input;
const menu = (
  <Menu>
    {/* <Menu.Item>
      <a href="javascript:void(0)">Edit</a>
    </Menu.Item> */}
    <Menu.Item>
      <a href="javascript:void(0)">
        New York City
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">
        London  
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">
        Berlin
      </a>
    </Menu.Item>
  </Menu>
);

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

  <Space style={{marginLeft: 100}} direction="vertical" >
    <Dropdown overlay={menu} >
      <Button>
    Where are you traveling to? <DownOutlined />
      </Button>
    </Dropdown>
  </Space>

);
}

export default HomeSearchBar;
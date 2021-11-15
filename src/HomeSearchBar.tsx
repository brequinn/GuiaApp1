import { Input, Space, Dropdown, Button, Menu, Select } from 'antd';
import { AudioOutlined, DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


export function HomeSearchBar() {

const history = useHistory();
const clickResult = () => history.push('/searchResults');
const { Search } = Input;
const [tripLocation, settripLocation] = useState<any>([]);
const [tripTimeline, settripTimeline] = useState<any>([]);

function printstateValue() {
  console.log("Trip location is " + tripLocation)
}

useEffect(() => {
}, );

const { Option } = Select;

function onChange(value: any) {
  console.log(`selected ${value}`);
  settripLocation({value});
  console.log("Trip location is " + tripLocation)
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val: any) {
  console.log('search:', val);
}

return (

  <Space style={{marginLeft: 100}} direction="vertical" >
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Where are you traveling to?"
    optionFilterProp="locations"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
  >
    <Option value="New York City">New York City</Option>
    {/* <Option value="Berlin">Berlin</Option>
    <Option value="Tom">London</Option> */}
  </Select>
  </Space>

);
}

export default HomeSearchBar;
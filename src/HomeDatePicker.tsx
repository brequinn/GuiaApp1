import { DatePicker, Space } from 'antd';
import moment from 'moment';



export function HomeDatePicker() {
    const { RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const weekFormat = 'MM/DD';
    const monthFormat = 'YYYY/MM';
    
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    
    // const customFormat = value  => `custom format: ${value.format(dateFormat)}`;
    
    // const customWeekStartEndFormat = value =>
    //   `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
    //     .endOf('week')
    //     .format(weekFormat)}`;import React from 'react';
    
  

return (
<>
<div style={{marginTop: 20, marginLeft: 100}}>
<RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
      </div>




</>
 
);

}

export default HomeDatePicker;
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Dx from './Dx'
import Rx from './Rx'

class App extends Component {
  render() {
    return (
      <div style={{margin:20}}>
        <h1>example:เปรียบเทียบระหว่าง local state กับ store state</h1>
        <div style={{backgroundColor:'skyblue',padding:'3px'}}>
          <p>นาย xxxxx  นามสกุล xxxxx อายุ x ปี x เดือน x วัน</p>
         
        </div>
        <br/>
        <Tabs defaultIndex={0} onSelect={index => console.log("tab index",index)}>
          <TabList>
            <Tab>วินิจฉัย</Tab>
            <Tab>ยา</Tab>   
            <Tab>ค่าใช้จ่าย</Tab>     
          </TabList>    
          <TabPanel>
            <Dx/>
          </TabPanel>
          <TabPanel>
              <Rx/>       
          </TabPanel>
          <TabPanel>
            <p>แท็บสรุปรายการค่าใช้จ่าย</p>   
          </TabPanel>
        </Tabs>        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { Tabs } from 'antd';
import Table1 from './MonthTable'
import Table2 from './DateTable'
import Table3 from './MonthAllLan'
import Table4 from './DateAllTable'

const TabPane = Tabs.TabPane;
let render = '';

export default class TABS extends Component {
  render() {
    const { obj, language, response, tab } = this.props
    if (tab) {
      render = (
        <div>
          <Tabs defaultActiveKey="1" onChange={this.props.callback}>
            <TabPane tab="Month View" key="1">
              <Table1
                obj={obj}
                language={language}
              />
            </TabPane>
            <TabPane tab="Date View" key="2">
              <Table2
                obj={response}
                language={language}
              />
            </TabPane>
          </Tabs>
        </div>
      )
    } else {
      // console.log(obj);
      render = (
        <div>
          <Tabs defaultActiveKey="1" onChange={this.props.callback}>
            <TabPane tab="Month View" key="1">
              <Table3
                obj={obj}
                language={language}
              />
            </TabPane>
            <TabPane tab="Date View" key="2">
              <Table4
                obj={response}
                language={language}
              />
            </TabPane>
          </Tabs>
        </div>
      )
    }
    return (
      <div className="container">
        {render}
      </div>
    )
  }
}

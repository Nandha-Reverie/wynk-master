import React, { Component } from 'react'
import uuid from 'uuid/v1';
import { Table } from 'antd';
import moment from "moment";

export default class Table2 extends Component {
    render() {
        let { obj, language } = this.props
        const columns = [{
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
        }, {
            title: 'Month/Date',
            dataIndex: 'month',
            key: 'month',
            sorter: (a, b) => moment(a.month).format('X') - moment(b.month).format('X')
        }, {
            title: 'Moderated',
            dataIndex: 'moderated',
            key: 'moderated'
        }, {
            title: 'InProgress',
            dataIndex: 'inprogress',
            key: 'inprogress'
        }];
        let dataSource = [];
        for (const key in obj[language]) {
            if (obj[language].hasOwnProperty(key)) {
                let temp = {}
                temp.key = uuid()
                temp.language = language
                temp.inprogress = obj[language][key].inprogress ? obj[language][key].inprogress : 0
                temp.moderated = obj[language][key].moderated ? obj[language][key].moderated : 0
                temp.month = key
                dataSource.push(temp);

            }
        }
        return (
            <div className="container">
                {dataSource.length <= 0 ? '' : <Table dataSource={dataSource} columns={columns}
                    pagination={{ pageSize: 30 }}
                />}
            </div>
        )
    }
}

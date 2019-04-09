import React, { Component } from 'react'
import uuid from 'uuid/v1';
import { Table } from 'antd';
import moment from 'moment';

export default class Table4 extends Component {
    render() {
        let { obj, language } = this.props
        const columns = [{
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
            sorter: (a, b) => a.language.charCodeAt(0) - b.language.charCodeAt(0)
        }, {
            title: 'Month/Date',
            dataIndex: 'month',
            key: 'month',
            sorter: (a, b) => moment(a.month).format('X') - moment(b.month).format('X')
        }, {
            title: 'Total',
            dataIndex: 'total',
            key: 'total'
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

        for (let i = 0; i < language.length; i++) {
            for (const key in obj[language[i]]) {
                if (obj[language[i]].hasOwnProperty(key)) {
                    let temp = {}
                    temp.key = uuid()
                    temp.language = language[i]
                    temp.inprogress = obj[language[i]][key].inprogress ? obj[language[i]][key].inprogress : 0
                    temp.moderated = obj[language[i]][key].moderated ? obj[language[i]][key].moderated : 0
                    temp.total = temp.inprogress + temp.moderated
                    temp.month = key
                    dataSource.push(temp);

                }
            }
        }

        return (
            <div className="container">
                {dataSource.length <= 0 ? '' : <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 30 }} />}
            </div>
        )
    }
}

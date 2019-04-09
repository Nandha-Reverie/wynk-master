import React, { Component } from 'react'
import uuid from 'uuid/v1';
import moment from 'moment';
import { Table } from 'antd';
import { totalmem } from 'os';

export default class Table3 extends Component {
    render() {
        let { obj, language } = this.props
        const columns = [{
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
            sorter: (a, b) => a.language.charCodeAt(0) - b.language.charCodeAt(0)
        }, {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        }, {
            title: 'Month/Date',
            dataIndex: 'month',
            key: 'month',
            sorter: (a, b) => moment().month(a.month) - moment().month(b.month)
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
        //new logic
        for (const k1 in obj['allLan']) {
            if (obj['allLan'].hasOwnProperty(k1)) {
                for (const k2 in obj['allLan'][k1]) {
                    let temp = {}
                    if (obj['allLan'][k1].hasOwnProperty(k2)) {
                        temp.language = 'All Language'
                        temp.key = uuid()
                        temp.month = k2
                        temp.year = k1
                        temp.moderated = obj['allLan'][k1][k2].mod
                        temp.inprogress = obj['allLan'][k1][k2].in
                        temp.total = temp.moderated + temp.inprogress
                        dataSource.push(temp)
                    }
                }

            }
        }


        //old logic

        // for (const k in obj) {
        //     if (obj.hasOwnProperty(k)) {
        //         for (const k1 in obj[k]) {
        //             if (obj[k].hasOwnProperty(k1)) {
        //                 for (const k2 in obj[k][k1]) {
        //                     let temp1 = {}
        //                     if (obj[k][k1].hasOwnProperty(k2)) {
        //                         temp1.key = uuid()
        //                         temp1.month = k2
        //                         temp1.moderated = obj[k][k1][k2].mod
        //                         temp1.inprogress = obj[k][k1][k2].in
        //                         temp1.total = temp1.moderated + temp1.inprogress
        //                         temp1.language = k
        //                         temp1.year = k1
        //                         dataSource.push(temp1)
        //                     }
        //                 }
        //             }
        //         }

        //     }
        // }

        return (
            <div className='container'>
                {dataSource.length <= 0 ? '' : <Table dataSource={dataSource} columns={columns}
                    pagination={{ pageSize: 20 }}
                />}
            </div>
        )
    }
}

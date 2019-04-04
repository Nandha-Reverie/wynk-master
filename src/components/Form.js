import React, { Component } from 'react'
import { DatePicker, Select, Button, Form, Row, Col } from "antd";
import TABS from './TABS'
import operation from '../utils/operation';
import allLan from '../utils/allLan'
import axios from 'axios'

const { Option } = Select;
let response = ''
let allLan1 = ['hindi', 'tamil', 'telugu', 'kannada', 'marathi', 'malayalam']
export default class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: '',
            startDate: '',
            endDate: '',
            data: '',
            response: ''
        }
    }
    componentDidMount = () => {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    handleChange = (language) => {
        this.setState({ language })
    }

    onChange1 = (date, dateString) => {
        this.setState({ startDate: dateString })
    }

    onChange2 = (date, dateString) => {
        this.setState({ endDate: dateString })
    }

    handleSubmit = (e) => {
        const { language, startDate, endDate } = this.state
        let data = '', data1 = ''

        e.preventDefault();


        axios.post('https://api-gw.revup.reverieinc.com/apiman-gateway/Wynk/stats/1.0', {
            "languages": typeof language == 'string' ? [language] : [...language],
            "startDate": startDate,
            "endDate": endDate
        })
            .then(res => {
                console.log(res.data.perLangPerDayStat);
                response = res.data.perLangPerDayStat;
                this.setState({ response })

                if (typeof language == 'string') {
                    data = operation(response, startDate, endDate, language);
                    this.setState({ data })
                } else {
                    data1 = allLan(response, startDate, endDate, language)
                    this.setState({ data: data1 })
                }


            })
            .catch(err => console.log(err))


    }

    callback = (key) => {
        console.log('key', key);
        console.log('res', this.state.response);
    }

    render() {
        const size = this.props;
        return (
            <div className="container">
                <Form layout='horizontal' onSubmit={this.handleSubmit} style={{ marginBottom: '30px' }}>
                    <Row type='flex' justify='space-between'>
                        <Col span={4}>
                            <Select
                                showSearch
                                placeholder="Select a Language"
                                optionFilterProp="children"
                                size={size}
                                style={{ marginTop: '50px', marginLeft: '10px' }}
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="hindi">Hindi</Option>
                                <Option value="tamil">Tamil</Option>
                                <Option value="telugu">Telugu</Option>
                                <Option value="kannada">kannada</Option>
                                <Option value="marathi">Marathi</Option>
                                <Option value="malayalam">Malayalam</Option>
                                <Option value={allLan1}>All Language</Option>
                            </Select>
                        </Col>
                        <Col span={4}>
                            <DatePicker
                                onChange={this.onChange1}
                                style={{ marginTop: '50px', marginLeft: '10px' }}
                                placeholder='Start Date'
                            />
                        </Col>
                        <Col span={4}>
                            <DatePicker
                                placeholder='End Date'
                                onChange={this.onChange2}
                                style={{ marginTop: '50px', marginLeft: '10px' }}
                            />
                        </Col>
                        <Col span={4}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginTop: '50px', marginLeft: '10px' }}
                            >Submit</Button>
                        </Col>
                    </Row>
                </Form>
                <br />
                <TABS
                    callback={this.callback}
                    obj={this.state.data}
                    language={this.state.language}
                    response={this.state.response}
                />
            </div>
        )
    }
}

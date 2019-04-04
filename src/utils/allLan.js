import moment from 'moment';
import rename from './rename'

const allLan = (res, startDate, endDate, language) => {
    let lan = language;
    let y1 = moment(startDate, 'YYYY/MM/DD').year(),
        y2 = moment(endDate, 'YYYY/MM/DD').year(),
        obj1 = {
            'hindi': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'tamil': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'telugu': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'kannada': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'marathi': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'malayalam': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            }
        }, obj2 = {
            'hindi': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'tamil': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'telugu': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'kannada': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'marathi': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            },
            'malayalam': {
                '2025': {},
                '2024': {},
                '2023': {},
                '2022': {},
                '2021': {},
                '2020': {},
                '2019': {},
                '2018': {},
                '2017': {},
                '2016': {},
                '2015': {},
                '2014': {},
                '2013': {},
                '2012': {}
            }
        },
        keysMap = {
            '1': 'JAN',
            '2': 'FEB',
            '3': 'MAR',
            '4': 'APR',
            '5': 'MAY',
            '6': 'JUN',
            '7': 'JUL',
            '8': 'AUG',
            '9': 'SEP',
            '10': 'OCT',
            '11': 'NOV',
            '12': 'DEC'
        }

    for (let i = 1; i <= lan.length; i++) {

        obj1[lan[i - 1]][y1] = {
            '1': {
                mod: 0,
                in: 0
            },
            '2': {
                mod: 0,
                in: 0
            },
            '3': {
                mod: 0,
                in: 0
            },
            '4': {
                mod: 0,
                in: 0
            },
            '5': {
                mod: 0,
                in: 0
            },
            '6': {
                mod: 0,
                in: 0
            },
            '7': {
                mod: 0,
                in: 0
            },
            '8': {
                mod: 0,
                in: 0
            },
            '9': {
                mod: 0,
                in: 0
            },
            '10': {
                mod: 0,
                in: 0
            },
            '11': {
                mod: 0,
                in: 0
            },
            '12': {
                mod: 0,
                in: 0
            },
        }

        obj1[lan[i - 1]][y2] = {
            '1': {
                mod: 0,
                in: 0
            },
            '2': {
                mod: 0,
                in: 0
            },
            '3': {
                mod: 0,
                in: 0
            },
            '4': {
                mod: 0,
                in: 0
            },
            '5': {
                mod: 0,
                in: 0
            },
            '6': {
                mod: 0,
                in: 0
            },
            '7': {
                mod: 0,
                in: 0
            },
            '8': {
                mod: 0,
                in: 0
            },
            '9': {
                mod: 0,
                in: 0
            },
            '10': {
                mod: 0,
                in: 0
            },
            '11': {
                mod: 0,
                in: 0
            },
            '12': {
                mod: 0,
                in: 0
            },
        }
    }


    for (let i = 1; i <= lan.length; i++) {

        for (const key in res[lan[i - 1]]) {
            let year = moment(key, 'YYYY/MM/DD').year()
            let month = 1 + moment(key, 'YYYY/MM/DD').month()
            if (res[lan[i - 1]][key].moderated) {
                obj1[lan[i - 1]][year][month].mod += res[lan[i - 1]][key].moderated
            }
            if (res[lan[i - 1]][key].inprogress) {
                obj1[lan[i - 1]][year][month].in += res[lan[i - 1]][key].inprogress
            }
        }

    }


    for (let i = 1; i <= lan.length; i++) {

        obj2[lan[i - 1]][y1] = rename(keysMap, obj1[lan[i - 1]][y1])
        obj2[lan[i - 1]][y2] = rename(keysMap, obj1[lan[i - 1]][y2])
    }

    return obj2;
}

export default allLan;
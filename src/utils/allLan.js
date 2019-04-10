import moment from 'moment';
import rename from './rename'

const allLan = (res, startDate, endDate, language) => {
    let lan = language;
    let inMon = 1 + moment(startDate, 'YYYY/MM/DD').month(), knum,
        enMon = 1 + moment(endDate, 'YYYY/MM/DD').month();
    inMon = parseInt(inMon, 10);
    enMon = parseInt(enMon, 10)
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
        },
        obj2 = {
            'allLan': {
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
        obj3 = {
            'allLan': {
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
    // obj2 = {
    //     'hindi': {
    //         '2025': {},
    //         '2024': {},
    //         '2023': {},
    //         '2022': {},
    //         '2021': {},
    //         '2020': {},
    //         '2019': {},
    //         '2018': {},
    //         '2017': {},
    //         '2016': {},
    //         '2015': {},
    //         '2014': {},
    //         '2013': {},
    //         '2012': {}
    //     },
    //     'tamil': {
    //         '2025': {},
    //         '2024': {},
    //         '2023': {},
    //         '2022': {},
    //         '2021': {},
    //         '2020': {},
    //         '2019': {},
    //         '2018': {},
    //         '2017': {},
    //         '2016': {},
    //         '2015': {},
    //         '2014': {},
    //         '2013': {},
    //         '2012': {}
    //     },
    //     'telugu': {
    //         '2025': {},
    //         '2024': {},
    //         '2023': {},
    //         '2022': {},
    //         '2021': {},
    //         '2020': {},
    //         '2019': {},
    //         '2018': {},
    //         '2017': {},
    //         '2016': {},
    //         '2015': {},
    //         '2014': {},
    //         '2013': {},
    //         '2012': {}
    //     },
    //     'kannada': {
    //         '2025': {},
    //         '2024': {},
    //         '2023': {},
    //         '2022': {},
    //         '2021': {},
    //         '2020': {},
    //         '2019': {},
    //         '2018': {},
    //         '2017': {},
    //         '2016': {},
    //         '2015': {},
    //         '2014': {},
    //         '2013': {},
    //         '2012': {}
    //     },
    //     'marathi': {
    //         '2025': {},
    //         '2024': {},
    //         '2023': {},
    //         '2022': {},
    //         '2021': {},
    //         '2020': {},
    //         '2019': {},
    //         '2018': {},
    //         '2017': {},
    //         '2016': {},
    //         '2015': {},
    //         '2014': {},
    //         '2013': {},
    //         '2012': {}
    //     },
    //     'malayalam': {
    //         '2025': {},
    //         '2024': {},
    //         '2023': {},
    //         '2022': {},
    //         '2021': {},
    //         '2020': {},
    //         '2019': {},
    //         '2018': {},
    //         '2017': {},
    //         '2016': {},
    //         '2015': {},
    //         '2014': {},
    //         '2013': {},
    //         '2012': {}
    //     }
    // }

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

    obj3['allLan'][y1] = {
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
        }
    }
    obj3['allLan'][y2] = {
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

    //new logic

    for (let i = 1; i <= lan.length; i++) {
        for (const k1 in obj1[lan[i - 1]]) {
            if (obj1[lan[i - 1]].hasOwnProperty(k1)) {
                for (const k2 in obj1[lan[i - 1]][k1]) {
                    console.log('executing....');
                    if (obj1[lan[i - 1]][k1].hasOwnProperty(k2)) {
                        obj3['allLan'][y1][k2].mod = obj1[lan[i - 1]][y1][k2].mod + obj3['allLan'][y1][k2].mod
                        obj3['allLan'][y1][k2].in = obj1[lan[i - 1]][y1][k2].in + obj3['allLan'][y1][k2].in

                    }

                }

            }
        }

        for (const k1 in obj1[lan[i - 1]]) {
            if (obj1[lan[i - 1]].hasOwnProperty(k1)) {

                for (const k2 in obj1[lan[i - 1]][k1]) {
                    if (obj1[lan[i - 1]][k1].hasOwnProperty(k2)) {
                        obj3['allLan'][y2][k2].mod += obj1[lan[i - 1]][y2][k2].mod;
                        obj3['allLan'][y2][k2].in += obj1[lan[i - 1]][y2][k2].in

                    }
                }

            }
        }

    }

    for (const key in obj3['allLan'][y1]) {
        if (obj3['allLan'][y1].hasOwnProperty(key)) {
            knum = parseInt(key, 10)
            if (knum < inMon) {
                delete obj3['allLan'][y1][key]
            }
        }
    }

    for (const key in obj3['allLan'][y2]) {
        if (obj3['allLan'][y2].hasOwnProperty(key)) {
            knum = parseInt(key, 10)
            if (knum > enMon) {
                delete obj3['allLan'][y2][key]
            }
        }
    }

    obj2['allLan'][y1] = rename(keysMap, obj3['allLan'][y1])
    obj2['allLan'][y2] = rename(keysMap, obj3['allLan'][y2])

    //old logic

    // for (let i = 1; i <= lan.length; i++) {
    //     for (const key in obj1[lan[i - 1]][y1]) {
    //         if (obj1[lan[i - 1]][y1].hasOwnProperty(key)) {
    //             knum = parseInt(key, 10)
    //             if (knum < inMon) {
    //                 delete obj1[lan[i - 1]][y1][key]
    //             }
    //         }
    //     }

    // }

    // for (let i = 1; i <= lan.length; i++) {
    //     for (const key in obj1[lan[i - 1]][y2]) {
    //         if (obj1[lan[i - 1]][y2].hasOwnProperty(key)) {
    //             knum = parseInt(key, 10)
    //             if (knum > enMon) {
    //                 delete obj1[lan[i - 1]][y2][key]
    //             }
    //         }
    //     }

    // }



    // for (let i = 1; i <= lan.length; i++) {

    //     obj2[lan[i - 1]][y1] = rename(keysMap, obj1[lan[i - 1]][y1])
    //     obj2[lan[i - 1]][y2] = rename(keysMap, obj1[lan[i - 1]][y2])
    // }

    return obj2;
}

export default allLan;
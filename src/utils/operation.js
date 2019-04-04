import moment from 'moment';
import rename from './rename'

const operation = (res, startDate, endDate, language) => {
    let lan = language;
    let inMon = 1 + moment(startDate, 'YYYY/MM/DD').month(), knum,
        enMon = 1 + moment(endDate, 'YYYY/MM/DD').month();
    inMon = parseInt(inMon, 10);
    enMon = parseInt(enMon, 10)
    let y1 = moment(startDate, 'YYYY/MM/DD').year(),
        y2 = moment(endDate, 'YYYY/MM/DD').year(),
        obj1 = {}, obj2 = {},
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

    obj1[y1] = {
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
    obj1[y2] = {
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
    for (const key in res[lan]) {
        let year = moment(key, 'YYYY/MM/DD').year()
        let month = 1 + moment(key, 'YYYY/MM/DD').month()
        if (res[lan][key].moderated) {
            if (typeof obj1[year][month].mod == 'string') {
                obj1[year][month].mod = res[lan][key].moderated
            } else {
                obj1[year][month].mod += res[lan][key].moderated
            }
        }
        if (res[lan][key].inprogress) {
            obj1[year][month].in += res[lan][key].inprogress
        }

    }

    for (const key in obj1[y1]) {
        if (obj1[y1].hasOwnProperty(key)) {
            knum = parseInt(key, 10)
            if (knum < inMon) {
                delete obj1[y1][key]
            }
        }
    }

    for (const key in obj1[y2]) {
        if (obj1[y2].hasOwnProperty(key)) {
            knum = parseInt(key, 10)
            if (knum > enMon) {
                delete obj1[y2][key]
            }
        }
    }

    console.log(obj1);


    obj2[y1] = rename(keysMap, obj1[y1])
    obj2[y2] = rename(keysMap, obj1[y2])
    return obj2;
}

export default operation;
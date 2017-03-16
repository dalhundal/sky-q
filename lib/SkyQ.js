const request = require('request-promise-native')

class SkyQ {

    static box(ip) {
        return new this({ip})
    }

    constructor({ip}) {
        this._ip = ip
    }

    _request(path, {port=9006, json=true}={}) {
        return request({
            url: `http://${this._ip}:${port}/${path}`,
            json
        })
    }

    _getSystemInformation({key}) {
        const req =  this._request('as/system/information')
        if (!key) {
            return req
        } else {
            return req.then(systemInformation=>systemInformation[key])
        }
    }

    getPowerState() {
        return this._getSystemInformation({key:'activeStandby'}).then(value=>{
            if (value===false || value===true) return !value
            return Promise.reject(new Error("Unexpected value for 'activeStandby'"))
        })
    }

}

module.exports = SkyQ

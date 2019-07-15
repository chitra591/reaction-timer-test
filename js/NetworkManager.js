import {Platform} from 'react-native';
// import NetInfo from "@react-native-community/netinfo";

export default class NetworkManager {
    static BASE_URL = "https://api.random.org/json-rpc/2/";
    static appVersionNumber = '1.0.0';
    static appVersion = __DEV__ ? `RN-debug-${Platform.OS}-${NetworkManager.appVersionNumber}` : `RN-${Platform.OS}-${NetworkManager.appVersionNumber}`;
    static apiKey = "b54a3a29-9dbe-4edb-a415-1d721cdee6f4";
    static minRange = 1;
    static maxRange = 3;
    static numberOfItems = 1;

    static extractData = async(response, api_name) => {
        const {status} = response;
        if (status === 200) {
            var res = await response.json();
            var data = res.result.random.data[0];
            return {randomNumber: data, message: "Success", status}
        } else {
            var res = await response.json();
            return {randomNumber: data, message: "Error", status}
        }
    }

    static isInternetAvailable = (callback) => {
        // NetInfo.getConnectionInfo().then((connectionInfo) => {
        //     if (connectionInfo.type === 'none') {
        //         callback(true);
        //     } else {
        //         callback(false);
        //     }
        // })
        // .catch((error) => {
        //     callback(true);
        // });
        // callback(false);
    }

    static callAPI = ({api_name, method, payload = {}}, callback) => {
        try {
            NetworkManager.isInternetAvailable(async (isInternetUnvailable) => {
                if (isInternetUnvailable) {
                    var response = {isInternetUnvailable};
                    callback(null, response);
                } else {
                    var request_params = method === 'get' ? { 
                        method: `${method}`, 
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        })
                    } : { 
                        method: `${method}`, 
                        headers: new Headers({
                        'Content-Type': 'application/json'
                        }), 
                        body: JSON.stringify(payload),
                    };
                    fetch(
                        `${NetworkManager.BASE_URL}${api_name}`,
                        request_params
                    )
                    .then(async (res) => {
                        var response = await NetworkManager.extractData(res, api_name);
                        response.isInternetUnvailable = false;
                        callback(null, response);
                    })
                    .catch((error) => {
                        callback(error, null);
                    });
                }
            });
        } catch (error) {
            callback({message: 'Network request failed. Please try again later.'}, null);
        }
    }

    static getRandomNumber = (callback) => {
        NetworkManager.callAPI({
            api_name: 'invoke', 
            method: 'post', 
            payload: {
                "jsonrpc": "2.0",
                "method": "generateIntegers",
                "params": {
                    "apiKey": NetworkManager.apiKey,
                    "n": NetworkManager.numberOfItems,
                    "min": NetworkManager.minRange,
                    "max": NetworkManager.maxRange,
                    "replacement": true
                },
                "id": 42
            }
        }, (error, response) => {
            if(response) {
                callback(null, response);
            } else {
                callback(error, null);
            }
        });
    }
}
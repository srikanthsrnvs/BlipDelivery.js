"use strict";

var request = require('request-promise');

module.exports = function(storeID){
    return {
        createNewDelivery: function(options) {
            const pickupInstructions = options.pickup.instructions,
                  pickupNumber = options.pickup.contact.number,
                  pickupAddress = options.pickup.location.address,
                  orderNumber = options.pickup.order_number,
                  deliveryInstructions = options.delivery.instructions,
                  deliveryName = options.delivery.contact.name,
                  deliveryNumber = options.delivery.contact.number,
                  deliveryAddress = options.delivery.location.address;
            return new Promise(function(resolve, reject){
                var url;
                if (storeID == "test"){
                    url = 'https://test.blip.delivery/makeDeliveryRequest';
                    options.storeID = "-LJlJ-xuYqEtgs6C1qky";
                }else{
                    url = 'https://api.blip.delivery/makeDeliveryRequest';
                    options.storeID = storeID;
                }
                if (!pickupNumber){
                    var err = new Error("Missing pickup number")
                    reject(err)
                }
                if (!pickupAddress){
                    var err = new Error("Missing pickup address")
                    reject(err)
                }
                if (!orderNumber){
                    var err = new Error("Missing order number")
                    reject(err)
                }
                if (!deliveryName){
                    var err = new Error("Missing delivery reciever name")
                    reject(err)
                }
                if (!deliveryNumber){
                    var err = new Error("Missing delivery reciever number")
                    reject(err)
                }
                if (!deliveryAddress){
                    var err = new Error("Missing delivery address")
                    reject(err)
                }else{
                    var data = {
                        method: 'POST',
                        uri: url,
                        body: options,
                        json: true,
                        resolveWithFullResponse: true
                    }
                    request(data)
                    .then(function(response){
                        if (response.statusCode == 400){
                            var respErr = new Error(response.body.error)
                            reject(respErr)
                        }else{
                            resolve(response.body)
                        }
                    })
                    .catch(function(err){
                        reject(err)
                    })
                }
            })
        },
        getQuote: function(options){
            const pickupAddress = options.pickupAddress,
                  deliveryAddress = options.deliveryAddress;
            return new Promise(function(resolve, reject){
                var url;
                if (storeID == "test"){
                    url = 'https://test.blip.delivery/getDeliveryPrice'
                    options.storeID = "-LJlJ-xuYqEtgs6C1qky";
                }else{
                    url = 'https://api.blip.delivery/getDeliveryPrice'
                    options.storeID = storeID;
                }
                if (!pickupAddress){
                    var err = new Error("Missing pickup address")
                    reject(err)
                }
                if (!deliveryAddress){
                    var err = new Error("Missing delivery address")
                    reject(err)
                }
                var data = {
                    method: 'POST',
                    uri: url,
                    body: {
                        pickupAddress: pickupAddress,
                        deliveryAddress: deliveryAddress,
                        storeID: options.storeID
                    },
                    json: true,
                    resolveWithFullResponse: true
                }
                request(data)
                .then(function(response){
                    if (response.statusCode == 400){
                        var respErr = new Error(response.body.error)
                        reject(respErr)
                    }else{
                        resolve(response.body)
                    }
                })
                .catch(function(err){
                    reject(err)
                })
            })
        },
        cancelDelivery: function(options){
            const deliveryID = options.deliveryID;
            return new Promise( function(resolve, reject) {
                var url;
                var store;
                if (storeID == "test"){
                    url = 'https://test.blip.delivery/cancelDelivery';
                    store = "-LJlJ-xuYqEtgs6C1qky";
                }else{
                    url = 'https://api.blip.delivery/cancelDelivery';
                    store = storeID;
                }
                if (!deliveryID){
                    var err = new Error("Missing deliveryID")
                    reject(err)
                }else{
                    var data = {
                        method: 'POST',
                        uri: url,
                        body: {
                            deliveryID: deliveryID,
                            storeID: store
                        },
                        json: true,
                        resolveWithFullResponse: true
                    }
                    request(data)
                    .then(function(response){
                        if (response.statusCode == 400){
                            var respErr = new Error(response.body.error)
                            reject(respErr)
                        }else{
                            resolve(response.body)
                        }
                    })
                    .catch(function(err){
                        reject(err)
                    })
                }
            })
        },
        getDeliveryStatus: function(options){
            const deliveryID = options.deliveryID;
            var url,
                store;
            if (storeID == "test"){
                store = "-LJlJ-xuYqEtgs6C1qky";
                url = 'https://test.blip.delivery/getDeliveryStatus';
            }else{
                store = storeID;
                url = 'https://api.blip.delivery/getDeliveryStatus';
            }
            return new Promise( function(resolve, reject) {
                if (!deliveryID){
                    var err = new Error("Missing deliveryID")
                    reject(err)
                }else{
                    var data = {
                        method: 'POST',
                        uri: url,
                        body: {
                            deliveryID: deliveryID,
                            storeID: store
                        },
                        json: true,
                        resolveWithFullResponse: true
                    }
                    request(data)
                    .then(function(response){
                        if (response.statusCode == 400){
                            var respErr = new Error(response.body.error)
                            reject(respErr)
                        }else{
                            resolve(response.body)
                        }
                    })
                    .catch(function(err){
                        reject(err)
                    })
                }
            })
        },
        getDriverLocation: function(options){
            const deliveryID = options.deliveryID;
            var url,
                store;
            if (storeID == "test"){
                store = "-LJlJ-xuYqEtgs6C1qky";
                url = 'https://test.blip.delivery/getDriverLocation';
            }else{
                store = storeID;
                url = 'https://api.blip.delivery/getDriverLocation';
            }
            return new Promise( function(resolve, reject) {
                if (!deliveryID){
                    var err = new Error("Missing deliveryID")
                    reject(err)
                }else{
                    var data = {
                        method: 'POST',
                        uri: url,
                        body: {
                            deliveryID: deliveryID,
                            storeID: store
                        },
                        json: true,
                        resolveWithFullResponse: true
                    }
                    request(data)
                    .then(function(response){
                        if (response.statusCode == 400){
                            var respErr = new Error(response.body.error)
                            reject(respErr)
                        }else{
                            resolve(response.body)
                        }
                    })
                    .catch(function(err){
                        reject(err)
                    })
                }
            })
        }
    };
}

//Get driver Status
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
            var url;
            if (!storeID){
                url = 'https://us-central1-blip-testapp.cloudfunctions.net/makeDeliveryRequest'
            }else{
                url = 'https://api.blip.delivery/makeDeliveryRequest'
            }
            return new Promise(function(resolve, reject){
                if (!pickupInstructions){
                    var err = new Error("Missing pickup instructions")
                    reject(err)
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
                if (!deliveryInstructions){
                    var err = new Error("Missing delivery instructions")
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
                    if (!storeID){
                        options.storeID = "-LJlJ-xuYqEtgs6C1qky";
                    }else{
                        options.storeID = storeID;
                    }
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
            var url;
            if (!storeID){
                url = 'https://us-central1-blip-testapp.cloudfunctions.net/getDeliveryPrice'
            }else{
                url = 'https://api.blip.delivery/getDeliveryPrice'
            }
            return new Promise(function(resolve, reject){
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
                        deliveryAddress: deliveryAddress
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
            var url;
            var store;
            if (!storeID){
                url = 'https://us-central1-blip-testapp.cloudfunctions.net/cancelDelivery'
            }else{
                url = 'https://api.blip.delivery/cancelDelivery'
            }
            return new Promise( function(reolve, reject) {
                if (!deliveryID){
                    var err = new Error("Missing deliveryID")
                    reject(err)
                }else{
                    if (!storeID){
                        store = "-LJlJ-xuYqEtgs6C1qky";
                    }else{
                        store = storeID
                    }
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
        // getDeliveryStatus: function(options){
        //     const deliveryID = options.deliveryID,
        //         url,
        //         store;
        //     if (testMode == true){
        //         url = 'https://us-central1-blip-testapp.cloudfunctions.net/getDeliveryStatus'
        //     }else{
        //         url = 'https://api.blip.delivery/getDeliveryStatus'
        //     }
        //     return new Promise( function(reolve, reject) {
        //         if (!deliveryID){
        //             var err = new Error("Missing deliveryID")
        //             reject(err)
        //         }else{
        //             if (testMode == true){
        //                 store = "-LJlJ-xuYqEtgs6C1qky";
        //             }else{
        //                 store = storeID
        //             }
        //             var data = {
        //                 method: 'POST',
        //                 uri: url,
        //                 body: {
        //                     deliveryID = deliveryID,
        //                     storeID = store
        //                 },
        //                 json: true,
        //                 resolveWithFullResponse: true
        //             }
        //             request(data)
        //             .then(function(response){
        //                 if (response.statusCode == 400){
        //                     var respErr = new Error(response.body.error)
        //                     reject(respErr)
        //                 }else{
        //                     resolve(response.body)
        //                 }
        //             })
        //             .catch(function(err){
        //                 reject(err)
        //             })
        //         }
        //     })
        // }
    }
}

//Get delivery Status
//Get driver Status
//Cancel delivery
//Get delivery ETA
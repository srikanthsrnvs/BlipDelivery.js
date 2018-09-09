"use strict";

var request = require('request-promise');
var store;

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
                if (!storeID){
                    var err = new Error("Missing storeID. Please enter your storeID when requiring the blip-delivery module")
                    reject(err)
                }
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
                    options.storeID = storeID;
                    var data = {
                        method: 'POST',
                        uri: 'https://api.blip.delivery/makeDeliveryRequest',
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
                if (!storeID){
                    var err = new Error("Missing storeID. Please enter your storeID when requiring the blip-delivery module")
                    reject(err)
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
                    uri: 'https://api.blip.delivery/getDeliveryPrice',
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
        }
    }
}

//Get delivery Status
//Get driver Status
//Cancel delivery
//Get delivery ETA
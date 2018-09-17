﻿![Blip logo](https://firebasestorage.googleapis.com/v0/b/blip-live.appspot.com/o/Webp.net-resizeimage.png?alt=media&token=f306b57a-8c0c-43ad-b279-476d26fd1428) 
# Make Same-day deliveries with Blip

To get started integrating same-day deliveries into your application, use  `require('blip.delivery')('YOURSTOREID')` and replace `YOURSTOREID` with the storeID you recieved after signing up for an account. To get started in testmode, replace `YOURSTOREID` with `test`

For example;

`var blip = require('blip-deliveries')('test')` is Testmode
`var blip = require('blip-deliveries')('-L679TFg97g9bj12e')` is Livemode

> **Registration:** You can get a storeID by signing up at **www.blip.delivery**  or contacting sales.

## Get a delivery Quote

To get a new delivery quote, use `getQuote(options)` where `options` is an object containing a delivery address, and a pickup address.

    var blip = require('blip-deliveries')('test'); //Replace 'test' with your storeID to switch to livemode
    
    // Enter the full address along with the locality/sublocality
    
    const quote = await blip.getQuote({
		pickupAddress: "156 Enfield Place, Mississauga, ON",
	    deliveryAddress: "3573 Mississauga Rd, Mississauga, ON"
	})

## Create a delivery request

To create a new delivery request, use `createNewDelivery(options)` where `options` is an object containing required delivery details.

    var blip = require('blip-deliveries')('test'); //Replace 'test' with your storeID to switch to livemode
    
    // All fields are required
    
    const delivery = await blip.createNewDelivery({
		"delivery": {
			"instructions": "Deliver to the lobby", //Instructions to deliver
			"contact": {
				"name": "John Smith", // Name of the reciever
				"number": "+16479839837" // Number of the reciever
			},
			"location": {
				"address": "156 Enfield Place, Mississauga, ON" // Address of the dropoff point
			}
		}
	  	"pickup": {
			"order_number": "ABC123", // Your own order number for identifying and tracking
			"instructions": "Pickup from the main desk", // Instructions to pickup
			"contact": {
				"number": "+16478229867" // Pickup point helpline incase driver cannot find you
			},
			"location": {
				"address": "100 City Centre Drive, Missisauga, ON" // Address of the pickup point
			}
		}
	})

 

## Cancel delivery

A delivery can only be cancelled if it hasn't already been taken by a driver. Therefore, if a driver is en-route to the pickup point, the delivery cannot be cancelled. We will eventually add support for cancellations before pickup.

To cancel a delivery, use `cancelDelivery(options)` where `options` is an object containing the deliveryID of the delivery you want to cancel.

	var blip = require('blip-deliveries')('test'); //Replace 'test' with your storeID to switch to livemode

	// A deliveryID is required

	const cancellation = await blip.cancelDelivery({
		"deliveryID": "ASF781" // Replace with your deliveryID
	})

## Get delivery status

A delivery object has a status property after being created. It contains the following;

`timeTaken` The Unix epoch time in seconds when the delivery was accepted by a courier. This is the time at which the courier starts to drive towards the pickup location

`pickupETA` The Unix epoch time in seconds of an approximate ETA to the pickup point.

`timePickedUp` The Unix epoch time in seconds when the courier picked up the order from the pickup location

`dropoffETA` The Unix epoch time in seconds of an approximate ETA to the dropoff point

`timeDelivered` The Unix epoch time in seconds when the courier delivered the order to the dropoff location

`courier` The information of the driver currently on your delivery job

To get the current status for a delivery, use `getDeliveryStatus(options)` where `options` is an object containing the deliveryID of the delivery

	var blip = require('blip-deliveries')('test'); //Replace 'test' with your storeID to switch to livemode

	// A deliveryID is required

	const status = await blip.getDeliveryStatus({
		"deliveryID": "ASF781" // Replace with your deliveryID
	})

# Notes

If you'd like to contribute, send an email to **srikanth@blip.delivery**
We're always looking to improve our tools and user experience. If you have any questions or would like new features added, contact **blip@blip.delivery**

**Go build something great!**




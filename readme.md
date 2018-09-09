<<<<<<< HEAD
﻿![Blip logo](https://firebasestorage.googleapis.com/v0/b/blip-live.appspot.com/o/Webp.net-resizeimage.png?alt=media&token=f306b57a-8c0c-43ad-b279-476d26fd1428) 
=======
![](https://firebasestorage.googleapis.com/v0/b/blip-live.appspot.com/o/Webp.net-resizeimage.png?alt=media&token=f306b57a-8c0c-43ad-b279-476d26fd1428) 
>>>>>>> 90e4f4acca129c8b54c1bb4367fa685efdb6eb57
# Make Same-day deliveries with Blip

To get started integrating same-day deliveries into your application, use  `require('blip.delivery')('YOURSTOREID')` and replace `YOURSTOREID` with the storeID you recieved after signing up for an account.

> **Registration:** You can get a storeID by signing up at **www.blip.delivery**  or contacting sales.

## Get a delivery Quote

To get a new delivery quote, use `getQuote(options)` where `options` is an object containing a delivery address, and a pickup address.

    var blip = require('blip.delivery')('YOURSTOREID');
    
    // Enter the full address along with the locality/sublocality
    
    const quote = await blip.getQuote({
	    pickupAddress: "156 Enfield Place, Mississauga, ON",
	    deliveryAddress: "3573 Mississauga Rd, Mississauga, ON"
	})

## Create a delivery request

To create a new delivery request, use `createNewDelivery(options)` where `options` is an object containing required delivery details.

    var blip = require('blip.delivery')('YOURSTOREID');
    
    // All fields are required
    
    const delivery = await blip.createNewDelivery({
<<<<<<< HEAD
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
=======
    	"delivery": {
    		"instructions": "Deliver to the lobby", //Instructions to deliver
				"contact": {
					"name": "John Smith", // Name of the reciever
					"number": "+16479839837" // Number of the reciever
				},
				"location": {
					"address": "156 Enfield Place, Mississauga, ON" // Address of the dropoff point
				}
			},
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
>>>>>>> 90e4f4acca129c8b54c1bb4367fa685efdb6eb57

 

## Cancel delivery

Coming Soon!

## Get delivery status

Coming Soon!

## Get ETA

Coming Soon!


# Notes

If you'd like to contribute, send an email to **srikanth@blip.delivery**
We're always looking to improve our tools and user experience. If you have any questions or would like new features added, contact **blip@blip.delivery**

**Go build something great!**




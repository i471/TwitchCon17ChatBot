process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var tmi = require('tmi.js');
var stinv = require('steam-user-inventory');
var axios = require('axios');

var options = {
	
	options: {
		debug: true
	},
	connection:
	{
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "tch_bot",
		password: "oauth:2eg4vsnm871o3afbidhrvl9j5zqx9d"
	},
	channels: ["#xSerendipity"]
};

var client = new tmi.client(options);
client.connect();

client.on("chat", (channel, user, message, self) => {
	if(message.startsWith("!raffle")){
		var array = message.split(',');
		var itemNumber= parseInt(array[1]);
		var delay = parseInt(array[2]);
		console.log(message);
		stinv('xSerendipity').then((data)=>{
			console.log(data[itemNumber].name);
			client.say("#xSerendipity", data[itemNumber].name);
			axios({
				method: 'get',
				url: 'https://localhost:8080/post-roll?' + 'itemName=' + data[itemNumber].name + '&itemImage=' +data[itemNumber].image 
					+ '&streamerId=majiaan&delay=' + delay
			}).then(function (response) {
				console.log(response);
			}).catch(function (error){
				console.log(error);
			});

		}).catch(function(error) {
			console.log(error)
		})
	}
	
})
client.on("clearchat", function (channel) {
    
});
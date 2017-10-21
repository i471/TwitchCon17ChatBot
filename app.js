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
	if(message = "!raffle"){
		console.log(message);
		stinv('xSerendipity').then((data)=>{
			console.log(data[1].name);
			client.say("#xSerendipity", data[1].name);
			var img=data[1].image;
			axios.get('https://localhost:8080/change-image?itemImage='+img)

		}).catch(function(error) {
			console.log(error)
		 })
	}
	
})
client.on("clearchat", function (channel) {
    
});
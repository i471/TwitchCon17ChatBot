var tmi = require('tmi.js');

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
	channels: ["#i471"]
};

var client = new tmi.client(options);
client.connect();

client.on("chat", (channel, user, message, self) => {
	if(self) return

	if(message = "hello"){
		client.say("#i471", "8=====D")
	}
	
})
client.on("clearchat", function (channel) {
    
});
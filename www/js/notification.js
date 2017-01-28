
function successHandler (result) {
	alert('result = ' + result);
}
function errorHandler (error) {
	alert('error = ' + error);
}




function register_notification_home() {
	alert("register_notification_home start");
	
	var push = PushNotification.init({
		android: {
			senderID: "804625540618"
		},
		ios: {
			alert: "true",
			badge: "true",
			sound: "true"
		},
		windows: {}
	});

	push.on('registration', function(data) {
		// data.registrationId
		alert("registration event: " + data.registrationId);
	});

	push.on('notification', function(data) {
		// data.message,
		// data.title,
		// data.count,
		// data.sound,
		// data.image,
		// data.additionalData
	});

	push.on('error', function(e) {
		// e.message
		alert("push error = " + e.message);
	});
	
	alert("register_notification_home end");
}














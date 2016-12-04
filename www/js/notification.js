
function successHandler (result) {
	alert('result = ' + result);
}
function errorHandler (error) {
	alert('error = ' + error);
}



var push = PushNotification.init({
    android: {
        senderID: "804625540618"
    },
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
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
	alert("registrationId : " + data);
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
	alert("error" + e.message);
});















var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '1057826',
    key: '3ea82fd06881041915ed',
    secret: 'bf780a496b51d78d4959',
    cluster: 'eu',
    encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
    'message': 'hello world'
});

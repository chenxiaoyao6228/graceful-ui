import Notification from './notification.js';

let messageInstance;

function getMessageInstance() {
    messageInstance = messageInstance || Notification.newInstance()
    return messageInstance
}

function notice({
    duration = 1.5,
    content = '',
}) {
    let instance = getMessageInstance()

    instance.add({
        content: content,
        duration: duration
    })
}

function alert(options){
    notice(options)
}
let types = ['info', 'warning', 'success', 'error']

for (let i = 0, len = types.length; i < len; i++){
    let type = types[i]
    alert[type] = (options) => notice(Object.assign(options, {type}))
}

export default alert

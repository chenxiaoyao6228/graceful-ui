import Notification from './notification';

let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice({ duration = 1.5, content = '' }) {
  const instance = getMessageInstance();

  instance.add({
    content,
    duration
  });
}

function alert(options) {
  notice(options);
}
const types = ['info', 'warning', 'success', 'error'];

for (let i = 0, len = types.length; i < len; i++) {
  const type = types[i];
  alert[type] = (options) => notice(Object.assign(options, { type }));
}

export default alert;

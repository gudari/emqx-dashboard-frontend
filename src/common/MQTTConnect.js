export default {
  client: {},
  options: {
    host: '',
    port: 8083,
    username: '',
    isSSL: false,
    password: '',
    keepalive: 60,
    clean: true,
    clientId: '',
    subQos: 0,
    publishQos: 0,
    publishMessage: '{ "msg": "Hello, World!" }',
    subTopic: 'testtopic/#',
    publishTopic: 'testtopic',
    publishRetain: false,
    receivedMessages: [],
    publishedMessages: [],
    subscriptions: [],
  },
}

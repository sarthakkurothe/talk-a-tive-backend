const mongoose = require('mongoose');

const url = `mongodb+srv://chat_app_admin:Abcd1234@cluster0.qfvg5do.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))





const mongoose = require('mongoose');
require('./employee.model');
mongoose.connect('mongodb://localhost:27017/EmployeDB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection Success');
    } else {
        console.log('MongoDB connection Error ' + err);
    }
});

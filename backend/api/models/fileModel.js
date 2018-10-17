const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
    file: Buffer,
});

module.exports = mongoose.model('File', FileSchema);

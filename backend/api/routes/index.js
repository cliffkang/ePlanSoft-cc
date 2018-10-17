const { uploadFile } = require('../controllers');

module.exports = server => {
    server.route('/file').post(uploadFile);
};
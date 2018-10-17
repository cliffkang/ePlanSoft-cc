const File = require('../models/fileModel');

const uploadFile = (req, res) => {
    const { file } = req.body;
    if (file) {
        const newFile = new File({ file });
        newFile.save()
            .then(savedFile => res.status(201).send({ 'filed saved': savedFile }))
            .catch(err => res.status(422).send({ 'error saving file': err }));
    } else {
        res.status(400).send('file not sent');
    }
};

module.exports = {
    uploadFile,
};

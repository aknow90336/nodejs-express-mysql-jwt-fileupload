const invoiceController = {
    upload: function (req, res) {
        const file = req.file

        if (!file) {
            const error = new Error('Please upload a file')
            res.status(400).json({ message: 'upload error!' })
        }
        
        const multerText = Buffer.from(file.buffer).toString('utf-8')
        
        const rID = multerText.match(/Receipt ID:([0-9]*)/)[1]
        const date = multerText.match(/Date:([0-9\.]*)/)[1]
        const total = multerText.match(/Total: *([0-9\.]*)/)[1]


        res.status(200).json({ message: 'successs' })
    }
}

module.exports = invoiceController
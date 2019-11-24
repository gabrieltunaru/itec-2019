const uploadPhoto = async (req, res, next) => {
  try {
    const file = req.file
    if (!file) {
      res.status(400).send("Didn't receive a file")
    }
    res.json({ data: file.filename, original: file.originalname })
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = { uploadPhoto }

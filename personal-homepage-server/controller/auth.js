exports.auth = async (req, res, next) => {
  try {
    res.status(200).json({
      code: 200,
      data: 'Authenticated'
    })
  } catch (err) {
    next(err)
  }
}

exports.allAccess = (req, res) => {
  res.status(200).send("Full Public Access.")
}

exports.userBoard = (req, res) => {
  res.status(200).send("User Board.")
}

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Board.")
}

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Board.")
}
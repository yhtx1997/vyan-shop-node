const User = require('../models/user.model')

const UserController = {
  login (req, res) {
    const { username, password } = req.body

    User.findOne({ username }, (err, doc) => {
      if (!doc) {
        return res.json({ code: 1, msg: '用户不存在' })
      }

      if (password === doc.password) {
        req.session.userId = doc._id
        return res.json({
          code: 0,
          result: {
            userInfo: doc
          }
        })
      } else {
        return res.json({ code: 1, msg: '密码错误' })
      }
    })
  },
  logout (req, res) {
    req.session.userId = null
    return res.json({ code: 1, msg: '已退出' })
  }
}

module.exports = UserController

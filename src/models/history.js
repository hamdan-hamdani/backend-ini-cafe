const connection = require('../configs/db')

const history = {
  getHistoryById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM history WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getHistoryByAll: (mo) => {
    console.log(mo)
    return new Promise((resolve, reject) => {
      if(mo){
        connection.query('SELECT * , DAY(date) as day FROM history WHERE MONTH(date) = ?', mo, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }else {
        connection.query('SELECT * , MONTHNAME(date) as month, DAY(date) as day FROM history', (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  getHistoryInsert: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ? ', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getHistoryUpdate: (data, id) => {
    console.log(data, id)
    return new Promise((resolve, reject) => {
      connection.query('UPDATE history SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getHistoryDelete: (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM history WHERE id = ? ', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = history

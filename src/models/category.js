const connection = require('../configs/db')

const category = {
  getPagination: (page) => {
    console.log(page + 'hj')
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category LIMIT 2', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
    // return new Promise((resolve, reject) => {
    //     connection.query("SELECT TOP 3 * FROM category  ", (err, result) => {
    //         if (!err) {
    //             resolve(result)
    //         } else {
    //             reject(new Error(err))
    //         }
    //     })
    // })
  },
  getCategoryById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category where id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCategorySortByIdCategory: (idCategory) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT category.namecategory, category.price ,category.nameCategory, category.id FROM category INNER JOIN category ON category.idCategory=category.id WHERE category.id = ?', idCategory, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCategorySortByOrder: (namecategory, order) => {
    // console.log(namecategory + ' hamdan')
    console.log(order)
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM category ORDER BY ${namecategory} ${order}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCategorySort: (namecategory) => {
    // console.log(namecategory + ' hamdan')
    // console.log(order);
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM category ORDER BY ${namecategory}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCategoryBySearch: (search) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category where namecategory = ? || price = ?', [search, search], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllCategory: (sort) => {
    // console.log(typeof ('hamdan'))
    // console.log(sort)
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCategory: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE category SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCategory: (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM category WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertCategory: (data) => {
    // console.log(data)
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO category SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = category

const mysql = require('mysql');

const pool = mysql.createPool({
    host: '45.120.136.152',
    port:"3306",
    user: 'thameem',
    //database: 'nodedb',
    database:'thameem',
    password: 'thameem'
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);

});
//
const items = new Map();
const cities = new Map();
const couponcodes = new Map();

let query1 = 'SELECT * FROM details'
let query2 = 'SELECT * FROM citydetails'
let query3 = 'SELECT * FROM coupons'

queryPromise1 = () => {
    return new Promise((resolve, reject) => {
        pool.query(query1, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log('Items->success')
            //converting the TextRows into map
            for (var i = 0; i < results.length; i++) {
                var tempName = results[i].itemName;
                var tempDesc = results[i].itemDescription;
                var tempPrice = results[i].itemPrice;
                items.set(results[i].itemId, ({ name: tempName, description: tempDesc, price: tempPrice }))
            }
            console.log(items);
            return resolve(results);
        });
    });
};
//
queryPromise2 = () => {
    return new Promise((resolve, reject) => {
        pool.query(query2, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log('cities->success')
            //converting the TextRows into map
            for (var i = 0; i < results.length; i++) {
                cities.set(results[i].pincode, results[i].cityName)
            }
            console.log(cities);
            return resolve(results);
        });
    });
};

queryPromise3 = () => {
    return new Promise((resolve, reject) => {
        pool.query(query3, (error, results) => {
            if (error) {
                return reject(error);
            }
            console.log('couponcodes->success')
            //converting the TextRows into map
            for (var i = 0; i < results.length; i++) {
                couponcodes.set(results[i].couponcode, results[i].description)
            }
            console.log(couponcodes);
            return resolve(results);
        });
    });
};
//
async function sequentialQueries() {
    try {
        const result1 = await queryPromise1();
        const result2 = await queryPromise2();
        const result3 = await queryPromise3();
        // you can do something with the result
        //console.log(result1);
        //console.log(result2);
        //console.log(result3);
    } catch (error) {
        console.log(error)
    }
}

sequentialQueries();
// console.log(items)
// console.log(cities)
// console.log(couponcodes)

module.exports.items = items;
module.exports.cities = cities;
module.exports.couponcodes = couponcodes;
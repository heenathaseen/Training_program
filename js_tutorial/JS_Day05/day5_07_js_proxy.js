// Security is only one of the reasons
// we need a proxy
// However, whatever be the case, Proxies are implemented
// in JavaScript using the Proxy object

const account = {
    accountNumber: '1234567890',
    customerName: 'Firstname Lastname',
    accountBalance: 15000,
    upiId: 'firstname@oksbi',
    email: 'firstname.lastname@abc.com',
    phoneNumber: '9988776655',
}

const acctProxy = new Proxy(account, {
    get: (o, property) => {
        return property in o ? o[property] : '-'
    },

    set: (o, property, value) => {
        o[property] = value
    },

    has: (o, property) => {
        if(property == 'accountNumber') {
            return false
        }
        return property in o
    }
})

// we get the value from the object
// when we need any particular property
console.log(acctProxy.accountNumber)
console.log(account.accountNumber)
console.log('\n')

// we get the value that we choose to send
// note the difference in both cases
console.log(acctProxy.firstName)
console.log(account.firstName)
console.log('\n')

// we can also trap the set
// the changes reflect in the original object
acctProxy.accountBalance = 20000
console.log(acctProxy.accountBalance)
console.log(account.accountBalance)
console.log('\n')

// overriding has will allow us to
// 'hide' certain properties
console.log('accountNumber' in acctProxy)
console.log('accountNumber' in account)
console.log('\n')

console.log('accountBalance' in acctProxy)
console.log('accountBalance' in account)
console.log('\n')
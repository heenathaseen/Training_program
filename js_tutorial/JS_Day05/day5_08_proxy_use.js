// JavaScript does not have private properties
const account = {
    accountNumber: '1234567890',
    customerName: 'Firstname Lastname',
    accountBalance: 15000,
    upiId: 'firstname@oksbi',
    email: 'firstname.lastname@abc.com',
    phoneNumber: '9988776655',
}

console.log(account.accountNumber)
console.log('\n')

// in such a case, we cannot keep things like account number, email, phone number secret
// we can build an object that wraps the original object

let acctProxy = {
    acct: account,
    getBalance: function() {
       return this.acct.accountBalance
    },
    getUpiId: function() {
        return this.acct.upiId
    },
    getAccountNumber: function() {
        return `${'*'.repeat(6)}${this.acct.accountNumber.slice(-4)}`
    }
}
console.log(acctProxy.getAccountNumber())
console.log(acctProxy.getAccountNumber())
console.log('\n')

// however the account object is still accessible directly
console.log(acctProxy.acct.accountNumber)
console.log('\n')



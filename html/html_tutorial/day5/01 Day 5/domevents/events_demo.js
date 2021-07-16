
const event1 = {
    name: 'greet',
    emit: function() {
        console.log(`${this.name} has occurred...`)
        if(this.listeners) {
            this.listeners.forEach(listener => {
                listener(this);
            });
        }
    },
    on: function(listener) {
        if(!this.listeners) {
            this.listeners = new Array()
        }
        this.listeners.push(listener)
    }
}
// note, both event objects are identical
// we have kept the definition this way
// since we have not covered class definitions in JS
const event2 = {
    name: 'farewell',
    emit: function() {
        console.log(`${this.name} has occurred...`)

        if(this.listeners) {
            this.listeners.forEach(listener => {
                listener(this);
            });
        }
    },
    on: function(listener) {
        if(!this.listeners) {
            this.listeners = new Array()
        }
        this.listeners.push(listener)
    }
}

event1.on(event => {
    console.log(`\t1. When ${event.name} happens, I am called`)
})

event1.on(event => {
    console.log(`\t2. When ${event.name} happens, I am also called`)
})

event2.on(event => {
    console.log(`\t3.When ${event.name} happens, I am called`)
})

event1.emit()

setTimeout(() =>{
    event1.emit()
}, 3000)

event2.emit()
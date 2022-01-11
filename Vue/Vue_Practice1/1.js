// this is custom components
Vue.component('cat-list', {
    /*template: `
    <ul>
        <li>cat</li>
    </ul>
    `*/
    props:['cats'],
    template: `
    <ul>
        <li v-for=" cat in cats ">{{cat.name}}</li>
    </ul>
    `
})

new Vue({
    el: '.one',
    data: {
        greeting: 'Hello Vue.js!'
    }
})

new Vue({
    el: '.if-else',
    data: {
        temp: 3
    }
})

new Vue({
    el: '.show',
    data: {
        temp: 1
    }
})

new Vue({
    el: '.ex',
    data: {
        email: 'xd@gg.com'
    }
})

new Vue({
    el: '.loop',
    component:['cat-list'],
    data: {
        cats: [{
                name: 'Luna',
                color: 'white'
            },
            {
                name: 'Bella',
                color: 'golden'
            },
            {
                name: 'Lily',
                color: 'black'
            },
            {
                name: 'Lucy',
                color: 'white'
            },
            {
                name: 'Kitty',
                color: 'golden'
            },
            {
                name: 'Callie',
                color: 'black'
            },
            {
                name: 'Nala',
                color: 'white'
            },
            {
                name: 'Zoe',
                color: 'golden'
            }
        ],
        newcat: ''
    },
    methods: {
        addkitty: function () {
            this.cats.push({
                name: this.newcat
            })
            this.newcat = ''
        }
    },
    filters: {
        thisisafunction: function (value) {
            return value.toUpperCase()
        },
    },
    computed: {
        kittifyname: function () {
            if (this.newcat.length > 1) {
                return this.newcat + 'xdd'
            }
        }
    },
})

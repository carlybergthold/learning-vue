var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message = 'yo you got changed';

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

app3.seen = false;

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
});

app4.todos.push({ text: 'new one'});

var app = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: "I'm an input!"
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Beets'},
            { id: 0, text: 'Bears'},
            { id: 0, text: 'Battlestar Galactica'}
        ]
    }
});

app7.groceryList.push({ id: 4, text: 'BB King with a BB Gun '});


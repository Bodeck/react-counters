var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 1
        };
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    dicrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    render: function () {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', { onClick: this.increment }, 'Increment (+)'),
            React.createElement('button', { onClick: this.dicrement }, 'Dicrement (-)')
        );
    }
});

var counters = [1, 2, 3, 4, 5, 6];

var element = React.createElement('div', {}, counters.map(function (el) {
    return React.createElement(Counter, { key: el });
})
);
ReactDOM.render(element, document.getElementById('app'));


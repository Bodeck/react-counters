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
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    componentDidMount: function() {
        console.log('e.g. assign class or event handler');
    },
    componentWillUnmount: function() {
        console.log('e.g. remove event handler or class');
    },
    render: function () {
        if(isEven(this.props.id)) {
            return React.createElement('div', {id: this.props.id},
                React.createElement('span', {}, 'Licznik ' + this.state.counter),
                React.createElement('button', { onClick: this.increment }, 'Increment (+)'),
                React.createElement('button', { onClick: this.decrement }, 'Decrement (-)')
            );
        } else return null
    }
});

var counters = [1, 2, 3, 4, 5, 6, 7, 8];
var counterElements = counters.map(function(el) {
    return React.createElement(Counter, {key: el, id: el})
});

var element = React.createElement('div', {}, counterElements);

ReactDOM.render(element, document.getElementById('app'));

function isEven(num) {
    return num % 2 === 0
}
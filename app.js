class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    handleClick = (value) => {
        if (value === '=') {
            try {
                this.setState({ input: eval(this.state.input).toString() });
            } catch (e) {
                this.setState({ input: 'Error' });
            }
        } else if (value === 'C') {
            this.setState({ input: '' });
        } else {
            this.setState({ input: this.state.input + value });
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="display">{this.state.input}</div>
                <button onClick={() => this.handleClick('1')}>1</button>
                <button onClick={() => this.handleClick('2')}>2</button>
                <button onClick={() => this.handleClick('3')}>3</button>
                <button onClick={() => this.handleClick('+')}>+</button>
                <button onClick={() => this.handleClick('4')}>4</button>
                <button onClick={() => this.handleClick('5')}>5</button>
                <button onClick={() => this.handleClick('6')}>6</button>
                <button onClick={() => this.handleClick('-')}>-</button>
                <button onClick={() => this.handleClick('7')}>7</button>
                <button onClick={() => this.handleClick('8')}>8</button>
                <button onClick={() => this.handleClick('9')}>9</button>
                <button onClick={() => this.handleClick('*')}>*</button>
                <button onClick={() => this.handleClick('C')}>C</button>
                <button onClick={() => this.handleClick('0')}>0</button>
                <button onClick={() => this.handleClick('.')}>.</button>
                <button onClick={() => this.handleClick('/')}>/</button>
                <button onClick={() => this.handleClick('=')}>=</button>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

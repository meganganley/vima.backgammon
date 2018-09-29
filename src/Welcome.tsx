import * as React from 'react';
import './Hello.css';

export interface Props {
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class Welcome extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);

    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    render() {

        return (
            <div className="container">
                Welcome to <br></br>
                BACKGAMMON{getExclamationMarks(this.state.currentEnthusiasm)}<br></br>
                <button onClick={this.onDecrement}>-</button><br></br>
                <button onClick={this.onIncrement}>+</button>

            </div>
        );
    }
    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }
}

export default Welcome;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
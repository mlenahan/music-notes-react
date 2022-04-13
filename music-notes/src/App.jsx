import React, { useState } from 'react';

const keys = ['C', 'G']

class AppClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = { key: 'C' }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const randomIndex = Math.floor(Math.random() * keys.length)
        const nextKey = keys[randomIndex]
        this.setState({ key: nextKey })
    }
    render() {
        return (
            <>
                <div>
                    {this.state.key}
                </div>
                <button onClick={this.handleClick}>Click me!</button>
            </>
        );
    }
}

const AppFunc = () => {
    const [key, setKey] = useState('C')
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * keys.length)
        const nextKey = keys[randomIndex]
        setKey(nextKey)
    }
    return (
        <>
            <div>
                {key}
            </div>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}

export default AppClass
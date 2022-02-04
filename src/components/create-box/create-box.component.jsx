import { Component } from 'react/cjs/react.development'
import '../create-box/create-box.styles.css'

class CreateBox extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }

    changeText = (e) => {
        this.setState({text: e.target.value})
    }

    createTask = () => {
        this.props.createTask(this.state.text)
        this.setState({text: ''})
    }

    render(){
        return (
            <div className='create-box'>
                <input type='text' placeholder="Type something here" onChange={this.changeText} value={this.state.text}/>
                <button onClick={this.createTask}>Create Task</button>
            </div>
        )
    }
}

export { CreateBox }
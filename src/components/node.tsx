import * as React from "react";
import '../assets/styles/index.css';
import { data } from '../util/data';

const nodeFrame = {
    width: '155px',
    height: '180px',
    border: '1px blue solid',
    borderRadius: '8px',
    backgroundColor: '#bdeabd',
    margin: '30px'
};

interface props {
    id: string
}

class CreateNode extends React.Component<props> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props.id);

    }

    state = {
        datas: data.node
    }

    removeNode = (item) => {
        const data = this.state.datas.filter( (i) => {
            i.id !== item.id
        });
        this.setState({
            data
        })
    }

    render() {
        return (
            <div style={nodeFrame}>
                <div style={{ textAlign: "center" }}>{this.props.id}</div>
                <button style={{ width: 55 + "px", height: 35 + "px", backgroundColor: "gray" }} onClick={this.removeNode.bind(this, this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default CreateNode;



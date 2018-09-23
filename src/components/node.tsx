import * as React from "react";
import '../assets/styles/index.css'

const nodeFrame = {
    width: '155px',
    height: '180px',
    border: '1px blue solid',
    borderRadius: '8px',
    backgroundColor: '#bdeabd',
    margin: '30px'
};

class CreateNode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={nodeFrame}>
                <button style={{width: 55+"px", height: 35+"px", backgroundColor: "gray"}}>Delete</button>
            </div>
        )
    }
}

export default CreateNode;



import * as React from "react";
import { data } from '../util/data';
import '../assets/styles/index.css';
import CreateNode from './node';


export interface HelloProps { compiler: string; framework: string; }



// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Dashboard extends React.Component<HelloProps, {}> {


    public state = {
        datas: data.node,
        node: CreateNode
    }

    createNewNode = () => {
        this.setState({
            node: this.state.node
        })
    };

    eachCompnent = (i) => {
        const idNode = this.state.datas[i].id;
        return (
            <CreateNode key={i} id={idNode}>
            </CreateNode>
        );
    }


    render() {
        const nodeMessage = this.state.node;
        return (
            <div className="bo-dy">
                <h1 style={{ float: "left" }}>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <div className="header-button">
                    <button onClick={this.createNewNode.bind(this)}>Create node message</button>
                </div>
                <div className="content-node">
                    {this.state.datas.map(this.eachCompnent.bind(this))}
                </div>
            </div>
        );
    }
}
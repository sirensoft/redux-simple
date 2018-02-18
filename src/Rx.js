import React,{Component} from 'react'
import {connect} from 'react-redux';

class Rx extends Component{
    constructor(props){
        super(props)
        this.state={
            rxname :''
        }
        console.log("in store",props)
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.rxAdd(this.state.rxname)
        this.setState({
            rxname:''
        })
    }
    onChange=(e)=>{
        this.setState({
            rxname:e.target.value
        })
    }
    
    render(){
        return(
            <div >
                <form onSubmit={this.onSubmit}>
                    <input placeholder='กรอกชื่อยา Enter' value={this.state.rxname} onChange={this.onChange} />
                </form>
                <hr/>
                <ul>
                    {
                        this.props.rx.map((val,index)=>(
                            <li key={index}>{val}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        rx:state.rx
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        rxAdd:(data)=>{
            dispatch({
                type:'Add',
                playload:data
            })
        },
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Rx)
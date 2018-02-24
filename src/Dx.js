
import React,{Component} from 'react'
import Keypress from 'react-keypress';


class Dx extends Component{
    constructor(props){
        super(props)
        this.state = {
            dxcode:'',
            dxcodes:[]
        }
    }
    onChange=(e)=>{
        this.setState({
            dxcode:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        let arr = this.state.dxcodes;
        arr.push(this.state.dxcode)
        this.setState({
            dxcodes:arr,
            dxcode:''
        })
    }
    
    keyPress(e){
        console.log('key',e.key)
        
    }


    render(){
        return(
            <div >
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.dxcode} onChange={this.onChange}  onKeyPress={this.keyPress}   placeholder="กรอกรหัสโรค Enter"/>
                   
                </form>
                <hr/>
                <ul>
                {
                    this.state.dxcodes.map((val,index)=>{
                        return <li key={index}>{val}</li>
                    })
                }
                </ul>
                
            </div>
        )
    }
}

export default Dx;
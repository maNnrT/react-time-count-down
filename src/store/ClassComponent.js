import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            a:'nu',
            age:22,
            isMale:false,
            currentSecond:0,
        }
    }
    componentDidMount(){
        this.timer =setInterval(()=>{
            this.setState(pre=>({
                currentSecond: pre.currentSecond -1,
            }))
        },1000)
    }
    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
  render() {
    const {a,age,isMale} = this.state
    console.log('classComponent:',a,age,isMale);
    return (
      <div>
        Hello {this.props.name} (ClassComponent)
      </div>
    )
  }
}

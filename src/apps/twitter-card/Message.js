import React from "react"
class Message extends React.Component{
        constructor(props){
            super(props)

        }
        render(){
            return (<div className="message">
                {this.props.message}
            </div>)
        }
}
export default Message;
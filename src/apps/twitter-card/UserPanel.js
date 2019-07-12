import React from "react"
import '../twitter-card/UserPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class UserPanel extends React.Component{
        constructor(props){
            super(props)

        }
        render(){
            return (
            <div className="user-name-conatiner">
                <div className="user-name">{this.props.user.name}
                    <span className="postDate">{this.props.date}</span>
                    <FontAwesomeIcon color="#7c7c7c" className="chevron" icon="chevron-down" />
                    <span className="u-cb"></span>
                </div>
                <div className="handle">{this.props.user.handle}</div>
            </div>)
        }
}
export default UserPanel;
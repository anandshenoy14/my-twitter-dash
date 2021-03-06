import React from "react"
import UserPanel from "./UserPanel"
import Message from "./Message"
import InteractionPanel from "./InteractionPanel"
import '../twitter-card/Card.css'
class Card extends React.Component{
        constructor(props){
            super(props)
        }
        componentWillMount(){
        }
        componentDidMount(){
            
        }
        componentDidUpdate(){
        }
        shouldComponentUpdate(){
        }
        render(){
            var style = {
                backgroundImage: 'url(' + this.props.card.user.avatarUrl + ')'
            }
            return (<div className="cardContainer">
                <div className="user-panel">
                    <div style={style} className="profile">
                    </div>
                    <UserPanel user={this.props.card.user} date={this.props.card.postedDate}></UserPanel>
                </div>
                <Message message={this.props.card.message}></Message>
                <InteractionPanel interactions={this.props.card.interactions}></InteractionPanel>
            </div>)
        }
}
export default Card;
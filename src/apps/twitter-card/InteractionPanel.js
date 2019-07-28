import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class InteractionPanel extends React.Component{
        constructor(props){
            super(props)

        }
        render(){
            const interactions = this.props.interactions.map(interaction=>{
                return (
                    <span className="interaction">
                        {interaction.type === "likes" ?
                            <FontAwesomeIcon color="#ff0000" className="myIcon" icon="heart" /> : interaction.type === "retweets" ?
                            <FontAwesomeIcon color="#3700B3" className="myIcon" icon="retweet" />: <FontAwesomeIcon color="#6200EE" className="myIcon" icon="reply" />
                        }
                        <span>{interaction.number}</span>
                    </span>
                )
            })
            return (
            <div className="interactionPanel">
                {interactions}
            </div>)
        }
}
export default InteractionPanel;
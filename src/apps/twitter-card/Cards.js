import React, { Component } from 'react';
import Card from './Card'
class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            "cards" : [],
            "page"  : 0,
            "limit" : 4
        }
    }
    componentDidMount(){
        let _this = this;
        window.addEventListener('load',(e)=>{
            document.onscroll= function(e){
                if(window.innerHeight + window.scrollY + 1 > document.body.clientHeight + 20){
                    const currentStart = _this.state.page;
                    const newStart = currentStart + _this.state.limit;
                    
                    fetch(`http://localhost:4000/cards?_limit=${_this.state.limit}&_start=${newStart}`)
                    .then((r)=>r.json())
                    .then((data)=>{
                        if(data && data.length > 0){
                            let new_cards = _this.state.cards.concat(...data);
                            _this.setState({"page" : newStart,"cards" : new_cards});
                        }
                    })
                }
            }
        })
    }
    render() {
        let cards = [...this.props.cards,...this.state.cards];
        console.log('all cards ==> '+JSON.stringify(cards));
        if(cards.length > 0){
            cards = cards.map(cardData=>{
                return (
                    <Card card={cardData}></Card>
                )
            })
        }
        return (
            <div id="cards" className="cardsContainer">
                {cards}
            </div>
        );
    }
}

export default Cards;

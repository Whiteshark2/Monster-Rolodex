import { Component } from "react";
import '../assets/card-list.styles.css'
import '../assets/card.styles.css'

class CardList extends Component{
    render(){
        const {monster}=this.props
        return(
            <div className="card-list">
                {monster.map((m)=> {
                return (
                  <div className="card-container" key={m.id}>
                    <img src={`https://robohash.org/${m.id}?set=set2&size=180x180`} alt={m.name} />
                    <h2 >{m.name}</h2>
                    <p>{m.email}</p>
                  </div>
                )
              })}
            </div>
        )
    }
}

export default CardList
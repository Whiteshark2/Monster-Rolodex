import { Component } from "react";
import '../assets/search-box.styles.css'

class SearchBox extends Component{
    render(){
        return(
            <div>
                 <input type="search" className="search-box" placeholder="type here ..." onChange={this.props.search}/>
            </div>
        )
    }
}

export default SearchBox
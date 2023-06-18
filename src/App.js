import { Component } from "react";
import CardList from "./components/cardlistComponent";
import SearchBox from "./components/searchBox-component";
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:""
  }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).
  then(users=>this.setState({monsters : users}))
}

onSearchChange=(event)=>{
  const searchField=event.target.value.toLowerCase()
  return this.setState({searchField})}

  render(){
   
      const filterMonster=this.state.monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(this.state.searchField)
        })

    return(
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox search={this.onSearchChange}/>
        <CardList monster={filterMonster}/>
      </div>
    )
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './component/lists'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem =  this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text : e.target.value,
        key : Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const newItems = [...this.state.items,newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const newItem = this.state.items.filter(item => item.key !== key);
    console.log(newItem);
    this.setState({
      items:newItem
    })
  }
  setUpdate(value,key){
    const newValue = this.state.items;
    newValue.map(item =>{
      if (item.key === key){
        item.text = value
      }
    })
    this.setState({
      items:newValue
    })
  }
  render (){
    return (
      
      <header className="App-header">
          <div className='Widget'>
              <form id='to-do-form' onSubmit={this.addItem}>
                <input type='text' placeholder='Enter Text' 
                value={this.state.currentItem.text}
                onChange={this.handleInput}
                />
                <button type='submit'>+</button>
              </form>
              <Lists 
              items= {this.state.items}
              deleteItem = {this.deleteItem}
              setUpdate = {this.setUpdate}
              >

              </Lists>
          </div>
      </header>
    );
  }
}
export default App;

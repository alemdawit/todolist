import React from 'react';
import './App.css';

class Home extends React.Component {
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
    console.log(this.state.items);
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
          </div>
      </header>
    );
  }
}
export default Home;

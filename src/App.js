import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';
import Card from './Card';

class App extends Component {
  constructor(){
    super();

    this.state = {
      lists: STORE.lists,
      allCards: STORE.allCards
    };
  }

  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };


  handleDeleteCard(cardId){
    const newCards = this.state.store.allCards.filter(card => card.id != cardId);
    this.setState({
      lists: this.STORE.lists,
      allCards: newCards
    })
  }

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />))}
            <Card allCards={this.state.allCards} handleDelete={(item) => this.handleDeleteCard(item)} />
          
        </div>
      </main>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utiles/api';
import CategoryList from './src/videos/containers/categoryList';
import Player from './src/player/containers/player';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component{

  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount(){
    const categories = await API.getMovies();
    const movies = await API.getSuggestion(10);
    //console.log(movies);
    
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }

  render() { 
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <ScrollView>
            <Player />
            <Text>Buscador</Text>
            <Text>Categorias</Text>
            <CategoryList list={this.state.categoryList}/>
            <SuggestionList list={this.state.suggestionList}/>
          </ScrollView>
        </Home>
      </Provider>
    )
  }
}


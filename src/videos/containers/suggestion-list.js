import React, { Component } from 'react';
import {
    FlatList,
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Vseparator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component{

    keyExtractor = item => item.id.toString();

    renderEmpty= () => <Empty text="No hay sugerecias :(" />

    renderItem= ({item}) => {
    return (
        <Suggestion {...item} />)
    }

    itemSeparator= () => <Vseparator color= 'blue'/>

    render(){
        return(
            <Layout
            title="Recomendado para ti">
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.itemSeparator}
                    ListEmptyComponent={this.renderEmpty}
                />
            </Layout>
        )
    }
}
export default SuggestionList;
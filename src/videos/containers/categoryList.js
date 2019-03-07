import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Empty from '../components/empty';
import Vseparator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class CategoryList extends Component {

    keyExtractor = item => item.id.toString();

    renderEmpty= () => <Empty text="No hay sugerecias :(" />

    renderItem= ({item}) => {
    return (
        <Suggestion {...item} />)
    }

    itemSeparator= () => <Vseparator color= 'blue'/>

    render(){
        return(
            <View>
                 <FlatList
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.itemSeparator}
                    ListEmptyComponent={this.renderEmpty}
                />
            </View>
        )
    }
}
export default CategoryList
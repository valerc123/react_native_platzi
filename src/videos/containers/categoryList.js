import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Empty from '../components/empty';
import Hseparator from '../../sections/components/horizontal-separator';
import Layout from '../components/category-list-layout';
import Category from '../components/category';

class CategoryList extends Component {

    keyExtractor = item => item.id.toString();

    renderEmpty= () => <Empty text="No hay sugerecias :(" />

    renderItem= ({item}) => {
    return (
        <Category {...item} />)
    }

    itemSeparator= () => <Hseparator color= 'blue'/>

    render(){
        return(
            <Layout title="Categorias">
                <FlatList
                    horizontal
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
export default CategoryList



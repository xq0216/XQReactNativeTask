import React from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import NovelListItem from "../components/NovelListItem"
import GetData from "../common/GetData";
import AppConstants from "../common/AppConstants";

export default class NovelList extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
        { 
            listData: []
        };
    };
    
    //渲染每行
    renderItem({item}){
        return(
            <NovelListItem 
                data = {item}
                onPressItem={this.showDetails.bind(this)}
            />
        );
    };

    //显示详情
    showDetails(item){
        
    }

    //获取版本列表的数据
    getData(){
        var param = {
            name: "诛仙"
        }
        GetData.getRequest(AppConstants.urlList,param)
        .then((resp)=>{
            if(resp && resp.code == 200){
                this.setState({
                    listData:resp.data
                })    
            }
        });
    }

    render() {
        return (
            <View style= {styles.bgContent}>
                <FlatList style= {styles.versionListView}
                    data = {this.state.listData}
                    renderItem={this.renderItem.bind(this)}
                    // keyExtractor={(item) => item.id}
                />
            </View>
        );
    }

    componentDidMount(){
        // this.props.navigation.setParams({ refreshData: this.getData.bind(this)});
        this.getData();
    }

}


const styles = StyleSheet.create({
    bgContent:{
        flex:1,
        backgroundColor:'#fff'
    },
    versionListView: {
        marginRight:0,
        flexDirection: 'column',
    }
});
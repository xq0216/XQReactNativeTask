import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const screenW = config.width;

export default class NovelListItem extends React.Component{
	// 点击item
	_onPress(){
		this.props.onPressItem (this.props.version);	
	};
	
	render(){
		var item = this.props.data;

		return(
			<TouchableOpacity style = {styles.item} {...this.props} onPress={this._onPress.bind(this)}>
				<Text style={styles.title} numberOfLines={1}>
					{item}
	            </Text>
			</TouchableOpacity>
		)
	}
}

var styles = StyleSheet.create({
	item:{
		flexDirection: 'row',  
        borderBottomWidth: 1,
		borderBottomColor: '#DCDCDC',
		backgroundColor:'#fff',
		// backgroundColor:'blue',
		height:50,
		width:screenW,
		
	},
	title:{
		padding:0,
		margin:0,
		marginLeft:10,
		fontSize:17,
		// backgroundColor:'red',
		alignSelf:'center',
	}

});



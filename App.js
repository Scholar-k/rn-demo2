import React from 'react';
import { Image } from 'react-native';
import Home from './view/home/View';
// import Project from './view/project/View';
// import Statis from './view/statis/View';
// import Data from './view/data/View';
// import Polling from './view/polling/View';
// import Account from './view/account/View';
import Login from './view/component/Login';
// import Detail from './view/project/Detail';
import { TabNavigator, createStackNavigator } from 'react-navigation';
// const loginImg = require('./resource/imgs/logo.png')

const App = createStackNavigator({
  Home: { screen: Home,
  	navigationOptions: {
	  	header: null,
	  }
	  // navigationOptions: {
	  // 	title: '咸亨国际某某项目',
	  // 	headerStyle: {
	  // 		backgroundColor: '#262626',
	  // 	},
	  //   headerTitleStyle: {
	  //     color: '#F9CC74',
	  //   },
	  //   headerLeft: (<Image style={{width:50,height:50,marginLeft:5}} source={loginImg} />),
	  //   headerRight: (<Image style={{width:50,height:50,marginRight:5,borderRadius:25}} source={loginImg} />),
	  // }
	},
  Login: { screen: Login,
	  navigationOptions: {
	  	header: null,
	  }
	},
  // Detail: { screen: Detail },
});

export default App
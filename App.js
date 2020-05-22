import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './screens/PageOne';
import SecondPage from './screens/PageTwo';
import ThirdPage from './screens/PageThree';
import CustomDrawer from './CustomDrawer';
global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const First_Page = createStackNavigator({
  First: {
    screen: FirstPage,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 1',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: () => (
        <Icon
        reverse 
  name='arrow-left'
  type='font-awesome'
  color='#000'
  onPress={() => {navigation.goBack(null)  
  }} />      ),
      headerStyle: {
        backgroundColor: '#F9AA33',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Second_Page = createStackNavigator({
  Second: {
    screen: SecondPage,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 2',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: () => (
        <Icon
        reverse 
  name='arrow-left'
  type='font-awesome'
  color='#000'
  onPress={() => {navigation.goBack(null)  
  }} />      ),
      headerStyle: {
        backgroundColor: '#F9AA33',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: ThirdPage,
    navigationOptions: ({ navigation }) => ({
      title: 'Page 3',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: () => (
        <Icon
        reverse 
  name='arrow-left'
  type='font-awesome'
  color='#000'
  onPress={() => {navigation.goBack(null)  
  }} />
      ),
      headerStyle: {
        backgroundColor: '#F9AA33',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator(
  {
    FirstPageLink: {
      screen: First_Page,
      navigationOptions: {
        drawerLabel: 'Screen 1',
      },
    },
    SecondPageLink: {
      screen: Second_Page,
      navigationOptions: {
        drawerLabel: 'Screen 2',
      },
    },
    ThirdPageLink: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Screen 3',
      },
    },
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: Dimensions.get('window').width - 150,
  }
);
export default createAppContainer(DrawerNavigatorExample);
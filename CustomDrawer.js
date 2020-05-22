import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CustomDrawer extends Component {
  constructor() {
    super();
    this.proileImage =
      'https://webstockreview.net/images/profile-icon-png.png';
   this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'First Screen',
        screenToNavigate: 'FirstPageLink',
      },
      {
        navOptionThumb: 'user',
        navOptionName: 'Second Screen',
        screenToNavigate: 'SecondPageLink',
      },
      {
        navOptionThumb: 'cog',
        navOptionName: 'Third Screen',
        screenToNavigate: 'ThirdPageLink',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image
          source={{ uri: this.proileImage }}
          style={styles.sideMenuProfileIcon}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#FEDB80' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} type="font-awesome" size={25} color="#000" />
              </View>
              <TouchableOpacity  onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                }}
               >
                {item.navOptionName}
              </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});
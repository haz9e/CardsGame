import React from 'react';
import { 
  View,
  ScrollView,
  Platform,
  StyleSheet,
  Text
} from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={{ height: 50, backgroundColor: 'red' }}>
          <Text>
            Game
          </Text>
        </View>
        <View style={{ height: 50, backgroundColor: 'red' }}>
          <Text>
            Cartes
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

GameScreen.navigationOptions = {
  title: 'Game Screen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 0,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});

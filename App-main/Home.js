import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image source={require('./assets/pfp.png')} style={styles.profilePic} />
      </View>
      <Text style={styles.title}>Your Insights</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.tile}>
            <Image source={require('./assets/Scan.png')} style={styles.icon} />
            <Text style={styles.bTitle}>Scan new</Text>
            <Text style={styles.count}>483</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tile}>
            <Image source={require('./assets/Counterfeit.png')} style={styles.icon} />
            <Text style={styles.bTitle}>Counterfeits</Text>
            <Text style={styles.count}>32</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.tile}>
            <Image source={require('./assets/Success.png')} style={styles.icon} />
            <Text style={styles.bTitle}>Success</Text>
            <Text style={styles.count}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tile}>
            <Image source={require('./assets/Directory.png')} style={styles.icon} />
            <Text style={styles.bTitle}>Directory</Text>
            <Text style={styles.count}>26</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.exploreMore}>
        <Text style={styles.title}>Explore More</Text>
        <TouchableOpacity>
          <Image source={require('./assets/Arrow.png')} style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'lighter',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tile: {
    flex: 1, 
    margin: 10, 
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
  },
  bTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 6,
  },
  icon: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  count: {
    color: 'gray',
    marginBottom: 10,
  },
  exploreMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    marginTop: -20,
    width: 29,
    height: 16,
  },
});

export default HomeScreen;

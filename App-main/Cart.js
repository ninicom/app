import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CartItem = ({ title, price, image }) => (
  <View style={styles.itemContainer}>
    <Image source={require(`./assets/${image}.png`)} style={styles.image} />
    <View>
      <Text>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
);

const CartScreen = () => {
  const items = [
    { title: "Lauren's Orange Juice", price: '₹149', image: 'OJ' },
    { title: "Baskin's Skimmed Milk", price: '₹129', image: 'Milk' },
    { title: "Marley's Aloe Vera Lotion", price: '₹1249', image: 'Lotion' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Image source={require('./assets/BackArrow.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Your Cart 👍</Text>
      {items.map((item, index) => (
        <CartItem key={index} title={item.title} price={item.price} image={item.image} />
      ))}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.price}>₹1,527</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor:'white' },
  backArrow: { width: 40, height: 40, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10, padding: 10,
   backgroundColor: '#f0f0f0', borderRadius: 10, },
  image: { width: 50, height: 50, marginRight: 10 },
  price: { color: 'orange', fontWeight: '500', fontSize: 16 },
  footer: { marginTop: 20 },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  total: { fontWeight: '500', fontSize: 16 },
  button: { backgroundColor: 'orange', padding: 10, borderRadius: 8 },
  buttonText: { color: 'white', fontWeight: '500', textAlign: 'center', fontSize: 16, padding: 6 },
});

export default CartScreen;

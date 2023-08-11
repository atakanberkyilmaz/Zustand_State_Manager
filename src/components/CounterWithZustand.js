import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
 
import useStore from "../store/useStore"

const CounterWithZustand = () => {
    const count = useStore((state) => state.count);
    const data = useStore((state) => state.increase);

  return (
    <View style = {styles.container}>
      <Text style= {styles.text}>{count}</Text>
      <Button title = "Arttır" onPress={increase}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 39,
    },
});
export default CounterWithZustand;
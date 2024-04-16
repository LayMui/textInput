/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text, 
  TextInput
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Calendar } from 'react-native-calendars';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
          <Button
            title="Ahua Component RN"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
/>


<View
  style={{
    marginTop: 20,
    width: 115
  }}
>
</View>
<View>


<TextInput
        style={styles.input}
        textAlign={'center'}
      />

 </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

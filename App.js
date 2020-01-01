import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Question from './components/question';
import Example from './components/example';


const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View>
              <Text>This is working</Text>
            </View>
            <Question asked="What is your name?" multipleChoice="false"></Question>
            <Question asked="Are you Male or Female?" multipleChoice="true" optionOne="Male" optionTwo="Female"></Question>
            <Example></Example>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fc4',
  },
  
});

export default App;

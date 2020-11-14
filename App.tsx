import { BlurView } from '@react-native-community/blur';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header, StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import {
  ConfigScreen, HomeScreen
} from "./src/index";


declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();

const myHeader = (props: StackHeaderProps) => {
  return(
    <BlurView blurType="xlight" blurAmount={20} blurRadius={1} style={ {backgroundColor:'transparent', position:"absolute", width:"100%" }} >
      <Header {...props} />
     </BlurView>
    ) 
    
};

const App = () => {
  return (
    <>
      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={HomeScreen.navigationOptions}

            options={{
              header: (props) => myHeader(props),
              headerStyle: {
                backgroundColor: 'transparent'
            }
            }}
          />


          <Stack.Screen
            name="Config"
            component={ConfigScreen}
          />


        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

export default App;

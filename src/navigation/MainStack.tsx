import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import MoviesList from '../screens/MoviesList';
import MovieDetails from '../screens/MovieDetails';

export type MainStackParams = {
  Splash: undefined;
  MoviesList: undefined;
  MovieDetails: {
    id: number;
    name: string;
  };
};

const MainStack = createStackNavigator<MainStackParams>();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
    <MainStack.Screen component={MoviesList} name="MoviesList" options={{ title: 'Characters' }} />
    <MainStack.Screen component={MovieDetails} name="MovieDetails" />
  </MainStack.Navigator>
);

/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
LogBox.ignoreLogs(['Setting a timer']);
AppRegistry.registerComponent(appName, () => App);

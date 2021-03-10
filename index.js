/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import Main from './src/Main';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Main);

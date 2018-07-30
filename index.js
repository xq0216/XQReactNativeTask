/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './src/common/Config';
import NovelList from './src/pages/NovelList'

AppRegistry.registerComponent(appName, () => NovelList);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Resul, Imagens} from './src/layouts/App3';
import App from './src/App';
import Principal from './src/layouts/Principal';
import {name as appName} from './app.json';
import PizzaTranslator from './src/layouts/PizzaTranslator';
import ListaFlat from './src/layouts/ListaFlat';
import App2 from './src_aplicativo/App2';

// AppRegistry.registerComponent(appName, () => Resul, Imagens);
AppRegistry.registerComponent(appName, () => App2);
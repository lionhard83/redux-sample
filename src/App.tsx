import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './components/Counter';
import { Theme } from './components/Theme';

function App() {
  
  return (
    <Provider store={store}>
      <Counter></Counter>
      <Theme />
    </Provider>
  );
}

export default App;

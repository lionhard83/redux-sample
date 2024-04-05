import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './components/Counter';
import { Theme } from './components/Theme';
import { Person } from './components/Person';
import { ShowPerson } from './components/ShowPerson';

function App() {
  
  return (
    <Provider store={store}>
      <Counter />
      <Theme />
      <Person />
      <ShowPerson />
    </Provider>
  );
}

export default App;

import './App.css';
import { Provider } from 'react-redux';
import { Counter } from './components/Counter';
import { Theme } from './components/Theme';
import { Person } from './components/Person';
import { ShowPerson } from './components/ShowPerson';

import { store } from './redux/store';
import { Posts } from './components/Posts';
import { useState } from 'react';
function App() {
  const [state, setState] = useState(false);
  
  return (
    <Provider store={store}>
      <button onClick={() => setState(state => !state)}>Toggle</button>
      {state && <Posts />}
      {/* <Counter />
      <Theme />
      <Person />
      <ShowPerson /> */}
    </Provider>
  );
}

export default App;


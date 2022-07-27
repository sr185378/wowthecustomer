import './App.css';
import Menu from './Component/Menu';
import { Provider } from 'react-redux';
import store from './Component/Stores/store';

function App() {
  return (
    <Provider store={store}>
      <div className="Container App">
        <Menu />
      </div>
    </Provider>
  );
}

export default App;

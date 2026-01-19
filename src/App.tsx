import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

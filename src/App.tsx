import Nav from './components/Nav.tsx';
import RouterNav from './router/RouterNav.tsx'
import './App.css';

function App() {


  return (
    <div>
      <div className="header-container">
        <img src="logosimp.png" />
        <p>Offering Physical Therapy Soon!</p>
      </div>
      <Nav />
      <RouterNav />
    </div>
  )
}

export default App

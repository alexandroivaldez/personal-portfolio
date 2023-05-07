import './App.css'
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainArea from './components/MainArea/MainArea';
import RightMenu from './components/RightMenu/RightMenu';

function App() {

  const name = "Alexandro Valdez";
  const username = "@alexandroivaldez";

  return (
      <div className="app-container">
        <LeftMenu />
        <MainArea name={name} username={username} />
        <RightMenu />
      </div>
  )
}

export default App

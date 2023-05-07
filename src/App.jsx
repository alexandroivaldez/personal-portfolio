import './App.css'
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainArea from './components/MainArea/MainArea';
import RightMenu from './components/RightMenu/RightMenu';

function App() {

  return (
      <div className="app-container">
        <LeftMenu />
        <MainArea />
        <RightMenu />
      </div>
  )
}

export default App

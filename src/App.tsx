import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';

function App() {

  return (
    <>
    <div className="container h-max p-6 text-white" style={{height: '100vh'}}>
      <div className="rounded-2xl bg-blue-700 p-6" style={{height: '100vh'}}>
        <header className="pb-8 mb-8 border-b border-b-blue-400">
          <Toolbar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={(
              <Home/>
            )}/>
            <Route path="/about" element={(
              <About/>
            )}/>
            <Route path="/contacts" element={(
              <Contacts/>
            )}/>
          </Routes>
        </main>
      </div>
    </div>
    </>
  )
}

export default App

import './App.css';
import Middlepart from './component/middle/Middlepart';
import Rightpart from './component/rightside/Rightpart';
import Sidebar from './component/sidebar/Sidebar';

function App() {
 
  return (
    <div className='container'>
      <Sidebar />
      <Middlepart/>
      <Rightpart />
    </div>
  );
}

export default App;

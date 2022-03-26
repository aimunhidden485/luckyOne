import logo from './logo.svg';
import './App.css';
import Shop from './components/shop/Shop';
import Question from './components/Question/Question';

function App() {
  
  return (
   <div>
     <div className="header">
       <h3>Skincare Station</h3>
      </div>
      <div>
       <Shop></Shop>
     </div>
     <Question></Question>
   </div>
  );
}

export default App;

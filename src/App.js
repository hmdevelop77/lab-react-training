import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';


function App() {
  return (
    <div className="App">
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14").toLocaleString()}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11").toLocaleString()}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings lang="de">Ludwig</Greetings>
<br></br>
<Greetings lang="es">François</Greetings>
    </div>
  );
}



export default App;

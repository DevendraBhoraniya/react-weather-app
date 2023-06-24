import './App.css';
import Search from './components/search/Search';
import Current_weather from './components/search/current-weather/current_weather';

function App() {

  const onSearchChange = (searchdata) =>{
    console.log(searchdata);
  }

  return (
    <div className="container">
       <Search onSearchChange={onSearchChange} />
       <Current_weather />
    </div>
  ); 
}

export default App;

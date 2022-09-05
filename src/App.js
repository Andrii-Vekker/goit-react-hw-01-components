import './App.css';
import Profile from './components/profile';
import Statistics from "./components/Statistics"
import user from "./user.json"
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <Profile 
        key={1}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
       dataStat = {data}
      />
    </div>
  );
};

export default App;

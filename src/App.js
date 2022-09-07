import './App.css';
// import {} from 'styled-components'
import Profile from './components/profile/profile';
import Statistics from "./components/statistics/Statistics"
import user from "./user.json"
import data from "./data.json"

function App() {
  return (
    <div>
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

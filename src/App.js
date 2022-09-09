import './App.css';
// import {} from 'styled-components'
import Profile from './components/profile/profile';
import Statistics from "./components/statistics/Statistics"
import FriendsList from 'components/friends/friends';
import user from "../src/data/user.json"
import data from "../src/data/data.json"
import friends from "../src/data/friends.json"
import items from "../src/data/transactions.json"
import { TransactionHistory } from 'components/transactions/transactions';

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
        title="Upload stats" 
       stats = {data}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={items}/>
    </div>
  );
};

export default App;

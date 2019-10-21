import React from 'react';
import Profile from '../Profile/Profile';
import userJson from '../../data-json/user.json';
import Stats from '../Stats/Stats';
import stats from '../../data-json/stats.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../data-json/friends.json';
import TransactionHistory from '../Transactions/TransactionHistory';
import transactions from '../../data-json/transaction.json';

const App = () => (
  <div>
    <Profile user={userJson} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;

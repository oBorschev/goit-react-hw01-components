import React from 'react';
import Profile from '../Profile/Profile';
import userJson from '../../data-json/user.json';
import Stats from '../Stats/Stats';
import FriendList from '../FriendList/FriendList';
import friends from '../../data-json/friends.json';
import TransactionHistory from '../Transactions/TransactionHistory';
import transactions from '../../data-json/transaction.json';

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => {
  return (
    <>
      <div>
        <Profile user={userJson} />
      </div>
      <div>
        <Stats title="Upload stats" stats={stats} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;

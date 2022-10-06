import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './Firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //? User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //? User is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks } from './redux/tasks/tasks.actions';
import Header from './comps/header/header';
import List from './comps/list/list';
import ProgressBar from './comps/progress-bar/progress-bar';
import './App.css';

function App({ getTasks }) {
  useEffect(() => {
    getTasks();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='center'>
      <Header />
      <List />
      <ProgressBar />
    </div>
  );
}

export default connect(null, { getTasks })(App);

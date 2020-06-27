import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Title, Completed } from './header.styles';

const Header = ({ tasks }) => {
  const { isCompleteTotal, tasksTotal } = tasks;

  let percentage = (isCompleteTotal / tasksTotal) * 100;

  return (
    <Navbar>
      <Title>Activity 01:</Title>
      {percentage === 100 ? <Completed>Completed</Completed> : null}
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(Header);

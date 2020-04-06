import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h2>About {props.name} Student</h2>
      <p lang="en">Hey I'm a student and this is my crib!</p>
      <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Sally Student" />
    </header>
  );
};
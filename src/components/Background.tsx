import React from 'react';

function Background() {
  const scrollContainer = document.getElementById('scroll-container');
  const colors = ['#B16C33', 'black', 'black'];

  document.addEventListener('scroll', function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    const colorIndex = Math.floor(scrollPercentage / (100 / colors.length));
    const backgroundColor = colors[colorIndex];

    scrollContainer!.style.backgroundColor = backgroundColor;
  });
}

export default Background;

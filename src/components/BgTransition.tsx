const scrollContainer = document.getElementById('scroll-container');
const colors = ['red', 'green', 'blue']; // Array of background colors

document.addEventListener('scroll', function () {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  const colorIndex = Math.floor(scrollPercentage / (100 / colors.length));
  const backgroundColor = colors[colorIndex];
  console.log(backgroundColor);

  scrollContainer!.style.backgroundColor = backgroundColor;
});

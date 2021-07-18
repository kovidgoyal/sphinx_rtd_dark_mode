/*jshint esversion: 6 */

(function () {

const createThemeSwitcher = () => {
  let btn = document.createElement('BUTTON');
  btn.className = 'theme-switcher';
  btn.id = 'themeSwitcher';
  btn.innerHTML =
    '<i id=themeMoon class="fa fa-moon-o"></i><i id=themeSun class="fa fa-sun-o"></i>';
  document.body.appendChild(btn);

  if (localStorage.getItem('theme') === 'dark') $('#themeMoon').hide(0);
  else $('#themeSun').hide(0);
};

$(document).ready(() => {
  createThemeSwitcher();
  $('#themeSwitcher').click(switchTheme);
});

const switchTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');

    $('#themeSun').fadeOut(200, () => {
      $('#themeMoon').fadeIn(200);
    });
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    $('#themeMoon').fadeOut(200, () => {
      $('#themeSun').fadeIn(200);
    });
  }
};

const loadTheme = () => {
  let theme = localStorage.getItem('theme');

  if (theme !== null) {
    if (theme === 'dark')
      document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    let shade = 'light';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) shade = 'dark';
    localStorage.setItem('theme', shade);
    document.documentElement.setAttribute('data-theme', shade);
  }
};

loadTheme();
})();

const renderGreeting = () => {
  const greeting = document.createElement ('h1');
  greeting.innerText = 'Добро пожаловать!';
  document.body.append (greeting);
};

const renderVisits = () => {
  const visitsInfo = document.createElement ('h2');
  const visits = localStorage.getItem ('visitCounter');

  if (visits) {
    visitsInfo.innerText = `Вы заходили раз: ${visits}`;
    localStorage.setItem ('visitCounter', Number(visits) + 1);
  } else {
    localStorage.setItem ('visitCounter', 1);
    visitsInfo.innerText = `Вы заходили раз: 1`;
  }

  document.body.append (visitsInfo);
};

renderGreeting ();
renderVisits ();

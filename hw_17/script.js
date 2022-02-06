let timeout = null;
let interval = null;
let isActive = false;

const startBtn = document.getElementById ('start');
const pauseBtn = document.getElementById ('pause');
const timer = document.getElementById ('timer');
const timerAlarm = document.getElementById ('alarm');
const timerSettingForm = document.getElementById ('settings__form');
const timerSetting = document.getElementById ('seconds');
const timerSettingBtn = document.getElementById ('settings-btn');

const formatTime = moment => {
  return String (moment).length < 2 ? `0${moment}` : moment;
};

const renderTimer = ({hours, minutes, seconds}) => {
  const timerText = `${formatTime (hours)}:${formatTime (minutes)}:${formatTime (seconds)}`;
  timer.innerText = timerText;
  timer.classList.remove ('hidden');
};

const getTimeLeft = secondsleft => {
  const hours = Math.floor (secondsleft / 3600);
  const minutes = Math.floor ((secondsleft - hours * 3600) / 60);
  const seconds = secondsleft - hours * 3600 - minutes * 60;

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

const handleSubmit = event => {
  event.preventDefault ();
  timeout = Number (timerSetting.value);
  renderTimer (getTimeLeft (timeout));
  timerAlarm.setAttribute('hidden', "");
};

timerSettingForm.addEventListener ('submit', handleSubmit);

const startTimer = () => {
  isActive = true;

  return new Promise (resolve => {
    interval = setInterval (() => {
      timeout--;
      if (timeout <= 0) {
        isActive = false;

        clearInterval (interval);
        interval = null;
        resolve ();
      }
      timerSettingBtn.setAttribute ('disabled', '');
      timerSetting.setAttribute ('disabled', '');
      const time = getTimeLeft (timeout);
      renderTimer (time);
    }, 1000);
  });
};

const handleStartClick = () => {
  if (isActive || !timeout) {
    return;
  }

  startTimer ().then (() => {
    timer.classList.toggle ('hidden');
    timerAlarm.classList.toggle ('hidden');
    timerSettingBtn.removeAttribute ('disabled', '');
    timerSetting.removeAttribute ('disabled', '');
  });
};

const handlePauseClick = () => {
  isActive = false;
  clearInterval (interval);
  interval = null;
};

startBtn.addEventListener ('click', handleStartClick);
pauseBtn.addEventListener ('click', handlePauseClick);

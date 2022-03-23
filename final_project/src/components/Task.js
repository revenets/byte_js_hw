import {api} from './API.js';

const msToTime = duration => {
  let seconds = Math.floor (duration / 1000 % 60),
    minutes = Math.floor (duration / (1000 * 60) % 60),
    hours = Math.floor (duration / (1000 * 60 * 60) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
};

let interval = null;

export class Task {
  constructor (name, description, taskId) {
    this.name = name;
    this.description = description;
    this.taskId = taskId;
    this.taskContainer = document.createElement ('div');
    this.closeButton = document.createElement ('button');
    this.render ();
  }

  render () {
    const CLASS_NAME = 'todo__list-item';
    this.taskContainer.classList.add ('todo__list-item');

    const taskName = document.createElement ('h3');
    const taskDescription = document.createElement ('p');

    const taskTracker = document.createElement ('div');
    const trackerButton = document.createElement ('button');
    const trackerIcon = document.createElement ('i');
    trackerIcon.classList.add ('fas', 'fa-play');
    trackerButton.append (trackerIcon);
    const trackerCountdown = document.createElement ('span');
    taskTracker.append (trackerButton, trackerCountdown);

    const taskDate = document.createElement ('p');
    const taskCompleteButton = document.createElement ('button');

    taskName.classList.add (`${CLASS_NAME}-task-name`);
    taskDescription.classList.add (`${CLASS_NAME}-task-description`);
    taskTracker.classList.add (`${CLASS_NAME}-timer`);
    trackerButton.classList.add (`${CLASS_NAME}-timer-btn`);
    taskDate.classList.add (`${CLASS_NAME}-task-date`);
    taskCompleteButton.classList.add (`${CLASS_NAME}-task-btn`);
    this.closeButton.classList.add (`${CLASS_NAME}-close-btn`);

    taskName.innerText = this.name;
    taskDescription.innerText = this.description;
    taskDate.innerText = new Date ().toLocaleString (undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      second: '2-digit',
    });
    this.closeButton.innerHTML = '<i class="fas fa-times"></i>';

    api.getTaskById (this.taskId).then (result => {
      trackerCountdown.innerText = msToTime (result.timeTracked);
      if (result.isFinished) {
        this.taskContainer.classList.add ('task-finished');
        taskCompleteButton.innerText = 'Restart';
        trackerButton.setAttribute ('disabled', '');
      } else {
        this.taskContainer.classList.remove ('task-finished');
        taskCompleteButton.innerText = 'Mark as done';
        trackerButton.removeAttribute ('disabled', '');
      }

      trackerButton.addEventListener ('click', () => {
        if (trackerButton.classList.contains ('btn-stop')) {
          trackerButton.classList.remove ('btn-stop');
          trackerIcon.classList.remove ('fa-pause');
          trackerIcon.classList.add ('fa-play');

          clearInterval (interval);
          interval = null;
          api.editTask (this.taskId, {isActive: false});
        } else {
          trackerButton.classList.add ('btn-stop');
          trackerIcon.classList.remove ('fa-play');
          trackerIcon.classList.add ('fa-pause');
          api.editTask (this.taskId, {isActive: true});

          return new Promise (resolve => {
            interval = setInterval (() => {
              api.getTaskById (this.taskId).then (task => {
                trackerCountdown.innerText = msToTime (task.timeTracked);
              });
              resolve ();
            }, 1000);
          });
        }
      });

      taskCompleteButton.addEventListener ('click', () => {
        if (taskCompleteButton.innerHTML === 'Restart') {
          this.taskContainer.classList.toggle ('task-finished');
          trackerButton.toggleAttribute ('disabled');
          taskCompleteButton.innerHTML = 'Mark as done';
          api.editTask (this.taskId, {
            isFinished: false,
          });
        } else {
          this.taskContainer.classList.toggle ('task-finished');
          trackerButton.toggleAttribute ('disabled');
          taskCompleteButton.innerHTML = 'Restart';
          clearInterval (interval);
          interval = null;
          trackerButton.classList.remove ('btn-stop');
          trackerIcon.classList.remove ('fa-pause');
          trackerIcon.classList.add ('fa-play');
          api.editTask (this.taskId, {
            isFinished: true,
          });
        }
      });
    });

    this.closeButton.addEventListener ('click', () => {
      this.taskContainer.remove ();
      api.removeTask (this.taskId);
    });

    this.taskContainer.append (
      taskName,
      taskDescription,
      taskTracker,
      taskDate,
      taskCompleteButton,
      this.closeButton
    );
  }

  show (div) {
    div.append (this.taskContainer);
  }
}

// {
//   "name": "do something",
//   "description": "do something",
//   "timeTracked": 0,
//   "userId": "6225f8ae4be637e54566d976",
//   "isActive": false,
//   "isFinished": false,
//   "_id": "6236f61b999f5028eb3a2d00",
//   "createdAt": "2022-03-20T09:38:35.505Z",
//   "updatedAt": "2022-03-20T09:38:35.505Z",
//   "__v": 0
// }

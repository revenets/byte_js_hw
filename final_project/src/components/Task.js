import { api } from './API.js';

export class Task {
  constructor (name, description) {
    this.name = name;
    this.description = description;
    this.taskContainer = document.createElement ('div');
    this.closeButton = document.createElement ('button');
    this.render();
  }

  render () {
    const CLASS_NAME = 'todo__list-item';
    this.taskContainer.classList.add ('todo__list-item');

    const taskName = document.createElement ('h3');
    const taskDescription = document.createElement ('p');

    const taskTracker = document.createElement ('div');
    const trackerButton = document.createElement ('button');
    const trackerIcon = document.createElement ('i');
    trackerIcon.classList.add('fas', 'fa-play');
    trackerButton.append(trackerIcon);
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
    trackerCountdown.innerText = '00:00:00';

    trackerButton.addEventListener('click', () => {
        trackerButton.classList.toggle('btn-stop');
        trackerIcon.classList.toggle('fa-pause');
        trackerIcon.classList.toggle('fa-play');

        // API Logic!!!!!!!!!!!!!!!!!!!!!!
        // hw_17

        
    })

    this.closeButton.innerHTML = '<i class="fas fa-times"></i>';
    

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

  setDeleteBtnID (id) {
    this.closeButton.addEventListener ('click', () => {
      this.taskContainer.remove ();
      api.removeTask(id);
    });
  }
}

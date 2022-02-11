const BASE_URL = 'https://jsonplaceholder.typicode.com';
const wrapperContainer = document.querySelector ('.wrapper');


const get = url => {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest ();
    xhr.open ('GET', url);
    xhr.responseType = 'json';

    xhr.send ();

    xhr.onload = () => {
      const {status, response} = xhr;
      if (status === 200) {
        resolve (response);
      } else {
        reject ({
          status,
        });
      }
    };

    xhr.onerror = () => {
      reject ({});
    };
  });
};


const renderPost = ({title, body, id}) => {
  const postContainer = document.createElement ('div');
  postContainer.className = 'post-container';
  postContainer.id = id;

  const postTitle = document.createElement ('h3');
  const postBody = document.createElement ('p');

  postTitle.innerText = title;
  postBody.innerText = body;

  const commentsContainer = document.createElement ('div');
  commentsContainer.classList.add('comments-container');
  commentsContainer.id = `comments-container-${id}`;

  const showButton = document.createElement ('button');
  showButton.classList.add ('comments-btn');
  showButton.innerText = "Show comments";

  postContainer.append (postTitle, postBody, commentsContainer, showButton);
  wrapperContainer.append (postContainer);

  const handlerButtonComments = () => {
    commentsContainer.classList.toggle("active");
    if (commentsContainer.classList.contains("active")) {
        showButton.innerText = "Hide comments";
    } else {
        showButton.innerText = "Show comments";
    }
    postContainer.classList.toggle('active-post');
  }

  showButton.addEventListener("click", handlerButtonComments);
};

const renderComments = ({body, email, postId}) => {
  const commentsContainer = document.getElementById (
    `comments-container-${postId}`
  );

  const comment = document.createElement ('div');
  comment.className = 'comment';

  const commentBody = document.createElement ('p');
  const commentAuthor = document.createElement ('p');

  commentBody.innerText = body;
  commentAuthor.innerText = email;

  comment.append (commentBody, commentAuthor);
  commentsContainer.append (comment);
};

const getComments = id => {
  return get (`${BASE_URL}/comments?postId=${id}`);
};

get (`${BASE_URL}/posts`)
  .then (posts => {
    posts.forEach (post => {
      renderPost (post);
      const {id} = post;
      getComments (id)
        .then (comments => {
          comments.forEach (comment => renderComments (comment));
        })
        .catch (error => {
          console.log (error);
        });
    });
  })
  .catch (err => {
    console.log (err);
  });

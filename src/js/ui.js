export const displayPost = (post, loadComments) => {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <button id="loadCommentsButton">Load Comments</button>
      <div id="commentsContainer"></div>
    </div>
  `;

    const loadCommentsButton = document.getElementById('loadCommentsButton');
    loadCommentsButton.addEventListener('click', () => loadComments(post.id));
};

export const displayComments = comments => {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = comments.map(comment => `
    <div class="comment">
      <h4>${comment.name}</h4>
      <p>${comment.body}</p>
    </div>
  `).join('');
};
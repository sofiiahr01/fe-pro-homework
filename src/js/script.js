import { fetchPostById, fetchCommentsByPostId } from './api.js';
import { displayPost, displayComments } from './ui.js';

const postIdInput = document.getElementById('postIdInput');
const searchPostButton = document.getElementById('searchPostButton');

const loadComments = postId => {
    fetchCommentsByPostId(postId)
        .then(comments => displayComments(comments))
        .catch(error => alert(error.message));
};

searchPostButton.addEventListener('click', () => {
    const postId = parseInt(postIdInput.value, 10);

    if (isNaN(postId) || postId < 1 || postId > 100) {
        alert('Please enter a valid post ID (1-100).');
        return;
    }

    fetchPostById(postId)
        .then(post => displayPost(post, loadComments))
        .catch(error => alert(error.message));
});
export const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPostById = postId =>
    fetch(`${apiUrl}/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Post with ID ${postId} not found.`);
            }
            return response.json();
        });

export const fetchCommentsByPostId = postId =>
    fetch(`${apiUrl}/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch comments.');
            }
            return response.json();
        });
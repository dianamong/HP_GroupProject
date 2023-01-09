let comments = [];
// loadComments();

document.getElementById('comment-add').onclick = function() {
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item) {

        out += `<p class="comments__name" role="alert">${item.name}:</p>`;
        out += `<p class="comments__content" role="alert">${item.body}</p>`;
        out += `<p class="comments__time"><em>${timeConverter(item.time)}</em></p>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    return time;
}
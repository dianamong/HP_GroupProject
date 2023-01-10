let comments = [];
// loadComments();

document.getElementById("comment-add").onclick = function() {
    let commentName = document.getElementById("comment-name");
    let commentBody = document.getElementById("comment-body");

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000),
    };

    const newElement = document.createElement("div");
    newElement.innerHTML = `<p class="comments__name" role="alert">${commentName.value}:</p>
    <p class="comments__content" role="alert">${commentBody.value}</p>
    <p class="comments__time"><em>${timeConverter(Math.floor(Date.now() / 1000))}</em></p>`;

    const commentsWrapper = document.querySelector(".comments__result-item");
    commentsWrapper.appendChild(newElement);

    commentName.value = "";
    commentBody.value = "";

    comments.push(comment);

    saveComments();
    showComments();
};

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    if (localStorage.getItem("comments")) comments = JSON.parse(localStorage.getItem("comments"));
    showComments();
}

function showComments() {
    const commentsWrapper = document.querySelector(".comments__result-item");
    console.log(commentsWrapper.children.length);
}

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + " " + month + " " + year;
    return time;
}
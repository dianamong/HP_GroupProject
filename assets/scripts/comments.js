let comments = [];

let form = document.getElementsByClassName("comments__form-group")[0];
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let commentName = document.getElementById("comment-name"); //объявляю переменные для вводимых данных (имя + комментарий)
    let commentBody = document.getElementById("comment-body");

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000),
    };

    const newElement = document.createElement("div"); //создаю новый див, куда буду выводить введенную информацтию (фото + имя + коммент + время)

    const imgUrl = localStorage.getItem("_device_id");
    const imgTag = imgUrl ? `<img url=${imgUrl} alt='avatar' />` : "";

    newElement.innerHTML = `
    ${imgTag}
    <p class="comments__name" role="alert">${commentName.value}:</p>
    <p class="comments__content" role="alert">${commentBody.value}</p>
    <p class="comments__time"><em>${timeConverter(Math.floor(Date.now() / 1000))}</em></p>`;

    const commentsWrapper = document.querySelector(".comments__result-item");
    commentsWrapper.prepend(newElement);

    commentName.value = "";
    commentBody.value = "";

    comments.push(comment);

    // saveComments();

    showButtons();
    showComments();

    let block = document.getElementById("block"); // получение блока с комментариями для слайдера
    block.scrollTo(0, 0);
});

// function saveComments() {
//     localStorage.setItem("comments", JSON.stringify(comments));
// }

function loadComments() {
    if (localStorage.getItem("comments")) comments = JSON.parse(localStorage.getItem("comments"));
    showComments();
}

// loadComments();

function showComments() {
    const commentsWrapper = document.querySelector(".comments__result-item");
}

function timeConverter(UNIX_timestamp) {
    // вычисление времени введенного комментария
    let a = new Date(UNIX_timestamp * 1000);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + " " + month + " " + year;
    return time;
}

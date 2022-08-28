//     На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клацнули.
// 8 Нижче інформація про пост, вивести всі коментарі поточного поста
// (endpoint  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let post = localStorage.getItem('post');
JSON.parse(post);

let mainDiv2 = document.createElement('div');
mainDiv2.classList.add('main');

let backButton = document.createElement('button');
backButton.classList.add('backButton');
mainDiv2.appendChild(backButton);
backButton.onclick = function (){
        location.href = '../user-details/user-details.html'
};
backButton.innerText = `< < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < <`;

fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then(response => response.json())
    .then(post => {
        document.body.appendChild(mainDiv2);

        let div = document.createElement('div');
        div.classList.add('mainDiv');
        let p = document.createElement('p')
        p.innerText =`${post.userId} ${post.id} ${post.title} ${post.body}`;
        div.appendChild(p);
        mainDiv2.appendChild(div)
    });
fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
    .then(response => response.json())
    .then(coments => coments.forEach(coments => {
        let div = document.createElement('div');
        div.classList.add('mainDiv');
        let p = document.createElement('p');
        p.innerText =`${coments.postId} ${coments.id} ${coments.name} ${coments.email} ${coments.body}`;
        div.appendChild(p);
        mainDiv2.appendChild(div);
    }));


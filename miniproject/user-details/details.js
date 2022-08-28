// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клацнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для долучення постів використовуйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

let user = localStorage.getItem('user');
JSON.parse(user)

let divMain = document.createElement('div');
divMain.classList.add('mainDivDetails')

let backButton = document.createElement('button');
backButton.classList.add('backButton1');
divMain.appendChild(backButton);

backButton.onclick = function (){
  location.href = '../index.html'
};
backButton.innerText = `< < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < <
< < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < 
< < < < < < < < < < < < < < < < < < < < <`;


fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then(response => response.json())
    .then(users => {
        document.body.appendChild(divMain)

        let div = document.createElement('div');

        let h2 = document.createElement('h2')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')
        div.appendChild(h2)
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)
        div.appendChild(p5)
        divMain.appendChild(div);

        div.classList.add('supDiv');
        h2.innerText = `${users.id} ${users.name} ${users.username}`;
        p1.innerText = `Email ${users.email}`;
        p2.innerText = `Address ${users.address.street}, ${users.address.suite}, ${users.address.city} ,зіп код ${users.address.zipcode},`;
        p3.innerText = `lat, ${users.address.geo.lat} lng, ${users.address.geo.lng}`;
        p4.innerText = `Number ${users.phone} Website ${users.website}`;
        p5.innerText = `Company ${users.company.name} ${users.company.catchPhrase} ${users.company.bs}`;

        divMain.appendChild(div);

        let butt = document.createElement('button');
        butt.innerText = 'post of current user';

        butt.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user}/posts`)
                .then(response => response.json())
                .then(posts => {
                        let ul = document.createElement('ul');
                    butt.disabled = true;
                        for (let post of posts) {
                            let li = document.createElement('li');
                            li.innerText = post.title;
                            ul.appendChild(li);
                            let butt = document.createElement('button')
                            butt.onclick = function () {
                                location.href = `../post-details/post-details.html`
                                localStorage.setItem('post', `${post.id}`);
                            };
                            butt.innerText = 'post details'
                            ul.appendChild(butt)
                        }
                        divMain.appendChild(ul);
                    }
                )
        };

        div.appendChild(butt);
    })































// В index.html
// 1 отримати масив об'єктів з endpoint https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html,
// котра має детальну інформацію про об'єкт на який клацнули.

let divMain = document.createElement('div');
divMain.classList.add('main');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(users => {
        document.body.appendChild(divMain)

        let div = document.createElement('div');
        div.classList.add('mainDiv');

        let h2 = document.createElement('h2')
        h2.innerText = `${users.id}, ${users.name}`;
        div.appendChild(h2)
        divMain.appendChild(div);

        let butt = document.createElement('button');
        butt.innerText = 'Full information';
        butt.onclick = function () {
            location.href = 'user-details/user-details.html'
            localStorage.setItem('user', `${users.id}`);
        };
        div.appendChild(butt);

    }))
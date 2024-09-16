const foods = [{
    img: 'https://img.freepik.com/premium-photo/beautifully-presented-plate-salad-restaurant-table-ai-generated_201606-10610.jpg',
    name: 'Simple salad',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident voluptas numquam pariatur magni in!',
    time: '10 mins ago',
    comment: '98 comments',
}, {
    img: 'https://www.m24.ru/b/d/nBkSUhL2hFAvnsm_Lr6BvMKnxdDs9Zu-yyqYy7jLs2KQeXqLBmmcmzZh59JUtRPBsdaJqSfJd54qEr7t1mNwKSGK7WY=dY4Ivvx8xVWhDNgRip2AgA.jpg',
    name: 'Best FastFood ideas (Yumy)',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident voluptas numquam pariatur magni in!',
    time: '10 mins ago',
    comment: '35 comments',
}, {
    img: 'https://img.freepik.com/premium-photo/salad-with-warm-chicken-tomatoes-lettuce-egg-carrots-white-plate-restaurant-serving-delicious-snack-food_207126-1811.jpg',
    name: 'Why to eat salad?',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident voluptas numquam pariatur magni in!',
    time: '10 mins ago',
    comment: '45 comments',
}
];

const wrapper = document.querySelector('.wrapper');

foods.map( (carde) => {
    wrapper.innerHTML += `
    <div class="card1">
                <img src="${carde.img}" alt="">
                <button class="btn_cook">Cooking</button>
                <div class="glav">
                    <h2>${carde.name}</h2>
                <p class="p_text">${carde.about}</p>
                <div class="pismo">
                    <b><img class="svg_minut" src="data:image/png;base64,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" alt="">${carde.time}</b>
                    <b><img class="svg_comment" src="https://cdn-icons-png.flaticon.com/512/2182/2182946.png" alt="">${carde.comment}</b>
                </div>
                </div>
    `;
}
);

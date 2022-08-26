const team = document.querySelector('.team-member');
const cards = document.getElementsByClassName('card');
const show_text = document.querySelector('.show_text');
for (let i = 3; i < cards.length; i++) {
    cards[i].style.display = 'none';
}

const more = document.getElementById('more');
const more_div = document.getElementById('show_more');

show_more.addEventListener('click', () => {
    if (team.classList.contains('hidden')) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
            team.classList.remove('hidden');
            show_text.textContent = 'Show Less';
        }
    }
    else if (!team.classList.contains('hidden')) {
        for (let i = 3; i < cards.length; i++) {
            cards[i].style.display = 'none';
            team.classList.add('hidden');
            show_text.textContent = 'Show More';
        }
    }
})
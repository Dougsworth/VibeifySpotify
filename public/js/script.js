const moodBtn = [
    {
        id: 1,
        name: 'Happy',
    },
    {
        id: 2,
        name: 'Sad',
    },
    {
        id: 3,
        name: 'Angry',
    },
    {
        id: 4,
        name: 'Excited',
    },
    {
        id: 5,
        name: 'Tired',
    },
    {
        id: 6,
        name: 'Bored',
    },
    {
        id: 7,
        name: 'Anxious',
    },
    {
        id: 8,
        name: 'Stressed',
    },
    {
        id: 9,
        name: 'Calm',
    },
    {
        id: 10,
        name: 'Confused',
    }
]



const moodBtnContainer = document.querySelector('.mood-btn-container');

// function to get random color

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Style the mood-btn to be scattered randomly across the page
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap the elements

    }
}

shuffleArray(moodBtn);

moodBtn.forEach((btn) => {
    moodBtnContainer.innerHTML += `
    <button class="mood-btn btn-outline-primary" id="${btn.id}">${btn.name}</button>
    `
});

// get max top positon to stay within the screen height
const maxTop = window.innerHeight - moodBtnContainer.clientHeight;


const moodBtns = document.querySelectorAll('.mood-btn-container button');
moodBtns.forEach((btn) => {
    moodBtns.forEach((btn) => {
        const randomX = Math.random() * (window.innerWidth - btn.clientWidth);
        const randomY = Math.random() * (maxTop - btn.clientHeight);
        const randomColor = getRandomColor();

        btn.style.backgroundColor = randomColor;
        btn.style.position = 'absolute';
        btn.style.left = randomX + 'px';
        btn.style.top = randomY + 'px';
        btn.style.transition = 'all 0.5s ease';
        btn.style.zIndex = '1';
    })
})

// const moodBtns = document.querySelectorAll('.mood-btn-container button');
// moodBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         moodBtns.forEach((btn) => {
//             btn.classList.remove('active');
//         })
//         btn.classList.add('active');
//     })
// })



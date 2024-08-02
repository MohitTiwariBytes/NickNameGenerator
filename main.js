
const adjectives = ['Speedy', 'Mighty', 'Cool', 'Brave', 'Nimble', 'Sly', 'Wise', 'Bold'];
const nouns = ['Panther', 'Tiger', 'Eagle', 'Lion', 'Wolf', 'Shark', 'Dragon', 'Phoenix'];

function generateNickname() {
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdj} ${randomNoun}`;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    document.getElementById('nickname').textContent = generateNickname();
});

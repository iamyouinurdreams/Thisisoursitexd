// you can look at my src i dont mind
const enterScreen = document.getElementById('enterScreen');
const enterBtn = document.getElementById('enterBtn');
const mainContainer = document.getElementById('mainContainer');
const backgroundMusic = document.getElementById('backgroundMusic');
const rosterBtn = document.getElementById('rosterBtn');
const socialsBtn = document.getElementById('socialsBtn');
const rosterPopup = document.getElementById('rosterPopup');
const closeRoster = document.getElementById('closeRoster');
const discordBtn = document.getElementById('discordBtn');
const telegramBtn = document.getElementById('telegramBtn');
const socialIcons = document.getElementById('socialIcons');

enterBtn.addEventListener('click', () => {
    enterScreen.classList.add('fade-out');
    mainContainer.classList.add('show');
    
    backgroundMusic.play().catch(error => {
        console.log('Autoplay prevented:', error);
    });
    
    setTimeout(() => {
        enterScreen.style.display = 'none';
    }, 1500);
});

rosterBtn.addEventListener('click', () => {
    rosterPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeRoster.addEventListener('click', () => {
    rosterPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

socialsBtn.addEventListener('click', () => {
    socialIcons.classList.toggle('show');
});

discordBtn.addEventListener('click', () => {
    window.open('https://discord.gg/bail', '_blank');
});

telegramBtn.addEventListener('click', () => {
    window.open('https://t.me/exposingcomlarps', '_blank');
});

rosterPopup.addEventListener('click', (e) => {
    if (e.target === rosterPopup) {
        rosterPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        rosterPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.documentElement.style.scrollBehavior = 'smooth';

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'translateY(0) scale(0.98)';
        setTimeout(() => {
            button.style.transform = 'translateY(-3px) scale(1.02)';
        }, 100);
    });
});

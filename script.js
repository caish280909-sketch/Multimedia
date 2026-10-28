// Inisialisasi ikon Lucide
lucide.createIcons();

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tutup menu saat link diklik (Mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Lightbox Fungsi
function openLightbox(src, title, date = '') {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    lightboxImg.src = src;
    lightboxCaption.textContent = date ? `${title} — ${date}` : title;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Members Hub Tabs Switcher
function switchHub(type) {
    const orgContent = document.getElementById('orgContent');
    const humasContent = document.getElementById('humasContent');
    const buttons = document.querySelectorAll('.hub-btn');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (type === 'org') {
        orgContent.classList.add('active');
        humasContent.classList.remove('active');
        event.currentTarget.classList.add('active');
    } else {
        humasContent.classList.add('active');
        orgContent.classList.remove('active');
        event.currentTarget.classList.add('active');
    }
}

// Filter Arsip Sederhana
const filterButtons = document.querySelectorAll('.filter-btn');
const archiveCards = document.querySelectorAll('#archiveGrid .card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        archiveCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Pencarian Arsip
const archiveSearch = document.getElementById('archiveSearch');
if (archiveSearch) {
    archiveSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        archiveCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

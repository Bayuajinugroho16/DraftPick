// Custom database lokal (contoh data untuk hero)
const heroes = [
    { name: 'Aamon', img: '/Assets/HeroPick/aamon.png' },
    { name: 'Akai', img: '/Assets/HeroPick/akai.png' },
    { name: 'Aldous', img: '/Assets/HeroPick/aldous.png' },
    { name: 'Alice', img: '/Assets/HeroPick/alice.png' },
    { name: 'Alpha', img: '/Assets/HeroPick/alpha.png' },
    { name: 'Alucard', img: '/Assets/HeroPick/alucard.png' },
    { name: 'Angela', img: '/Assets/HeroPick/angela.png' },
    { name: 'Argus', img: '/Assets/HeroPick/argus.png' },
    { name: 'Arlot', img: '/Assets/HeroPick/arlot.png' },
    { name: 'Atlas', img: '/Assets/HeroPick/atlas.png' },
    { name: 'Aulus', img: '/Assets/HeroPick/aulus.png' },
    { name: 'Aurora', img: '/Assets/HeroPick/aurora.png' },
    { name: 'Badang', img: '/Assets/HeroPick/badang.png' },
    { name: 'Balmond', img: '/Assets/HeroPick/balmond.png' },
    { name: 'Bane', img: '/Assets/HeroPick/bane.png' },
    { name: 'Barats', img: '/Assets/HeroPick/barats.png' },
    { name: 'Baxia', img: '/Assets/HeroPick/baxia.png' },
    { name: 'Beatrix', img: '/Assets/HeroPick/beatrix.png' },
    { name: 'Beleric', img: '/Assets/HeroPick/beleric.png' },
    { name: 'Benedetta', img: '/Assets/HeroPick/benedetta.png' },
    { name: 'Brody', img: '/Assets/HeroPick/brody.png' },
    { name: 'Bruno', img: '/Assets/HeroPick/bruno.png' },
    { name: 'Carmila', img: '/Assets/HeroPick/carmila.png' },
    { name: 'Cecilion', img: '/Assets/HeroPick/cecilion.png' },
    { name: "Chang'e", img: '/Assets/HeroPick/chang_e.png' },
    { name: 'Chip', img: '/Assets/HeroPick/chip.png' },
    { name: 'Chou', img: '/Assets/HeroPick/chou.png' },
    { name: 'Cici', img: '/Assets/HeroPick/cici.png' },
    { name: 'Claude', img: '/Assets/HeroPick/claude.png' },
    { name: 'Clint', img: '/Assets/HeroPick/clint.png' },
    { name: 'Cyclops', img: '/Assets/HeroPick/cyclops.png' },
    { name: 'Diggie', img: '/Assets/HeroPick/diggie.png' },
    { name: 'Dyroth', img: '/Assets/HeroPick/dyroth.png' },
    { name: 'Edith', img: '/Assets/HeroPick/edith.png' },
    { name: 'Esmeralda', img: '/Assets/HeroPick/esmeralda.png' },
    { name: 'Estes', img: '/Assets/HeroPick/estes.png' },
    { name: 'Eudora', img: '/Assets/HeroPick/eudora.png' },
    { name: 'Fanny', img: '/Assets/HeroPick/fanny.png' },
    { name: 'Faramis', img: '/Assets/HeroPick/faramis.png' },
    { name: 'Floryn', img: '/Assets/HeroPick/floryn.png' },
    { name: 'Franco', img: '/Assets/HeroPick/franco.png' },
    { name: 'Fredrin', img: '/Assets/HeroPick/fredrin.png' },
    { name: 'Freya', img: '/Assets/HeroPick/freya.png' },
    { name: 'Gatotkaca', img: '/Assets/HeroPick/gatotkaca.png' },
    { name: 'Gloo', img: '/Assets/HeroPick/gloo.png' },
    { name: 'Gord', img: '/Assets/HeroPick/gord.png' },
    { name: 'Granger', img: '/Assets/HeroPick/granger.png' },
    { name: 'Grock', img: '/Assets/HeroPick/grock.png' },
    { name: 'Guinevere', img: '/Assets/HeroPick/guinevere.png' },
    { name: 'Gusion', img: '/Assets/HeroPick/gusion.png' },
    { name: 'Hanabi', img: '/Assets/HeroPick/hanabi.png' },
    { name: 'Hanzo', img: '/Assets/HeroPick/hanzo.png' },
    { name: 'Harith', img: '/Assets/HeroPick/harith.png' },
    { name: 'Harley', img: '/Assets/HeroPick/harley.png' },
    { name: 'Hayabusa', img: '/Assets/HeroPick/hayabusa.png' },
    { name: 'Helcurt', img: '/Assets/HeroPick/helcurt.png' },
    { name: 'Hilda', img: '/Assets/HeroPick/hilda.png' },
    { name: 'Hylos', img: '/Assets/HeroPick/hylos.png' },
    { name: 'Irithel', img: '/Assets/HeroPick/irithel.png' },
    { name: 'Ixia', img: '/Assets/HeroPick/ixia.png' },
    { name: 'Jawhead', img: '/Assets/HeroPick/jawhead.png' },
    { name: 'Johnson', img: '/Assets/HeroPick/johnson.png' },
    { name: 'Joy', img: '/Assets/HeroPick/joy.png' },
    { name: 'Julian', img: '/Assets/HeroPick/julian.png' },
    { name: 'Kadita', img: '/Assets/HeroPick/kadita.png' },
    { name: 'Kagura', img: '/Assets/HeroPick/kagura.png' },
    { name: 'Kaja', img: '/Assets/HeroPick/kaja.png' },
    { name: 'Karina', img: '/Assets/HeroPick/karina.png' },
    { name: 'Karrie', img: '/Assets/HeroPick/karrie.png' },
    { name: 'Khaleed', img: '/Assets/HeroPick/khaleed.png' },
    { name: 'Khufra', img: '/Assets/HeroPick/khufra.png' },
    { name: 'Kimmy', img: '/Assets/HeroPick/kimmy.png' },
    { name: 'Lancelot', img: '/Assets/HeroPick/lancelot.png' },
    { name: 'Lukas', img: '/Assets/HeroPick/lukas.png' },
    { name: 'Lapu Lapu', img: '/Assets/HeroPick/lapulapu.png' },
    { name: 'Layla', img: '/Assets/HeroPick/layla.png' },
    { name: 'Leomord', img: '/Assets/HeroPick/leomord.png' },
    { name: 'Lesley', img: '/Assets/HeroPick/lesley.png' },
    { name: 'Ling', img: '/Assets/HeroPick/ling.png' },
    { name: 'Lolita', img: '/Assets/HeroPick/lolita.png' },
    { name: 'Lunox', img: '/Assets/HeroPick/lunox.png' },
    { name: 'Luo Yi', img: '/Assets/HeroPick/luoyi.png' },
    { name: 'Lylia', img: '/Assets/HeroPick/lylia.png' },
    { name: 'Martis', img: '/Assets/HeroPick/martis.png' },
    { name: 'Masha', img: '/Assets/HeroPick/masha.png' },
    { name: 'Mathilda', img: '/Assets/HeroPick/mathilda.png' },
    { name: 'Melissa', img: '/Assets/HeroPick/melissa.png' },
    { name: 'Minotaur', img: '/Assets/HeroPick/minotour.png' },
    { name: 'Minsitthar', img: '/Assets/HeroPick/minsitthar.png' },
    { name: 'Miya', img: '/Assets/HeroPick/miya.png' },
    { name: 'Moskov', img: '/Assets/HeroPick/moskov.png' },
    { name: 'Nana', img: '/Assets/HeroPick/nana.png' },
    { name: 'Natalia', img: '/Assets/HeroPick/natalia.png' },
    { name: 'Nathan', img: '/Assets/HeroPick/nathan.png' },
    { name: 'Nolan', img: '/Assets/HeroPick/nolan.png' },
    { name: 'Novaria', img: '/Assets/HeroPick/novaria.png' },
    { name: 'Odette', img: '/Assets/HeroPick/odette.png' },
    { name: 'Paquito', img: '/Assets/HeroPick/paquito.png' },
    { name: 'Parsha', img: '/Assets/HeroPick/parsha.png' },
    { name: 'Phoveus', img: '/Assets/HeroPick/phoveus.png' },
    { name: 'Popol and Kupa', img: '/Assets/HeroPick/popolandkupa.png' },
    { name: 'Rafaela', img: '/Assets/HeroPick/rafaela.png' },
    { name: 'Roger', img: '/Assets/HeroPick/roger.png' },
    { name: 'Ruby', img: '/Assets/HeroPick/ruby.png' },
    { name: 'Saber', img: '/Assets/HeroPick/saber.png' },
    { name: 'Selena', img: '/Assets/HeroPick/selena.png' },
    { name: 'Silvanna', img: '/Assets/HeroPick/silvanna.png' },
    { name: 'Sun', img: '/Assets/HeroPick/sun.png' },
    { name: 'Suyou', img: '/Assets/HeroPick/suyou.png' },
    { name: 'Terizla', img: '/Assets/HeroPick/terizla.png' },
    { name: 'Thamuz', img: '/Assets/HeroPick/thamuz.png' },
    { name: 'Tigreal', img: '/Assets/HeroPick/tigreal.png' },
    { name: 'Uranus', img: '/Assets/HeroPick/uranus.png' },
    { name: 'Vale', img: '/Assets/HeroPick/vale.png' },
    { name: 'Valentina', img: '/Assets/HeroPick/valentina.png' },
    { name: 'Valir', img: '/Assets/HeroPick/valir.png' },
    { name: 'Vexana', img: '/Assets/HeroPick/vexana.png' },
    { name: 'Wanwan', img: '/Assets/HeroPick/wanwan.png' },
    { name: 'Xavier', img: '/Assets/HeroPick/xavier.png' },
    { name: 'Xborg', img: '/Assets/HeroPick/xborg.png' },
    { name: 'Yin', img: '/Assets/HeroPick/yin.png' },
    { name: 'Yisunshin', img: '/Assets/HeroPick/yisunshin.png' },
    { name: 'Yuzhong', img: '/Assets/HeroPick/yuzhong.png' },
    { name: 'Yve', img: '/Assets/HeroPick/yve.png' },
    { name: 'Zhask', img: '/Assets/HeroPick/zhask.png' },
    { name: 'Zhuxin', img: '/Assets/HeroPick/zhuxin.png' },
    { name: 'Zilong', img: '/Assets/HeroPick/zilong.png' }
];

// Menampilkan dropdown berdasarkan pencarian
function filterDropdown(id) {
    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = ''; // Kosongkan dropdown sebelum ditampilkan

    // Filter heroes berdasarkan pencarian
    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => selectHero(hero, id);
            dropdownItems.appendChild(item);
        });
}

// Menampilkan gambar hero yang dipilih dengan animasi saat berubah
function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        existingImage.classList.add('fly-out');
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        updateHeroImage(hero, id);
    }
}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    document.getElementById(`search-${id}`).value = hero.name;
    document.getElementById(`dropdown-items-${id}`).innerHTML = ''; // Sembunyikan dropdown
}

// Reset semua dropdown dan input dengan animasi fly-out
function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay.innerHTML) {
            imageDisplay.querySelector('img').classList.add('fly-out');
        }

        setTimeout(() => {
            document.getElementById(`search-${i}`).value = '';
            imageDisplay.innerHTML = '';
            document.getElementById(`dropdown-items-${i}`).innerHTML = '';
        }, 500);
    }
}

// Fungsi untuk mengupdate output NICKNAME
function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputText = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${inputText}`;
    }
}

// Fungsi untuk mereset semua input
function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ` `;
    }
}

// Fungsi untuk menukar nilai 1-5 dengan 6-10
function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    updateOutput();
}

// Fungsi untuk menukar gambar dan nama tim
function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const tempTeamDisplay = teamDisplay1.textContent;
    teamDisplay1.textContent = teamDisplay2.textContent;
    teamDisplay2.textContent = tempTeamDisplay;
}

// Fungsi untuk memuat gambar dari file lokal
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
}

// Fungsi untuk mengupdate nama tim yang ditampilkan
function updateTeamName() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    document.getElementById('teamNameDisplay1').textContent = team1 || "Team 1";
    document.getElementById('teamNameDisplay2').textContent = team2 || "Team 2";
}

// Menampilkan atau menyembunyikan warna gambar berdasarkan checkbox secara real-time
// Fungsi untuk menampilkan atau menyembunyikan warna gambar berdasarkan checkbox
function toggleImage(imageId) {
    const img = document.getElementById(imageId);
    if (!img) return;

    // Otomatis mengambil angka dari extraImageX untuk mencocokkan ke checkboxX
    const marketNumber = imageId.replace('extraImage', '');
    const checkbox = document.getElementById('checkbox' + marketNumber);

    if (checkbox && checkbox.checked) {
        img.classList.add('active');
    } else {
        img.classList.remove('active');
    }
}

// Helper untuk mencari ID Checkbox berdasarkan ID Gambar
function checkboxIdFromImage(imageId) {
    const num = imageId.replace('extraImage', '');
    return 'checkbox' + num;
}

// Fungsi untuk mereset gambar, nama tim, dan checkbox ke kondisi awal (Mati/Redup)
function resetContent() {
    document.getElementById('team1').value = "Team 1";
    document.getElementById('team2').value = "Team 2";
    updateTeamName();

    document.getElementById('image1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('image2').src = "https://via.placeholder.com/300x200?text=Image+2";

    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";

    // Reset total warna win count kembali ke redup (tanpa class active)
    for (let i = 1; i <= 6; i++) {
        const checkbox = document.getElementById('checkbox' + i);
        if (checkbox) checkbox.checked = false;
        
        const img = document.getElementById('extraImage' + i);
        if (img) img.classList.remove('active');
    }
}

// Fungsi untuk menukar seluruh konfigurasi tim termasuk sinkronisasi warna win count
function switchAll() {
    // Tukar nama input form teks
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const tempName = team1.value;
    team1.value = team2.value;
    team2.value = tempName;
    updateTeamName();

    // Tukar file gambar utama maskot
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    // Tukar status checkbox 1-3 (Blue) dengan 4-6 (Red)
    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));

        if (checkboxA && checkboxB) {
            // Tukar nilai boolean checklist data input
            const tempChecked = checkboxA.checked;
            checkboxA.checked = checkboxB.checked;
            checkboxB.checked = tempChecked;
        }

        // Jalankan fungsi pemicu warna agar CSS Class .active ikut ter-update
        toggleImage('extraImage' + i);
        toggleImage('extraImage' + (i + 3));
    }
}

// Ambil elemen pencatatan text status match secara real-time
const tournamentnameInput = document.getElementById('tournamentnamemid');
const tournamentnameOutput = document.getElementById('tournamentnameOutput');

tournamentnameInput.addEventListener('input', function() {
    tournamentnameOutput.textContent = tournamentnameInput.value || "GROUP STAGE";
});

// ==========================================================================
// SYSTEM COUNTDOWN TIMER & AUTO PICK LOGIC
// ==========================================================================
let countdownInterval = null;
let timeLeft = 30;
const INITIAL_TIME = 30;

function startTimer() {
    // Bersihkan interval yang sedang berjalan sebelum memulai yang baru
    clearInterval(countdownInterval);
    
    const timerDisplay = document.getElementById('timer-display');
    
    countdownInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        // Efek visual peringatan ketika waktu tersisa 5 detik atau kurang
        if (timeLeft <= 5) {
            timerDisplay.classList.add('critical');
        } else {
            timerDisplay.classList.remove('critical');
        }

        // Kondisi ketika waktu habis (0 detik)
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.classList.remove('critical');
            triggerAutoPick(); // Jalankan auto pick hero otomatis
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(countdownInterval);
}

function resetTimer() {
    clearInterval(countdownInterval);
    timeLeft = INITIAL_TIME;
    const timerDisplay = document.getElementById('timer-display');
    timerDisplay.textContent = timeLeft;
    timerDisplay.classList.remove('critical');
}

// Fungsi Pencari Slot Kosong Terdekat untuk di-isi secara Auto Pick / Ban
function triggerAutoPick() {
    let slotDitemukan = false;

    // Iterasi slot urutan pencarian dari ID 1 sampai 20 (Daftar semua Pick & Ban)
    for (let id = 1; id <= 20; id++) {
        const inputSearch = document.getElementById(`search-${id}`);
        const imageDisplay = document.getElementById(`image-display-${id}`);

        // Jika input pencarian kosong atau frame gambarnya belum terisi hero
        if (inputSearch && (inputSearch.value.trim() === "" || !imageDisplay.innerHTML)) {
            
            // Pilih hero secara acak dari database array `heroes`
            const randomIndex = Math.floor(Math.random() * heroes.length);
            const randomHero = heroes[randomIndex];

            // Masukkan hero pilihan acak tersebut ke slot
            selectHero(randomHero, id);
            
            slotDitemukan = true;
            console.log(`Auto Pick Aktif: Mengisi Hero ${randomHero.name} pada Slot ID ${id}`);
            break; // Berhenti mencari setelah berhasil mengisi satu slot kosong terdekat
        }
    }

    // Jika seluruh slot dari 1-20 ternyata sudah penuh semua
    if (!slotDitemukan) {
        alert("Semua slot Pick dan Ban sudah terisi penuh!");
        return;
    }

    // Setelah auto-pick berhasil, reset waktu kembali ke 30 detik untuk giliran slot berikutnya
    resetTimer();
    startTimer();
}

function toggleVisibility(type) {
    let targetElement = null;

    if (type === 'timer') {
        targetElement = document.getElementById('id-timer'); // Sembunyikan seluruh container timer
    } else if (type === 'countdown') {
        targetElement = document.getElementById('timer-display'); // Hanya sembunyikan angka detiknya saja
    } else if (type === 'blue-picks') {
        targetElement = document.querySelector('.id-blue-picks');
    } else if (type === 'red-picks') {
        targetElement = document.querySelector('.id-red-picks');
    }

    if (targetElement) {
        // Jika yang ditarget angka detik, gunakan class khusus timer-hidden
        if (type === 'countdown') {
            targetElement.classList.toggle('timer-hidden');
        } else {
            targetElement.classList.toggle('element-hidden');
        }
        console.log(`Fitur Akses: Mengubah status tampilan komponen ${type}`);
    }
}
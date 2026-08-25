// ============================================================
// admin.js - Logic untuk Admin Panel
// ============================================================

const socket = io({
    transports: ['websocket', 'polling']
});

let timerInterval = null;
let timerRunning = false;
let timerValue = 30;

// ============================================================
// SOCKET EVENTS
// ============================================================
socket.on('connect', () => {
    document.getElementById('connectionStatus').innerHTML = '🟢 Connected';
    document.getElementById('connectionStatus').className = 'connected';
});

socket.on('disconnect', () => {
    document.getElementById('connectionStatus').innerHTML = '🔴 Disconnected';
    document.getElementById('connectionStatus').className = 'disconnected';
});

socket.on('initData', (data) => {
    if (data) {
        loadDataToForm(data);
    }
});

// ============================================================
// LOAD DATA KE FORM
// ============================================================
function loadDataToForm(data) {
    // Team Names
    document.getElementById('blueName').value = data.blueName || 'BLUE TEAM';
    document.getElementById('redName').value = data.redName || 'RED TEAM';
    
    // Footer
    document.getElementById('blueFooter').value = data.blueFooter || 'MATCH 1';
    document.getElementById('redFooter').value = data.redFooter || 'MATCH 1';
    
    // Match Title
    document.getElementById('matchTitle').value = data.matchTitle || 'GRAND FINAL';
    
    // Timer
    document.getElementById('timerValue').value = data.timerValue || '30';
    document.getElementById('isCritical').checked = data.isCritical || false;
    
    // Win
    document.getElementById('blueWin1').checked = data.blueWin1 || false;
    document.getElementById('blueWin2').checked = data.blueWin2 || false;
    document.getElementById('redWin1').checked = data.redWin1 || false;
    document.getElementById('redWin2').checked = data.redWin2 || false;
    
    // Bans
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`blueBan${i}`).value = data[`blueBan${i}`] || '';
        document.getElementById(`redBan${i}`).value = data[`redBan${i}`] || '';
    }
    
    // Picks & Nicknames
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`bluePick${i}`).value = data[`bluePick${i}`] || '';
        document.getElementById(`blueNick${i}`).value = data[`blueNick${i}`] || '-';
        document.getElementById(`redPick${i}`).value = data[`redPick${i}`] || '';
        document.getElementById(`redNick${i}`).value = data[`redNick${i}`] || '-';
    }
    
    // Logos
    if (data.blueLogo) {
        document.getElementById('blueLogoPreview').src = data.blueLogo;
    }
    if (data.redLogo) {
        document.getElementById('redLogoPreview').src = data.redLogo;
    }
}

// ============================================================
// SEND UPDATE KE SERVER
// ============================================================
function sendUpdate() {
    const data = {
        // Team Names
        blueName: document.getElementById('blueName').value,
        redName: document.getElementById('redName').value,
        
        // Footer
        blueFooter: document.getElementById('blueFooter').value,
        redFooter: document.getElementById('redFooter').value,
        
        // Match Title
        matchTitle: document.getElementById('matchTitle').value,
        
        // Timer
        timerValue: document.getElementById('timerValue').value,
        isCritical: document.getElementById('isCritical').checked,
        
        // Win
        blueWin1: document.getElementById('blueWin1').checked,
        blueWin2: document.getElementById('blueWin2').checked,
        redWin1: document.getElementById('redWin1').checked,
        redWin2: document.getElementById('redWin2').checked,
    };
    
    // Bans
    for (let i = 1; i <= 5; i++) {
        data[`blueBan${i}`] = document.getElementById(`blueBan${i}`).value;
        data[`redBan${i}`] = document.getElementById(`redBan${i}`).value;
    }
    
    // Picks & Nicknames
    for (let i = 1; i <= 5; i++) {
        data[`bluePick${i}`] = document.getElementById(`bluePick${i}`).value;
        data[`blueNick${i}`] = document.getElementById(`blueNick${i}`).value;
        data[`redPick${i}`] = document.getElementById(`redPick${i}`).value;
        data[`redNick${i}`] = document.getElementById(`redNick${i}`).value;
    }
    
    socket.emit('updateDraft', data);
}

// ============================================================
// UPLOAD LOGO
// ============================================================
function uploadLogo(team, event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        
        // Update preview
        if (team === 'blue') {
            document.getElementById('blueLogoPreview').src = dataUrl;
        } else {
            document.getElementById('redLogoPreview').src = dataUrl;
        }
        
        // Kirim ke server
        const update = {};
        update[`${team}Logo`] = dataUrl;
        socket.emit('updateDraft', update);
    };
    reader.readAsDataURL(file);
}

// ============================================================
// TIMER FUNCTIONS
// ============================================================
function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    
    const input = document.getElementById('timerValue');
    timerValue = parseInt(input.value) || 30;
    
    timerInterval = setInterval(() => {
        timerValue--;
        if (timerValue < 0) timerValue = 0;
        input.value = timerValue;
        
        // Kirim update
        socket.emit('updateDraft', { timerValue: timerValue });
        
        if (timerValue <= 5) {
            document.getElementById('isCritical').checked = true;
            socket.emit('updateDraft', { isCritical: true });
        }
        
        if (timerValue === 0) {
            pauseTimer();
        }
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    pauseTimer();
    timerValue = 30;
    document.getElementById('timerValue').value = 30;
    document.getElementById('isCritical').checked = false;
    socket.emit('updateDraft', { timerValue: 30, isCritical: false });
}

// ============================================================
// RESET FUNCTIONS
// ============================================================
function resetAll() {
    if (!confirm('Reset semua data?')) return;
    
    pauseTimer();
    
    // Reset semua input ke default
    document.getElementById('blueName').value = 'BLUE TEAM';
    document.getElementById('redName').value = 'RED TEAM';
    document.getElementById('blueFooter').value = 'MATCH 1';
    document.getElementById('redFooter').value = 'MATCH 1';
    document.getElementById('matchTitle').value = 'GRAND FINAL';
    document.getElementById('timerValue').value = '30';
    document.getElementById('isCritical').checked = false;
    
    // Reset win
    document.getElementById('blueWin1').checked = false;
    document.getElementById('blueWin2').checked = false;
    document.getElementById('redWin1').checked = false;
    document.getElementById('redWin2').checked = false;
    
    // Reset bans
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`blueBan${i}`).value = '';
        document.getElementById(`redBan${i}`).value = '';
    }
    
    // Reset picks & nicks
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`bluePick${i}`).value = '';
        document.getElementById(`blueNick${i}`).value = '-';
        document.getElementById(`redPick${i}`).value = '';
        document.getElementById(`redNick${i}`).value = '-';
    }
    
    // Reset logo preview
    document.getElementById('blueLogoPreview').src = 'Assets/Logo/default-blue.png';
    document.getElementById('redLogoPreview').src = 'Assets/Logo/default-red.png';
    
    sendUpdate();
}

function clearBans() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`blueBan${i}`).value = '';
        document.getElementById(`redBan${i}`).value = '';
    }
    sendUpdate();
}

function clearPicks() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`bluePick${i}`).value = '';
        document.getElementById(`redPick${i}`).value = '';
    }
    sendUpdate();
}

function switchTeams() {
    // Switch names
    const blueName = document.getElementById('blueName').value;
    const redName = document.getElementById('redName').value;
    document.getElementById('blueName').value = redName;
    document.getElementById('redName').value = blueName;
    
    // Switch logos
    const blueLogo = document.getElementById('blueLogoPreview').src;
    const redLogo = document.getElementById('redLogoPreview').src;
    document.getElementById('blueLogoPreview').src = redLogo;
    document.getElementById('redLogoPreview').src = blueLogo;
    
    sendUpdate();
}

// ============================================================
// AUTO SEND ON CHANGE (untuk semua input)
// ============================================================
document.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('change', sendUpdate);
});

// ============================================================
// EXPOSE FUNCTIONS KE GLOBAL
// ============================================================
window.sendUpdate = sendUpdate;
window.uploadLogo = uploadLogo;
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.resetTimer = resetTimer;
window.resetAll = resetAll;
window.clearBans = clearBans;
window.clearPicks = clearPicks;
window.switchTeams = switchTeams;
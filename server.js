const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
    transports: ['websocket', 'polling']
});

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ============================================================
// DATA DEFAULT UNTUK OVERLAY V2
// ============================================================
let currentDraftData = {
    // === TEAM NAMES ===
    blueName: "BLUE TEAM",
    redName: "RED TEAM",
    
    // === FOOTER ===
    blueFooter: "MATCH 1",
    redFooter: "MATCH 1",
    
    // === MATCH TITLE ===
    matchTitle: "GRAND FINAL",
    
    // === LOGOS ===
    blueLogo: "Assets/Logo/default-blue.png",
    redLogo: "Assets/Logo/default-red.png",
    
    // === TIMER ===
    timerValue: "30",
    isCritical: false,
    
    // === FORMAT PERTANDINGAN ===
    format: 'bo5', // 'bo3' atau 'bo5'
    
    // === SCORE BEST OF 5 (3 bar each) ===
    blueWin1: false,
    blueWin2: false,
    blueWin3: false,
    
    redWin1: false,
    redWin2: false,
    redWin3: false,
    
    // === BANS (5 each) ===
    blueBan1: "", blueBan2: "", blueBan3: "", blueBan4: "", blueBan5: "",
    redBan1: "", redBan2: "", redBan3: "", redBan4: "", redBan5: "",
    
    // === PICKS (5 each) ===
    bluePick1: "", bluePick2: "", bluePick3: "", bluePick4: "", bluePick5: "",
    redPick1: "", redPick2: "", redPick3: "", redPick4: "", redPick5: "",
    
    // === NICKNAMES (5 each) ===
    blueNick1: "-", blueNick2: "-", blueNick3: "-", blueNick4: "-", blueNick5: "-",
    redNick1: "-", redNick2: "-", redNick3: "-", redNick4: "-", redNick5: "-"
};

// ============================================================
// SOCKET.IO
// ============================================================
io.on('connection', (socket) => {
    console.log('✅ Client connected:', socket.id);
    
    // Kirim data terakhir ke client yang baru konek
    socket.emit('initData', currentDraftData);

    // Terima update dari admin
    socket.on('updateDraft', (data) => {
        console.log('📥 Received updateDraft from:', socket.id);
        
        // Merge data baru dengan data lama
        currentDraftData = { ...currentDraftData, ...data };
        
        // Broadcast ke semua client (termasuk OBS)
        io.emit('pushToOverlay', currentDraftData);
        console.log('📡 Broadcasted to all clients');
    });

    socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id);
    });
});

// ============================================================
// ROUTES
// ============================================================

// Status server (untuk debugging)
app.get('/status', (req, res) => {
    res.json({
        status: 'Server running',
        clients: io.engine.clientsCount,
        data: currentDraftData
    });
});

// Halaman overlay
app.get('/overlay', (req, res) => {
    res.sendFile(path.join(__dirname, 'overlay_v2.html'));
});

// Halaman admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Root - redirect ke admin
app.get('/', (req, res) => {
    res.redirect('/admin');
});

// ============================================================
// JALANKAN SERVER
// ============================================================
const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║   🎮 SISFO CUP 2026 - DRAFT PICK SYSTEM V2 🎮                       ║
║                                                                       ║
║   ✅ Server running on: http://0.0.0.0:${PORT}                       ║
║                                                                       ║
║   📺 Overlay (OBS):   http://localhost:${PORT}/overlay               ║
║   📱 Admin Control:   http://localhost:${PORT}/admin                ║
║   📊 Status Server:   http://localhost:${PORT}/status                ║
║                                                                       ║
║   📋 Format yang didukung:                                           ║
║      - BO3 (Best of 3) → 2 score bar                                ║
║      - BO5 (Best of 5) → 3 score bar                                ║
║                                                                       ║
║   💡 Tekan Ctrl + C untuk menghentikan server                       ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
    `);
});

// ============================================================
// HANDLE SHUTDOWN
// ============================================================
process.on('SIGINT', () => {
    console.log('\n\n🛑 Server dimatikan...');
    process.exit();
});

process.on('SIGTERM', () => {
    console.log('\n\n🛑 Server dimatikan...');
    process.exit();
});
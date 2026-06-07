const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

// Menyediakan file statis (HTML, CSS, Assets) agar bisa diakses laptop lain
app.use(express.static(path.join(__dirname)));

// Menyimpan data draft pick sementara di memori server
let currentDraftData = {};

io.on('connection', (socket) => {
    // Kirim data terakhir ke client/OBS yang baru konek
    socket.emit('initData', currentDraftData);

    // Dengarkan kiriman data dari PC Admin/Operator 2
    socket.on('updateDraft', (data) => {
        currentDraftData = data;
        // Broadcast/oper data ke OBS secara real-time
        io.emit('pushToOverlay', data);
    });
});

// Jalankan server di port 3000
const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(`🚀 SERVER DRAFT PICK LOKAL BERHASIL JALAN!`);
    console.log(`------------------------------------------------------`);
    console.log(`💻 Operator 1 (OBS) buka URL: http://localhost:${PORT}/overlay.html`);
    console.log(`📱 Operator 2 (Laptop Admin) buka URL lewat IP Wi-Fi kamu.`);
    console.log(`======================================================\n`);
});
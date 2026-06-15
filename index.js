const mineflayer = require('mineflayer');

// Cấu hình Bot 1 cho Server 1 (IP 163.5.201.8:12243) - ĐÃ ĐỔI PORT
function startBot1() {
    const bot1 = mineflayer.createBot({
        host: '163.5.201.8',
        port: 12243, 
        username: 'Bot_AFK_1',
        version: '1.21.1',
        physicsEnabled: false
    });

    bot1.on('spawn', () => console.log('Bot 1 da vao Server 1!'));
    bot1.on('end', (reason) => {
        console.log('Bot 1 bi vang, ket noi lai sau 30s...', reason);
        setTimeout(startBot1, 30000);
    });
    bot1.on('error', (err) => console.log('Loi Bot 1:', err));
}

// Cấu hình Bot 2 cho Server 2 (IP 163.5.201.2:12253)
function startBot2() {
    const bot2 = mineflayer.createBot({
        host: '163.5.201.2',
        port: 12253,
        username: 'Bot_AFK_2',
        version: '1.21.1',
        physicsEnabled: false
    });

    bot2.on('spawn', () => console.log('Bot 2 da vao Server 2!'));
    bot2.on('end', (reason) => {
        console.log('Bot 2 bi vang, ket noi lai sau 30s...', reason);
        setTimeout(startBot2, 30000);
    });
    bot2.on('error', (err) => console.log('Loi Bot 2:', err));
}

// Chạy cả 2 bot
startBot1();
startBot2();

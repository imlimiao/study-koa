const os = require('os');
const cups = os.cpus();
console.log(cups.length, "cups");

console.log(os.totalmem() / 1024 / 1024 / 1024); // 查看内存
console.log(os.freemem()/1024/1024/1024)
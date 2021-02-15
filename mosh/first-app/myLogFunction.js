function logSomething(message) {
    const now = new Date();

    console.log(`myLogFunction ${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${message}`);
}

// Only one function to export, so we can directly set module.exports to this function:
module.exports = logSomething;
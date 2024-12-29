function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function secondsToHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    return `${hours}:${secondsToMinutes(remainingSeconds).split(":")[0]}`;
}

export { secondsToMinutes, secondsToHours };

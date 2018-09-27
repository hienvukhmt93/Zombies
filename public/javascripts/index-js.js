function start() {
    console.log("Start click");
    $.get('/create-random-zombie', (data) => {
            window.location.href = "/create-random-zombie";
    });
}
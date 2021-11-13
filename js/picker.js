//color Picker
$(`#red`).click(() => {
    if (localStorage.color !== `rgba(255, 0, 0, 255)`) {
        localStorage.color = `rgba(255, 0, 0, 255)`;
    };
});
$(`#orange`).click(() => {
    if (localStorage.color !== `rgba(255, 165, 0, 255)`) {
        localStorage.color = `rgba(255, 165, 0, 255)`;
    };
});
$(`#yellow`).click(() => {
    if (localStorage.color !== `rgba(255, 255, 0, 255)`) {
        localStorage.color = `rgba(255, 255, 0, 255)`;
    };
});
$(`#green`).click(() => {
    if (localStorage.color !== `rgba(0, 128, 0, 255)`) {
        localStorage.color = `rgba(0, 128, 0, 255)`;
    };
});
$(`#blue`).click(() => {
    if (localStorage.color !== `rgba(0, 0, 255, 255)`) {
        localStorage.color = `rgba(0, 0, 255, 255)`;
    };
});
$(`#indigo`).click(() => {
    if (localStorage.color !== `rgba(75, 0, 130, 255)`) {
        localStorage.color = `rgba(75, 0, 130, 255)`;
    };
});
$(`#white`).click(() => {
    if (localStorage.color !== `rgba(255, 255, 255, 255)`) {
        localStorage.color = `rgba(255, 255, 255, 255)`;
    };
});
$(`#grey`).click(() => {
    if (localStorage.color !== `rgba(128, 128, 128, 255)`) {
        localStorage.color = `rgba(128, 128, 128, 255)`;
    };
});
$(`#black`).click(() => {
    if (localStorage.color !== `rgba(0, 0, 0, 255)`) {
        localStorage.color = `rgba(0, 0, 0, 255)`;
    };
});

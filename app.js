const clock = document.querySelector('.clock');

const changeTime = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${dateFns.format(now, 'ss')}</span> ${dateFns.format(now, 'A')}
    `;

    clock.innerHTML = html;

};

setInterval(changeTime, 1000);
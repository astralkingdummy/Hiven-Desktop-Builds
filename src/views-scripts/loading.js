const updateText = (data) => {
    if (typeof(data) === 'string') {
        document.getElementById('update-text').innerText = data;
    } else {
        const progressContainer = document.querySelector('.progress');
        const progressBar = document.querySelector('.progress-bar');

        document.getElementById('update-text').innerText = 'Downloading update...';
        progressContainer.style.display = 'unset';
        progressBar.setAttribute('data-percent', data)
        progressBar.style.width = `${progressBar.getAttribute('data-percent')}%`;
        progressBar.style.opacity = 1;

        if (data === 100) {
            document.getElementById('update-text').innerText = 'Starting client...';
        }
    }
}
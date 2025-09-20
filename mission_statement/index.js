const themeSelector = document.querySelector('select')
function changeTheme() {
    if (themeSelector.value === 'dark'){
        document.body.classList.add('dark');
        document.querySelector('#logo').src = '/mission_statement/images/black-logo.png';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('#logo').src = '/mission_statement/images/logo.png';
    }
}
themeSelector.addEventListener('change', changeTheme);

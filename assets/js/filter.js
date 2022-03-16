const filterCheckboxs = document.querySelectorAll('.filter-checkbox');

filterCheckboxs.forEach(filterCheckbox => {
    filterCheckbox.addEventListener('change', (e) => {
        if(e.target.checked) {
            e.target.parentElement.classList.add('event-filter-option-item-checked');
        }
        else {
            e.target.parentElement.classList.remove('event-filter-option-item-checked');
        }
    });
});
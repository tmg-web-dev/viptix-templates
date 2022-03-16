const ticketListingRightCol = document.querySelector('.ticket-listing-right-column');
const filterPanelToggleBtn = document.getElementById('mobile-filter-toggle-btn');
const filterPanelDismissBtn = document.getElementById('filter-panel-dimiss-btn');

const searchByCol = document.querySelector('.filter-options-contianer');
const searchByToggleBtn = document.getElementById('serach-by-btn');
const searchByPanelDismissBtn = document.getElementById('search-by-panel-dismiss-btn');

if(document.contains(ticketListingRightCol)) {
    filterPanelToggleBtn.addEventListener('click', (e) => {
    
        if(ticketListingRightCol.dataset.mobileView === 'hidden') {
            ticketListingRightCol.dataset.mobileView = 'active';
        }
        else {
            ticketListingRightCol.dataset.mobileView = 'hidden';
        }
    });
    
    filterPanelDismissBtn.addEventListener('click', () => {
        if(ticketListingRightCol.dataset.mobileView === 'hidden') return;
    
        ticketListingRightCol.dataset.mobileView = 'hidden';
    });
}

if(document.contains(searchByCol)) {
    searchByToggleBtn.addEventListener('click', () => {
        console.log('abc');
        if(searchByCol.dataset.mobileView === 'hidden') {
            searchByCol.dataset.mobileView = 'active';
        }
        else {
            searchByCol.dataset.mobileView = 'hidden';
        }
    });

    searchByPanelDismissBtn.addEventListener('click', () => {
        searchByCol.dataset.mobileView = 'hidden';
    });
}
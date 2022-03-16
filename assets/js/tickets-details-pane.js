const ticketListingContainer = document.querySelector('.ticket-listing-container');
const ticketItems = document.querySelectorAll('.ticket-list-item');
//const ticketDetailsPanelBackBtn = document.getElementById('ticket-listing-details-back-btn');

const ticketDetailsPanelBackBtns = document.querySelectorAll('.ticket-listing-details-back-btn');

ticketItems.forEach(ticketItem => {
    ticketItem.addEventListener('click' , (e) => {
        let ticketDetailsContainer = e.target.children[e.target.children.length - 1];
        if(ticketDetailsContainer.dataset.ticketDetailsPanel === 'hidden') {
            ticketDetailsContainer.dataset.ticketDetailsPanel = 'active';
        }
    });
});

ticketDetailsPanelBackBtns.forEach(ticketDetailsPanelBackBtn => {
    ticketDetailsPanelBackBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        e.target.parentElement.dataset.ticketDetailsPanel = 'hidden';
    });
});

// ticketDetailsPanelBackBtn.addEventListener('click', () => {
//     ticketListingContainer.dataset.ticketDetailsPanel = 'hidden';

//     console.log(ticketListingContainer.dataset.ticketDetailsPanel);
// });
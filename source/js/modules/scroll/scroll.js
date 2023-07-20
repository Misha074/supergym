const tickets = document.getElementById('tickets');
let buyTicketLink = document.getElementById('buy-ticket');

buyTicketLink.addEventListener('click', () => {
  tickets.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
});

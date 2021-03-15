
const leaderboard = [
    {
      name: 'Bread',
      points: '330pt'
    },
    {
      name: 'Stranger',
      points: '310pt'
    },
    {
      name: 'Fake User',
      points: '280pt'
    },
    {
      name: 'Alien',
      points: '250pt'
    },
    {
      name: 'Planet Moon',
      points: '180pt'
    },
    {
      name: 'Drunken Soda',
      points: '150pt'
    },
    {
      name: 'Keep Calm',
      points: '130pt'
    }
  ];
  
  const main = d3
    .select('table');
  
  const users = main
    .selectAll('tr.user')
    .data(leaderboard)
    .enter()
    .append('tr')
    .attr('class', 'user');
  
  users
    .append('td')
    .text((d, i) => i + 1)
    .attr('class', 'position');
  
  users
    .append('td')
    .html (({name}) => `${name}`)
    .attr('class', 'user');
  
  users
    .append('td')
    .attr('class', 'points')
    .append('span')
    .text(({points}) => points);
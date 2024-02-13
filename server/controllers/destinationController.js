const getAllDestinations = (req, res) => {
  // This will be replaced with logic for interacting with MongoDB once the database is implemented
  const destinations = [
    {
      id: 1,
      name: 'Japan',
      info: 'No anime here.',
      url: '/assets/Japan.png',
    },
    {
      id: 2,
      name: 'Korea',
      info: 'You only know about them because of KPOP.',
      url: '/assets/Korea.png',
    },
    {
      id: 3,
      name: 'Philippines',
      info: 'Not part of Latin America.',
      url: '/assets/Philippines.png',
    },
    {
      id: 4,
      name: 'Sydney',
      info: 'Not in Europe, but does that really matter?',
      url: '/assets/Sydney.png',
    },
    {
      id: 5,
      name: 'Paris',
      info: 'Why would you want to visit here? There are French people.',
      url: '/assets/Paris.png',
    },
    {
      id: 6,
      name: 'Lapland',
      info: 'Not the Finnish part, don\'t worry.',
      url: '/assets/Lapland.png',
    },
    {
      id: 7,
      name: 'LA',
      info: 'This is not in fact Miami, even if it might look like that in the picture.',
      url: '/assets/LA.png',
    },
    {
      id: 8,
      name: 'Miami',
      info: 'Florida has more than Florida men, but no much more.',
      url: '/assets/Miami.png',
    },
    {
      id: 9,
      name: 'New York',
      info: 'Certainly a famous city.',
      url: '/assets/NewYork.png',
    },
  ];

  res.json({ destinations }); // Wrap the destinations array in an object; it seems to be necessary.
};

export { getAllDestinations };

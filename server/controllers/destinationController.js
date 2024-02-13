const getAllDestinations = (req, res) => {
  // This will be replaced with logic for interacting with MongoDB once the database is implemented
  const destinations = [
    {
      id: 1,
      name: 'Japan',
      info: 'No anime here.',
    },
    {
      id: 2,
      name: 'Korea',
      info: 'You only know about them because of KPOP.',
    },
    {
      id: 3,
      name: 'China',
      info: 'The one that is not so nice.',
    },
    {
      id: 4,
      name: 'Sydney',
      info: 'Not in Europe, but does that really matter?',
    },
    {
      id: 5,
      name: 'Paris',
      info: 'Why would you want to visit here? There are French people.',
    },
    {
      id: 6,
      name: 'Lapland',
      info: 'Not the Finnish part, don\'t worry.',
    },
    {
      id: 7,
      name: 'LA',
      info: 'This is not in fact Miami, even if it might look like that in the picture.',
    },
    {
      id: 8,
      name: 'Miami',
      info: 'Florida has more than Florida men, but no much more.',
    },
    {
      id: 9,
      name: 'New York',
      info: 'Certainly a famous city.',
    },
  ];

  res.json({ destinations }); // Wrap the destinations array in an object; it seems to be necessary.
};

export { getAllDestinations };

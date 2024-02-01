const getAllDestinations = (req, res) => {
  // This will be replaced with logic for interacting with MongoDB once the database is implemented
  const destinations = [
    {
      id: 1,
      name: 'Beautiful Beach',
      info: 'Explore the stunning beaches with crystal-clear water.',
    },
    // Add more destinations as needed
  ];

  res.json({ destinations }); // Wrap the destinations array in an object; it seems to be necessary.
};

export { getAllDestinations };

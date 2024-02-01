// server/controllers/destinationController.js

// This is a placeholder. Replace it with your actual logic for fetching destinations from the database.

const getAllDestinations = (req, res) => {
  // Replace this with your logic to fetch destinations from the database
  const destinations = [
    {
      id: 1,
      name: 'Beautiful Beach',
      info: 'Explore the stunning beaches with crystal-clear water.',
    },
    // Add more destinations as needed
  ];

  res.json({ destinations }); // Wrap the destinations array in an object
};

export { getAllDestinations };

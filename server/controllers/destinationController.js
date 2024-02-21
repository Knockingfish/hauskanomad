const getAllDestinations = (req, res) => {
  // This will be replaced with logic for interacting with MongoDB once the database is implemented
  const destinations = [
    {
      id: 1,
      name: 'Australia',
      info: 'Down under.',
      url: '/card/australia.webp',
    },
    {
      id: 2,
      name: 'Brazil',
      info: 'Double jump.',
      url: '/card/brazil.webp',
    },
    {
      id: 3,
      name: 'China',
      info: 'The mainland one.',
      url: '/card/china.webp',
    },
    {
      id: 4,
      name: 'Cuba',
      info: 'The CIA could not stop them, even when they tried so hard.',
      url: '/card/cuba.webp',
    },
    {
      id: 5,
      name: 'Egypt',
      info: '6000 years of history, of which only 1000 people care about.',
      url: '/card/egypt.webp',
    },
    {
      id: 6,
      name: 'France',
      info: 'It would be nice if they weren\'t French.',
      url: '/card/france.webp',
    },
    {
      id: 7,
      name: 'Germany',
      info: 'Betäubungsmittelverschreibungsverordnung.',
      url: '/card/germany.webp',
    },
    {
      id: 8,
      name: 'Hawaii',
      info: 'Not actually part of North America but fuck it.',
      url: '/card/hawaii.webp',
    },
    {
      id: 9,
      name: 'India',
      info: '"Don\'t eat the street meats or drink the tap water." - Karen, 2024',
      url: '/card/india.webp',
    },
    {
      id: 10,
      name: 'Indonesia',
      info: 'Shariah vTuber.',
      url: '/card/indonesia.webp',
    },
    {
      id: 11,
      name: 'Japan',
      info: 'Weeb.',
      url: '/card/japan.webp',
    },
    {
      id: 12,
      name: 'Lapland',
      info: 'Not the Finnish part.',
      url: '/card/lapland.webp',
    },
    {
      id: 13,
      name: 'Mexico',
      info: '"Don\'t eat the street meats or drink the tap water." - Karen, 2024',
      url: '/card/mexico.webp',
    },
    {
      id: 14,
      name: 'Morocco',
      info: 'This wasn\'t the bottom of the barrel, but it was close.',
      url: '/card/morocco.webp',
    },
    {
      id: 15,
      name: 'New York',
      info: 'Watch it! Im walkin here!.',
      url: '/card/new_york.webp',
    },
    {
      id: 16,
      name: 'new_zealand',
      info: 'This image has a free license, trust me (it does actually).',
      url: '/card/new_zealand.webp',
    },
    {
      id: 17,
      name: 'Nigeria',
      info: 'Omo.',
      url: '/card/nigeria.webp',
    },
    {
      id: 18,
      name: 'Peru',
      info: 'Chicken pizza.',
      url: '/card/peru.webp',
    },
    {
      id: 19,
      name: 'Phillipines',
      info: 'Latin America at home.',
      url: '/card/phillipines.webp',
    },
    {
      id: 20,
      name: 'Quebec',
      info: 'You thought the French were bad? Just you wait and see.',
      url: '/card/quebec.webp',
    },
    {
      id: 21,
      name: 'San Francisco',
      info: 'As expensive to visit as other places are to live.',
      url: '/card/san_francisco.webp',
    },
    {
      id: 22,
      name: 'South Africa',
      info: 'It just hasn\'t been the same since Apartheid ended.',
      url: '/card/south_africa.webp',
    },
    {
      id: 23,
      name: 'Thailand',
      info: 'Bring a green card.',
      url: '/card/thailand.webp',
    },
    {
      id: 24,
      name: 'United Kingdom',
      info: 'Has your country been ruined by the British Empire? Continue listening to learn how you can be compensated.',
      url: '/card/uk.webp',
    },
  ];

  res.json({ destinations }); // Wrap the destinations array in an object; it seems to be necessary.
};

export { getAllDestinations };

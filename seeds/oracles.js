exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('oracles').del()
    .then(function () {
      // Inserts seed entries
      return knex('oracles').insert([
        { id: 1, card_name: 'owl XVII', image_url: 'https://i.ibb.co/bvMZtTJ/IMG-9435.jpg', message: 'Fear of God is the beginning of wisdom' },
        { id: 2, card_name: 'possum XXI', image_url: 'https://i.ibb.co/8PMN30L/IMG-9436.jpg', message: 'Get back to work' },
        { id: 3, card_name: 'fox XXV', image_url: 'https://i.ibb.co/2MLNVv7/IMG-9437.jpg', message: 'What the fox say' },
        { id: 4, card_name: 'chicken XIII', image_url: 'https://i.ibb.co/X5P7JH4/IMG-9438.jpg', message: 'Winner,winner,chicken dinner' },
        { id: 5, card_name: 'snake IX', image_url: 'https://i.ibb.co/8cBS136/IMG-9439.jpg', message: 'No snakes in the grass cos I mowed it' },
        { id: 6, card_name: 'forgiveness VII', image_url: 'https://i.ibb.co/RN8F8jG/IMG-9440.jpg', message: 'I was at a fancy dress party, and I ran into a friend of mine, dressed as a turtle with another girl on her back I asked “who’s the other girl”  She said... Michelle' }
      ])
    })
}

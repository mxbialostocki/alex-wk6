exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('oracles').del()
    .then(function () {
      // Inserts seed entries
      return knex('oracles').insert([
        { id: 1, card_name: 'owl XVII', image_url: 'https://ibb.co/B65xkbN', message: 'Fear of God is the beginning of wisdom' },
        { id: 2, card_name: 'possum XXI', image_url: 'https://ibb.co/QY9pBf3', message: 'Get back to work' },
        { id: 3, card_name: 'fox XXV', image_url: 'https://ibb.co/Lgq5jxz', message: 'What the fox say' },
        { id: 4, card_name: 'chicken XIII', image_url: 'https://ibb.co/xgb15Zs', message: 'Winner,winner,chicken dinner' },
        { id: 5, card_name: 'snake IX', image_url: 'https://ibb.co/Hd2k5vn', message: 'No snakes in the grass cos I mowed it' },
        { id: 6, card_name: 'forgiveness VII', image_url: 'https://ibb.co/pQq7qh6', message: 'I was at a fancy dress party, and I ran into a friend of mine, dressed as a turtle with another girl on her back I asked “who’s the other girl”  She said... Michelle' }
      ])
    })
}

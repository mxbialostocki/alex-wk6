exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('oracles').del()
    .then(function () {
      // Inserts seed entries
      return knex('oracles').insert([
        { id: 1, card_name: 'owl XVII', image_url: 'https://ibb.co/B65xkbN' },
        { id: 2, card_name: 'possum XXI', image_url: 'https://ibb.co/QY9pBf3' },
        { id: 3, card_name: 'fox XXV', image_url: 'https://ibb.co/Lgq5jxz' },
        { id: 4, card_name: 'chicken XIII', image_url: 'https://ibb.co/xgb15Zs' },
        { id: 5, card_name: 'snake IX', image_url: 'https://ibb.co/Hd2k5vn' },
        { id: 6, card_name: 'forgiveness VII', image_url: 'https://ibb.co/pQq7qh6' }
      ])
    })
};

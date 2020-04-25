import pool from '../db/dev/pool';

import {
  hashPassword,
} from '../helpers/validations';

pool.on('connect', () => {
  console.log('connected to the db');
});


/**
 * SEED Admin User
 */
const seed = () => {
  const admin_password = process.env.ADMIN_PASSWORD
  const seedUserQuery = `INSERT INTO
  users VALUES 
  ( default, 'ambrose@gmail.com', 'ambrose', 'Byamugisha', '${hashPassword(`${admin_password}`)}', true, NOW())`;
  
   pool.query(seedUserQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Seed users
 */
const seedUser = () => {
  seed();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

export { seedUser };

require('make-runnable');

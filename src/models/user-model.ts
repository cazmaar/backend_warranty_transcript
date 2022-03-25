/* eslint-disable max-len */
import db from "../db/connection.js";
// User schema
export interface IUser {
  id: number;
  name: string;
  email: string;
}

interface AllWarrantys {
  payload: [
    {
      id: number;
      email: string;
      company: string;
      website: string;
      date: string;
      image: string;
    }
  ];
}

// Get all spaces from warrantys table
export async function getAllSpaces(): Promise<AllWarrantys[]> {
  const result = await db.query(`SELECT * FROM spaces`);
  return result.rows;
}

// // Search for a space by ID
// export async function getSpaceByID(id) {
//   const result = await db.query(`SELECT * FROM spaces WHERE id = $1;`, [id]);
//   return result.rows;
// }

/**
 * Get a new User object.
 *
 * @returns
 */
function getNew(name: string, email: string): IUser {
  return {
    id: -1,
    email,
    name
  };
}

/**
 * Copy a user object.
 *
 * @param user
 * @returns
 */
function copy(user: IUser): IUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name
  };
}

// Export default
export default {
  new: getNew,
  copy
};

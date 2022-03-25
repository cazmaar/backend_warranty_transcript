/* eslint-disable max-len */
import db from "../db/connection.js";

interface AllWarrantys {
  id: number;
  email: string;
  company: string;
  website: string;
  date: string;
  image: string;
}

// Get all spaces from warrantys table
export const getAllReceipts = async (): Promise<AllWarrantys[]> => {
  const res = await db(`SELECT * FROM warranty`, []);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.rows;
};

// post to  warranty
export const postReceipt = async (
  email: string,
  company: string,
  website: string,
  date: string,
  image: string
): Promise<AllWarrantys[]> => {
  const res = await db(
    `INSERT INTO  warranty (email, company, website, date, image) VALUES($1,$2,$3,$4,$5) RETURNING *`,
    [email, company, website, date, image]
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.rows;
};

// delete post from warranty
export const postDelete= async (id: number): Promise<AllWarrantys[]> => {
  const res = await db(`DELETE FROM warranty where id=$1 RETURNING *`, [id]);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.rows;
};

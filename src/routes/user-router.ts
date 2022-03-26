import StatusCodes from 'http-status-codes';
import getA
import { Request, Response, Router } from 'express';

import userService from '@services/user-service';
import { ParamMissingError } from '@shared/errors';
import { getAllReceipts } from '@models/user-model';
import { cloudName, apiKey, apiSecret } from "../config.js";
import cloudinary from "cloudinary"


// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});


// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;


// router.get("/:id", async function (req, res, next) {
//   const id = Number(req.params.id);
//   const space = await getAllReceipts();

//   res.json({
//     success: true,
//     payload: space
//   });
// });





//  Get all receipts
router.get("/", async (req: Request, res: Response)=> {
    const warranty = await getAllReceipts();
  res.json({
    success: true,
    payload: warranty
  });
});


/**
 * Add one user.
 */
// router.post(p.add, async (req: Request, res: Response) => {
//     const { user } = req.body;
//     // Check param
//     if (!user) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await userService.addOne(user);
//     return res.status(CREATED).end();
// });


// /**
//  * Update one user.
//  */
// router.put(p.update, async (req: Request, res: Response) => {
//     const { user } = req.body;
//     // Check param
//     if (!user) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await userService.updateOne(user);
//     return res.status(OK).end();
// });


/**
 * Delete one user.
 */
// router.delete(p.delete, async (req: Request, res: Response) => {
//     const { id } = req.params;
//     // Check param
//     if (!id) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await userService.delete(Number(id));
//     return res.status(OK).end();
// });


// Export default
export default router;

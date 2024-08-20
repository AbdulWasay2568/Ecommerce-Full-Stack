import { Router } from "express";
import {
    fetchCartsController,
    createCartController,
    readCartController,
    updateCartController,
    deleteCartController
} from "../controllers/cart.controller";

const cartRoutes: Router = Router();

cartRoutes.get('/', fetchCartsController);
cartRoutes.post('/', createCartController);
cartRoutes.get('/:id', readCartController);
cartRoutes.put('/:id', updateCartController);
cartRoutes.delete('/:id', deleteCartController);

export default cartRoutes;

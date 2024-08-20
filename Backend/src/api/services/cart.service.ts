import { Cart } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateCartDto, UpdateCartDto } from "../interfaces/cart.interface";

export const fetchCarts = async (): Promise<Cart[]> => {
    return await prismaClient.cart.findMany({});
};

export const createCart = async (cartData: CreateCartDto): Promise<Cart> => {
    return await prismaClient.cart.create({
        data: cartData
    });
};

export const readCart = async (cartID: number): Promise<Cart | null> => {
    return await prismaClient.cart.findUnique({
        where: { cartID }
    });
};

export const updateCart = async (cartID: number, cartData: UpdateCartDto): Promise<Cart> => {
    return await prismaClient.cart.update({
        where: { cartID },
        data: cartData
    });
};

export const deleteCart = async (cartID: number): Promise<void> => {
    await prismaClient.cart.delete({
        where: { cartID }
    });
};

import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

import { userRouter, categoryRouter, productRouter, cartRouter, paymentRouter, orderRouter, shippingInfoRouter, productReviewRouter } from './api/routes';

dotenv.config({ path: '.env' });

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Ecommerce Backend');
});

app.use(express.json());

export const prismaClient = new PrismaClient({
    log: ['query'],
});

// Routes
app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);
app.use('/payments', paymentRouter);
app.use('/orders', orderRouter);
app.use('/shipping-info', shippingInfoRouter);
app.use('/product-reviews', productReviewRouter);

// Start the express server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Working');
});

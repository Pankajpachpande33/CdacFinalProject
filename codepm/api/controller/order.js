import Order from '../modals/order.js'
import { customAlphabet, nanoid } from 'nanoid'
const NUMBER = customAlphabet('90436071082050470360980125', 25)

export const getAll = async (req, res, next) => {
    try {
        const order = await Order.find();
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
}


export const save = async (req, res, next) => {
    try {
        const totalamount = req.body.orderdetail.reduce((sum, value) => {
            return sum + (value.quantity * value.price)
        }, 0);
        console.log(totalamount)
        const order = new Order({
            orderno: `${nanoid(4)}${NUMBER(6)}`,
            orderdetail: req.body.orderdetail,
            totalamount: totalamount
        });

        await order.save();

        res.status(200).send("Order Saved.")
    } catch (error) {
        next(error);
    }
}
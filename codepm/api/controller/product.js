import Product from '../modals/product.js'

export const getAll = async (req, res, next) => {
    try {
        // const product = await Product.find({ isdeleted: false },
        //     { name: 1, description: 1, price: 1, categoryid: 1 });

        const product = await Product.aggregate([
            {
                $match: { isdeleted: false }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'categoryid',
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $unwind: { path: '$category', preserveNullAndEmptyArrays: true }
            },
            // {
            //     $addFields: { categoryname: "$category.name" }
            // },
            {
                $project: {
                    name: 1, description: 1, price: 1, categoryid: 1, categoryname: "$category.name"
                }
            }
        ]);

        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

export const getById = async (req, res, next) => {
    try {
        // const product = await Product.find({ _id: req.params.id, isdeleted: false },
        //     { name: 1, description: 1, price: 1, categoryid: 1 });

        const product = await Product.aggregate([
            {
                $match: { _id: req.params.id, isdeleted: false }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'categoryid',
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $unwind: { path: '$category', preserveNullAndEmptyArrays: true }
            },
            {
                $project: {
                    name: 1, description: 1, price: 1, categoryid: 1, "category.name": 1
                }
            }
        ]);

        res.status(200).json(product);
    } catch (error) {
        next(error);

    }
}

export const save = async (req, res, next) => {
    try {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            categoryid: req.body.categoryid
        });

        await product.save();

        res.status(200).send("Product Saved.")
    } catch (error) {
        next(error);
    }
}

export const remove = async (req, res, next) => {
    try {
        // await Product.deleteOne({ _id: req.params.id });
        await Product.updateOne({ _id: req.params.id }, { isdeleted: true });
        res.status(200).send("Product Deleted.")
    } catch (error) {
        next(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const result = await Product.updateOne(
            { _id: req.body.id, isdeleted: false },
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                categoryid: req.body.categoryid
            });
        if (result.modifiedCount > 0)
            res.status(200).send("Product Updated.");
        else
            res.status(200).send("Product not updated.");
    } catch (error) {
        next(error);
    }
}
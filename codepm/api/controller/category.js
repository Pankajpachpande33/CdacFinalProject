import Category from '../modals/category.js'

export const getAll = async (req, res, next) => {
    try {
        // const category = await Category.find({ isdeleted: false }).select("name -_id");
        const category = await Category.find({ isdeleted: false }, { name: 1, description: 1 });
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

export const getById = async (req, res, next) => {
    try {
        // const category = await Category.find({ isdeleted: false }).select("name -_id");
        const category = await Category.find({ _id: req.params.id, isdeleted: false }, { name: 1, description: 1 });

        res.status(200).json(category);
    } catch (error) {
        next(error);

    }
}

export const save = async (req, res, next) => {
    try {
        const category = new Category({
            name: req.body.name,
            description: req.body.description
        });

        await category.save();

        res.status(200).send("Category Saved.")
    } catch (error) {
        next(error);
    }
}

export const remove = async (req, res, next) => {
    try {
        // await Category.deleteOne({ _id: req.params.id });
        await Category.updateOne({ _id: req.params.id }, { isdeleted: true });
        res.status(200).send("Category Deleted.")
    } catch (error) {
        next(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const result = await Category.updateOne({ _id: req.body.id, isdeleted: false }, { name: req.body.name, description: req.body.description });
        if (result.modifiedCount > 0)
            res.status(200).send("Category Updated.");
        else
            res.status(200).send("Category not updated.");
    } catch (error) {
        next(error);
    }
}
exports.getCategorySales = async (req, res) => {
    try {
        const stats = await Sales.aggregate([
            { $match: { status: "shipped" } }, 
            { $group: { _id: "$category", total: { $sum: "$amount" } } }, 
            { $sort: { total: -1 } } 
        ]);
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
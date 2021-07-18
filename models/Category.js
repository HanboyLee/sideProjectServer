const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);

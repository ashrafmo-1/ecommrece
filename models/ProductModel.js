const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    store: { 
        type: Schema.Types.ObjectId, 
        ref: 'Store' 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    stock: { 
        type: String, 
        required: true, 
        unique: true 
    },
    images: [{ 
        type: String 
    }],
    category: { 
        type: String, 
        required: true 
    },
    subcategory: { 
        type: String 
    },
    brand: { 
        type: String 
    },
    quantity: { 
        type: Number, 
        default: 0 
    },
    inStock: { 
        type: Boolean, 
        default: true 
    },
    isFeatured: { 
        type: Boolean, 
        default: false 
    },
    isBestseller: { 
        type: Boolean, default: false 
    },
    specifications: [{ 
        type: String 
    }],
    rating: { 
        type: Number 
    },
    reviews: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number },
        text: { type: String },
    }],
    tags: [{ 
        type: String
    }],
    },
        { timestamps: true }
    )

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
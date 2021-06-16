import mongoose from 'mongoose'

const productsScema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Fields cannot be empty']
    },
    Price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    }
})

export default mongoose.model('products', productsScema)
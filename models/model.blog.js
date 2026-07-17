import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blogId: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
}, {timestamps: true})

const blogModel = mongoose.model('blog', blogSchema);

export default blogModel;
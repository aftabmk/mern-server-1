import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: {type : Schema.ObjectId , auto: true },
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
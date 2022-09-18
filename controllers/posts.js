import PostMessage from '../models/postMessage.js'
// create post
export const createPosts = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    }
    catch (e) {
        res.status(409).json({ message: e.message })
    }
}
// get multiple post
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find({});
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}

// delete single post
export const deletePost = async (req, res) => {
    const id = req?.body
    await PostMessage.deleteOne(id,
        function (err) {
            if (!err) res.json("Post is selcted!");
        })
        .clone()
        .catch(function (err) { res.json("Error while deleting Transaction Record", err) });
}

// get single update post
export const updatePost = async (req, res) => {
    const { _id, title, message, creator, tags, selectedFile, likeCount } = req?.body
    let list = await PostMessage.findByIdAndUpdate(_id,
        {
            title: title,
            message: message,
            creator: creator,
            tags: tags,
            selectedFile: selectedFile,
            likeCount: likeCount,
        }, { new: true })
    if (!list) return res.staus(404)
    list = await list.save()
    res.send(list)
}
export const likePost = async (req , res) =>
{
    const { _id , likeCount } = req.body
    const post = await PostMessage.findById(_id)
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{ likeCount : likeCount + 1} , {new : true})
    res.json(updatedPost)
}

export const getPost = async (req, res) => {
    const { _id } = req.body;

    try {
        const post = await PostMessage.findById(_id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
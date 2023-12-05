import Comment from "../models/Comment.js";

export const createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const createReply = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const comment = await Comment.findById(req.params.commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const reply = new Comment({
      userId,
      postId: comment.postId,
      parentId: comment._id,
      content,
      replies: [],
    });

    await reply.save();

    comment.replies.push(reply);
    await comment.save();

    res.status(201).json({ message: 'Reply created successfully', reply });
  } catch (error) {
    res.status(500).json({ message: 'Error creating reply', error });
  }
};

export const getComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate('replies');
        res.send(comment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getCommentsByPost = async (req, res) => {
  try {
      const comments = await Comment.find({ postId: req.params.postId, parentId: null }).populate('replies');
      res.send(comments);
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};


export const getReplies = async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.commentId).populate('replies');
  
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      res.status(200).json(comment.replies);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching replies', error });
    }
  };
  

export const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(comment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
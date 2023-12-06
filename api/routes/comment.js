import express from "express";
import { createComment, createReply, deleteComment, getComment, getComments, getCommentsByPost, getReplies, updateComment } from "../controller/comment.js";

const router = express.Router();

router.post('/', createComment);

router.post('/:commentId/replies', createReply);

router.get('/:id', getComment);

router.get('/', getComments);

router.get('/postId/:postId', getCommentsByPost);

router.get('/:commentId/replies', getReplies);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);


export default router
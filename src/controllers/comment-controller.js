import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res) => {
    try {
       
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.user.id, req.body.content );
        return res.status(201).json({
            succes: true,
            message: 'Successfully created a new comment',
            data: response,
            error: {}

        })
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: 'Something went wrong ',
            data: {},
            error: error

        })
    }
}

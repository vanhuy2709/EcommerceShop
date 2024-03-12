import { Rate, Input, Button, notification } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Action
import { createCommentAction } from '../../store/actions/user/apiRequest.action';

const CreateComment = ({ product, page, limit }) => {
  const dispatch = useDispatch();
  const { user, token } = JSON.parse(sessionStorage.getItem('user'));
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmitComment = () => {

    const newComment = {
      message: message.trim(),
      rating,
      user: user?._id,
      product: product?._id,
    }

    if (!newComment.rating) {
      notification.error({
        message: 'You forgot to rating star'
      })
    }

    dispatch(createCommentAction(newComment, page, limit));
    setRating(0);
    setMessage('');
  }

  return (
    <div>
      {/* User */}
      <div className="flex items-center gap-3 mb-3">
        <p className="font-medium text-gray-900">{user?.name}</p>
        <Rate
          value={rating}
          onChange={(value) => setRating(value)}
        />
      </div>

      {/* Comment */}
      <div className="flex items-center gap-6">
        <Input
          placeholder="Write your comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          onClick={() => handleSubmitComment()}
        >
          Comment
        </Button>
      </div>
    </div>
  );
};

export default CreateComment;
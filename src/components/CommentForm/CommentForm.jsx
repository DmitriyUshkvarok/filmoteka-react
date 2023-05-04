import { useState } from 'react';
import {
  StyleForm,
  FeedbackCommentFroup,
  StyleLabel,
  StyleInput,
  Textarea,
  ButtonComment,
} from './CpmmentForm.styled';

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <StyleForm onSubmit={handleSubmit}>
      <FeedbackCommentFroup>
        <StyleLabel htmlFor="inputNameComment">Name:</StyleLabel>
        <StyleInput
          id="inputNameComment"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FeedbackCommentFroup>
      <FeedbackCommentFroup>
        <StyleLabel htmlFor="textarea"> Message:</StyleLabel>
        <Textarea
          id="textarea"
          maxLength={100}
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FeedbackCommentFroup>
      <ButtonComment type="submit">Send Comment</ButtonComment>
    </StyleForm>
  );
};

export default CommentForm;

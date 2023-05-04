import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiTheMovieDB from 'service/kino-api';
import {
  Author,
  Content,
  ReviewList,
  ReviewListItem,
  InfoDiscription,
  CardsLoader,
} from './Reviews.styled';
import Container from 'components/Container/Container';

function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiTheMovieDB
      .fetchMovieReview(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  if (isLoading) {
    return <CardsLoader size={30} />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Container>
        <ReviewList>
          {reviews && reviews.length > 0 ? (
            reviews.map(({ author, content, id }) => (
              <ReviewListItem key={id}>
                <Author>Author: {author}</Author>

                <Content>Content:{content}</Content>
              </ReviewListItem>
            ))
          ) : (
            <InfoDiscription>No review members found</InfoDiscription>
          )}
        </ReviewList>
      </Container>
    </>
  );
}
export default Review;

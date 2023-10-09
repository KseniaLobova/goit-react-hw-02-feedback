import { Btn, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Btn key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </Wrapper>
  );
};

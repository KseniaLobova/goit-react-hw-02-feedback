export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button name="good" onClick={e => onLeaveFeedback(e.target.name)}>
        Good
      </button>
      <button name="neutral" onClick={e => onLeaveFeedback(e.target.name)}>
        neutral
      </button>
      <button name="bad" onClick={e => onLeaveFeedback(e.target.name)}>
        bad
      </button>
    </div>
  );
};

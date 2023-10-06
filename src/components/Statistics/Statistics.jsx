export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>positivePercentage:{positivePercentage}%</li>
    </ul>
  );
};

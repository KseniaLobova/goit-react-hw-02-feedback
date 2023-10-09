import { List, Item } from './Statistics.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>positivePercentage: {positivePercentage}%</Item>
    </List>
  );
};

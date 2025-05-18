import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const notifications = [
  "Your salary has been credited!",
  "Electricity bill is due next week.",
  "You've spent 80% of your food budget for this month.",
  "Internet bill was paid successfully.",
];

const tips = [
  "Try to save at least 20% of your monthly income.",
  "Avoid impulse purchases by waiting 24 hours before buying.",
  "Monitor your subscriptions to avoid hidden costs.",
  "Set a weekly budget to track your expenses better."
];

const NotificationsTips = () => {
  return (
    <div className="mt-4">
      <Card className="mb-4">
        <Card.Header>🔔 Notifications</Card.Header>
        <ListGroup variant="flush">
          {notifications.map((note, index) => (
            <ListGroup.Item key={index}>{note}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      <Card>
        <Card.Header>💡 Tips for Better Finance</Card.Header>
        <ListGroup variant="flush">
          {tips.map((tip, index) => (
            <ListGroup.Item key={index}>{tip}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default NotificationsTips;

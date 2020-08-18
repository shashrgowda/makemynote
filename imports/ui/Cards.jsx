import React from "react";

export default FacebookCards = ({ user, text, createdAt }) => {
  return (
    <Card className="demo-facebook-card">
      <CardHeader className="no-border">
        <div className="demo-facebook-avatar">
          <img
            src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg"
            width="34"
            height="34"
          />
        </div>
        <div className="demo-facebook-name">{user}</div>
        <div className="demo-facebook-date">{createdAt.toLocaleString()}</div>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
        <img
          src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg"
          width="40%"
        />
      </CardContent>
      <CardFooter className="no-border">
        <Link>Like</Link>
        <Link>Comment</Link>
        <Link>Share</Link>
      </CardFooter>
    </Card>
  );
};

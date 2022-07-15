import { faker } from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard/>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content="Some content"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:50PM"
        avatar={faker.image.avatar()}
        content="Some content"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 1:45PM"
        avatar={faker.image.avatar()}
        content="Some content"
      />
    </div>
  );
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

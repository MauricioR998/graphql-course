const users = [
  {
    id: "1",
    name: "Mauricio",
    email: "mauricio@example.com",
    age: 23,
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com",
    age: 22,
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@example.com",
    age: 24,
  },
];

const posts = [
  {
    id: "1",
    title: "t1",
    body: "y1",
    published: false,
    author: "1",
  },
  {
    id: "2",
    title: "t2",
    body: "y2",
    published: true,
    author: "1",
  },
  {
    id: "3",
    title: "t3",
    body: "t1",
    published: false,
    author: "2",
  },
];

const comments = [
  {
    id: "1",
    text: "t1",
    author: "1",
    post: "1",
  },
  {
    id: "2",
    text: "t2",
    author: "2",
    post: "1",
  },
  {
    id: "3",
    text: "t3",
    author: "1",
    post: "3",
  },
  {
    id: "4",
    text: "t4",
    author: "3",
    post: "2",
  },
];

const db = {
  users,
  posts,
  comments,
};

export default db;

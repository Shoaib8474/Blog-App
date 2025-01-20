const Article = require('../models/article');
const sequelize = require('../config/database');

const articles = [
  {
    title: "Getting Started with Express.js",
    content: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. In this article, we'll explore the basics of Express.js and how to build your first application...",
    publishDate: new Date('2024-01-15')
  },
  {
    title: "Understanding JavaScript Promises",
    content: "Promises are a fundamental concept in modern JavaScript programming. They provide a cleaner way to handle asynchronous operations. In this comprehensive guide, we'll dive deep into how Promises work...",
    publishDate: new Date('2024-01-16')
  },
  {
    title: "Mastering CSS Grid Layout",
    content: "CSS Grid Layout is a powerful tool that has revolutionized how we create web layouts. This article will cover everything from basic concepts to advanced techniques in using CSS Grid...",
    publishDate: new Date('2024-01-17')
  },
  {
    title: "React Hooks Deep Dive",
    content: "React Hooks have transformed how we write React components. In this article, we'll explore the most commonly used hooks, their use cases, and best practices for implementing them in your applications...",
    publishDate: new Date('2024-01-18')
  },
  {
    title: "Database Design Best Practices",
    content: "Good database design is crucial for building scalable applications. This article covers normalization, indexing strategies, and common pitfalls to avoid when designing your database schema...",
    publishDate: new Date('2024-01-19')
  }
];

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });
    // Insert
    await Article.bulkCreate(articles);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
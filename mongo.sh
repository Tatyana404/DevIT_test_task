# Создадим коллекцию "posts"
db.createCollection('posts', {
  validator:{
    $jsonSchema:{
      bsonType: "object",
      properties: {
        title: { "bsonType": "string" },
        content: { "bsonType": "string" },
        author: { "bsonType": "string" },
        like: { "bsonType": "int" },
        dislike: { "bsonType": "int" }
      }
    }
  }
});

# Заполним коллекцию данными для работы
db.posts.insertMany([
  { title: "MongoDB Basics", content: "Introduction to MongoDB and its features.", author: "Alice", like: 10, dislike: 2 },
  { title: "Advanced MongoDB", content: "Deep dive into MongoDB's advanced features.", author: "Bob", like: 15, dislike: 3 },
  { title: "MongoDB vs SQL", content: "Comparing MongoDB with traditional SQL databases.", author: "Charlie", like: 20, dislike: 5 },
  { title: "MongoDB Performance", content: "How to optimize MongoDB performance.", author: "Dave", like: 25, dislike: 4 },
  { title: "NoSQL Databases", content: "Overview of NoSQL databases including MongoDB.", author: "Eve", like: 30, dislike: 6 },
  { title: "Data Modeling in MongoDB", content: "Best practices for data modeling in MongoDB.", author: "Frank", like: 35, dislike: 7 },
  { title: "MongoDB Security", content: "Ensuring security in MongoDB deployments.", author: "Grace", like: 40, dislike: 8 },
  { title: "MongoDB Clustering", content: "Setting up MongoDB clusters for high availability.", author: "Heidi", like: 45, dislike: 9 },
  { title: "Managing MongoDB", content: "Tips for managing MongoDB instances.", author: "Ivan", like: 50, dislike: 10 },
  { title: "MongoDB and Big Data", content: "Leveraging MongoDB for big data analytics.", author: "Judy", like: 55, dislike: 11 }
]);


# Выведите 5 записей из коллекции posts пропустив первые 5
db.posts.find().skip(5).limit(5);

# Выведите все записи у которых like больше 100
db.posts.find({ like: { $gt: 100 } });

# Добавьте новую запись в коллекцию posts
db.posts.insertOne({
  title: "Understanding Indexes in MongoDB", content: "This post explains how indexes work in MongoDB and how to use them effectively.", author: "Kathy", like: 0, dislike: 0
});

# Выведите список авторов и их общее количество like
db.posts.aggregate([
  {
    $group: {
      _id: "$author",
      totalLikes: { $sum: "$like" }
    }
  },
  {
    $project: {
      _id: 0,
      author: "$_id",
      totalLikes: 1
    }
  }
]);

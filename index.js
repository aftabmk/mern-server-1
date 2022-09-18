import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import likeRoutes from './routes/likePost.js'
const app = express();

app.use(cors());
app.use(express.json({ limit: '30mb' }))

app.use('/posts', postRoutes);
app.use('/like',likeRoutes)

const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.URL

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



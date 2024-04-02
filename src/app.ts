import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import questionsRoute from './routes/questions.route';
import authRoute from './routes/auth.route';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './config/swagger.json';

const app: Express = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
connectDB();

// Routes
app.use('/questions', questionsRoute);
app.use('/auth', authRoute);

// Swagger documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

export default app;

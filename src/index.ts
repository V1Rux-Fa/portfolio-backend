import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cors from "cors";
import helmet from "helmet";
import userRouter from "./features/users/user.route.ts";
import gameRouter from "./features/game/game.route.ts";
import musicRouter from "./features/music/music.route.ts";
import foodRouter from "./features/food/food.route.ts";
import animeRouter from "./features/anime/anime.route.ts";

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Example API documentation with swagger-jsdoc",
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          require: ["name", "lastName", "address", "email", "password"],
          properties: {
            name: {
              type: "string",
              description: "name",
            },
            lastName: {
              type: "string",
              description: "lastName",
            },
            address: {
              type: "string",
              description: "address",
            },
            email: {
              type: "string",
              description: "email",
            },
            password: {
              type: "string",
              description: "password",
            },
          },
        },
      },
    },
  },
  // Tell swagger-jsdoc where to find route annotations
  apis: ["./src/**/*.ts"], // adjust path to match your source files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: false,
  }),
);
app.use(helmet());

app.use("/animes", animeRouter);
app.use("/users", userRouter);
app.use("/games", gameRouter);
app.use("/musics", musicRouter);
app.use("/foods", foodRouter);

export default app;

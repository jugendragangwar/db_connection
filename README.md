# Express.js + MySQL Backend Boilerplate

A clean, scalable backend boilerplate built with Express.js and MySQL, following MVC architecture principles.

## 📁 Folder Structure

```
/config
    db.js           -> Database connection configuration
/controllers      -> Route controllers (empty, ready for implementation)
/models           -> Data models (empty, ready for implementation)
/routes           -> API routes (empty, ready for implementation)
/middleware       -> Custom middleware (empty, ready for implementation)
/utils            -> Helper functions (empty, ready for implementation)
app.js            -> Express app setup and configuration
/tests              -> Unit and integration tests
.env                -> Environment variables (not tracked in git)
.env.example        -> Sample environment file
.eslintrc.json      -> ESLint configuration
.prettierrc.json    -> Prettier configuration
.gitignore          -> Git ignore rules
server.js           -> Application entry point
package.json        -> Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.0.0
- MySQL >= 5.7 or 8.0
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd express-mysql-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your actual database credentials:
   ```env
   PORT=5000
   NODE_ENV=development
   
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=myappdb
   DB_PORT=3306
   ```

4. **Create the database**
   ```sql
   CREATE DATABASE myappdb;
   ```

5. **Start the server**
   
   Development mode (with auto-reload):
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

## 📝 Available Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with nodemon
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm test` - Run tests (to be implemented)

## 🔌 API Endpoints

### Health Check
- **GET** `/api/health`
  - Returns server status
  - Response: `{ status: 'ok', message: 'Server is running', timestamp: '...' }`

### Root
- **GET** `/`
  - Welcome message
  - Response: `{ message: 'Welcome to Express + MySQL API', version: '1.0.0' }`

## 🗄️ Database Connection

The database connection is managed through a connection pool in `src/config/db.js`. The pool configuration includes:

- Connection limit: 10 concurrent connections
- Automatic reconnection handling
- Keep-alive enabled for long-running connections
- Proper error handling and process exit on connection failure

### Using the Database

```javascript
const { query, getPool } = require('./config/db');

// Execute a query
const users = await query('SELECT * FROM users WHERE id = ?', [userId]);

// Get the pool for advanced operations
const pool = getPool();
const connection = await pool.getConnection();
// ... use connection
connection.release();
```

## 🛠️ Error Handling

The application includes comprehensive error handling:

- Global error middleware for Express routes
- Unhandled promise rejection handler
- Uncaught exception handler
- Database connection error handling
- 404 route handler

## 🔧 Code Quality

This boilerplate includes:

- **ESLint** - Code linting and consistency
- **Prettier** - Code formatting
- **Nodemon** - Auto-reload during development

Run linting:
```bash
npm run lint
npm run lint:fix
```

Format code:
```bash
npm run format
```

## 📦 Dependencies

### Production
- `express` - Web framework
- `mysql2` - MySQL client with promise support
- `dotenv` - Environment variable management
- `cors` - CORS middleware

### Development
- `nodemon` - Development auto-reload
- `eslint` - Code linting
- `prettier` - Code formatting

## 🚦 Next Steps

1. Create your models in `/models`
2. Define your routes in `/routes`
3. Implement controllers in `/controllers`
4. Add custom middleware in `/middleware`
5. Create helper functions in `/utils`
6. Write tests in `/tests`

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
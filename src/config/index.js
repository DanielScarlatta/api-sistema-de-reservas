module.exports = {
  app: {
    port: process.env.PORT || 3000,
    portssl: process.env.PORT_SSL
  },
  db: {
    connectionString: process.env.DB_ACCESS
  },
  secret: process.env.SECRET
}; 
export const environment = {
    production: false,
    auth: {
      clientID: '5c706fc1fa50297ff977215a',
      domain: 'flasktut.auth0.com', // e.g., you.auth0.com
      audience: 'http://localhost:5000/oauth/authorize', // e.g., http://localhost:3001
      redirect: 'http://localhost:5000/api/usernames',
    }
  };
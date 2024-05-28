CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255)
);

CREATE TABLE user_languages (
  user_id INT REFERENCES users(id),
  language VARCHAR(255),
  PRIMARY KEY (user_id, language)
);

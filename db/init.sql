CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    sent BOOLEAN DEFAULT FALSE
);

INSERT INTO messages (content) VALUES ('Hello, this is a test message!');

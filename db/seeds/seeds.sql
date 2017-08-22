INSERT INTO users (username, email, password_digest, firstname, lastname) VALUES
  (
    'alvarian',
    'alvarian88@gmail.com',
    'alvarian88',
    'ivan',
    'alvarez'
  );

INSERT INTO deck 
(question, answer, correct, setTime, timesRight, timesWrong, user_id, deckNumber) 
VALUES
(
  'ivan, what is parsuedo?',
  'its a notation resembling a simplified programming language, used in program design. duh.',
  FALSE,
  '',
  0,
  0,
  1,
  1
),
(
  'WHAT IS THE ANSWER TO LIFE?',
  '42',
  FALSE,
  '',
  0,
  0,
  1,
  1
)


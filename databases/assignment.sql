-- Count the tasks
SELECT COUNT(*) as total_count FROM task;
-- Count tasks without valid due dates
SELECT COUNT(*) AS total_count 
FROM task WHERE due_date ISNULL OR date(due_date)ISNULL;
-- Done tasks
SELECT * FROM task WHERE status_id=3;
-- Tasks not done
SELECT * FROM task WHERE status_id IS NOT 3;
-- Tasks by creation date
SELECT * FROM task ORDER BY task.created DESC;
-- Most recently created task
SELECT * FROM task ORDER BY task.created DESC LIMIT 1;
-- Tasks mentioning database
SELECT title, due_date FROM task WHERE description LIKE '%database%' OR title LIKE '%database%';
-- Task titles and IDs
SELECT id, title FROM task ORDER BY id ASC;
-- Tasks in progress
SELECT id, title FROM task WHERE status_id IS 2 ORDER BY id ASC;
-- Tasks without due dates
SELECT id,title FROM task WHERE due_date IS NULL ORDER BY id ASC;
-- Tasks alphabetically
SELECT id,title FROM task ORDER BY title ASC;
-- Five highest task IDs
SELECT id, title FROM task ORDER BY id DESC LIMIT 5;
-- Unassigned tasks
SELECT id,title FROM task WHERE user_id ISNULL ORDER BY id ASC;
-- Rename a task
UPDATE task SET title = 'Wash the laundry' WHERE id = 1;
-- Mark a task done
UPDATE task SET status_id = 3 WHERE id = 22;
-- Assign an unassigned task
UPDATE task SET user_id = 11 WHERE id = 23;
-- Set unassigned task status
UPDATE task SET status_id = 1 WHERE user_id ISNULL;
-- Delete one task
DELETE FROM task WHERE id = 35;
-- Remove one task tag
DELETE FROM task_tag WHERE task_id = 1 AND tag_id = 2;
-- Create task notes table
CREATE TABLE task_note (
  id INTEGER PRIMARY KEY,
  task_id INTEGER NOT NULL,
  note TEXT NOT NULL,
  FOREIGN KEY (task_id) REFERENCES task(id)
);

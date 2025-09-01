-- remove below in production
DROP TABLE IF EXISTS [cookbook];

-- table for recipes
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    created_by TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    servings INT,
    tags TEXT
);

-- table for ingredients 
-- CREATE TABLE ingredients (
--     id SERIAL PRIMARY KEY,
--     recipe_id
-- )


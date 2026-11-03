CREATE (POST): Adds a new recipe.
READ (GET): Displays all recipes or the details of one recipe.
UPDATE (PUT): Changes the information in an existing recipe.
DELETE (DELETE): Removes a recipe from the database.

Add recipe:
User Adds a recipe (Clicks Add Recipe) - 
1. User enters the recipe title, ingredients, and instructions in the frontend form and clicks Save. 
2. The frontend sends a POST /recipes request to the backend. 
3. The backend checks the information and asks the database to save the new recipe. 
4. The database stores it and confirms that it was saved. 
5. The backend sends a success response to the frontend, and the frontend displays the new recipe

Read recipe:
User Selects the recipe - 
1. User selects a recipe
2. The frontend sends GET recipe request with ID to the backend.
3. The backend searches the recipe with ID. 
4. The database returns the recipe details to the backend.
5. The backend sends the recipe details to the frontend, and the frontend displays the recipe.

Edit recipe:
User Updates a recipe (Clicks Edit Recipe) -
1. User selects an existing recipe and clicks the Edit.
2. The frontend sends a GET recipe request with ID to the backend to get the recipe details.
3. The backend gets the recipe details from the database and sends it to the frontend.
4. The frontend displays the existing recipe details in an editable form.
5. User edits the recipe details clicks Save.
6. The frontend sends a PUT recipe request with ID and the updated recipe details to the backend.
7. The backend checks the updated information and asks the database to update the existing recipe.
8. The database saves the changes and confirms that the recipe was updated.
9. The backend sends a success response to the frontend, and the frontend displays the updated recipe.

Delete Recipe:
User Deletes a Recipe (Clicks Delete Recipe)-
1. User selects a recipe and clicks Delete.
2. The frontend sends a DELETE request with ID to the backend.
3. The backend identifies the recipe using its unique ID.
4. The backend asks the database to delete the selected recipe.
5. The database removes the recipe and confirms that it was deleted.
6. The backend sends a success response to the frontend.
7. Frontend removes the deleted recipe from the recipe list.
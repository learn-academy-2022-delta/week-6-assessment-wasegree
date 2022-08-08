# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Any missing information from he database like a missing foreign key or columns can be fixed by perfoming a migration. The foreign key would be stored in the Cohort model and the name of the foreign key would be cohort_id.

Researched answer: Since we are dealing with Active Records Associations we are establishing a relationship between to seperate tables in the database. Active Records Asscoiation uses the concept of has_many and belongs_to in order to establish this relationship. In this scenario, a Cohort has_many students which means that Students belong_to a cohort. To add a column for the foreign key you would do the following:
rails generator or g migration add_foreign_key

2. Which RESTful routes must always be passed params? Why?

Your answer: The show, update, and delete Restful route should always be passed params. This is because when params are used in thses Restful routes, users can to make changes that will be refelcted in existing information within the database.

Researched answer: Restful routes are important CRUD actions that have a specific structure in the controller. The show, update, and delete routes are actions that cannot be done without params because params are what give us access to stored information within the database,

3. Name three rails generator commands. What is created by each?

Your answer: 
Rails generate model creates a new table in the the database. The information given to the table names must be assigned a datatype when created and the model name must be one word in PascalCase.
Rails generate migration lets us add, edit, or delete the columns in the database.
Rails generate resource will generate routes for the controller. It is used when we do not have a view in out MVC. Instead, we use postman to see the the updates to our database.

Researched answer: Rails generate migrateion gives database users control over the modifying the columns of the database. You can see these changes via the schema.
Rails generate model creates a new table for the database. The name of the table should always be singular and one word.
rails generate resource eliminates the process of having to code out routes within the application because there is no use for the view.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - This will show all instances of students from the db

action: "POST" location: /students - Post will create a student and send it to be stored in the db

action: "GET" location: /students/new - A new student will be created but not submitted 

action: "GET" location: /students/2 - The student assigned primary key 2 will be displayed

action: "GET" location: /students/2/edit - Modifies student assigned at primary key 2

action: "PATCH" location: /students/2 - Updates the previous change to student assigned primary key 2

action: "DELETE" location: /students/2 - Removes student assigned at primary key 2  

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I can create a full-stack Rails application.
As a developer, my to do list can have a name, description, and status.
As a developer, I can add new tasks to my database.
As a user, I can see all the tasks listed on the home page of the application.
As a user, I can click a button to create a new task.
As a user, I can be redirected to a new page where I can input the description of the tasks and the status of the task.
As a user, I can navigate from the new page back to the home page.
As a user, I can click a button that will submit my tasks to the database.
As a user, I can update my task.
As a user, I can delete my task.

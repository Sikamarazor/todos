## Frontend Assignment 
This is a simple React assignment to test your javascript proficiency. 

### Resources

 * [React Docs](https://facebook.github.io/react/docs/hello-world.html)
 * [Source Tree Tutorial](https://confluence.atlassian.com/bitbucket/tutorial-learn-sourcetree-with-bitbucket-cloud-760120235.html)
 * [Git Introduction]((https://git-scm.com/book/en/v1/Getting-Started)) if you prefer to use the CMD instead of source tree
 
Notes: Git is not a requirement for completing the assignment but it is recommended. When reviewing
the assignment we would like to go through the commits to understand the thinking. So if you do use git please commit often.

Please create an account on either [Bitbucket](https://bitbucket.org/) or [GitHub](https://github.com/) and place your repository there. Bitbucket allows you to create free private repos

### Requirements

Create a small react web page that is a simple todo task list manager

   * The user must be able to create new tasks
   * The page must list all the tasks by default
   * Tasks can be either be in a complete or incomplete state
   * Completed tasks have a strike through the text
   * Clicking on a task will toggle it between complete and incomplete
   * Implement a filter that will exclude completed tasks if selected

### Project Setup

#### Install Required Tools

 * Install [git](https://git-scm.com/downloads)
 * Install [node](https://nodejs.org/en/download/)
 
#### Install Dependencies
 
```
cd technical-assignment
npm install
```
 
#### Start Project
 
```
npm run start
```
 
 This should open the project in your browser. If it does not navigate to [localhost:3000](http://localhost:3000)
  
### Questions
     
If you have any questions please email [team@stackworx.io](mailto:team@stackworx.io)

### Bonus

  Optional extra tasks if you find the assignment too easy

 * Allow the user to search tasks
 * When sorting the tasks place incomplete tasks above completed ones
 * Implement Local Storage, e.g. refreshing the browser does not lose tasks
 * Integrate with [Redux](http://redux.js.org/)

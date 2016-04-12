#A pattern to display application errors to the user
##(This is a reproduction of the example from the "Discover meteor" book.)

###Usage
Use the template
`{{> meteorErrors}}` inside the html where you want to display the error list

Use `Errors.Throw(message)` in a client side js file to add a new error to the list.

Errors will be removed after 3 seconds.
# What's for Dinner? 

### Abstract:

The guesswork of the age-old question of 'What's for dinner?' is no longer with this application. A randomly generated dish option or entire meal is presented to the user. A user can quickly choose which option they would like by making a selection on the left, clicking 'Let's Cook!', and an option is presented on the right. The user can also start over by selecting the 'clear' button that appears below the option. 

### Installation Instructions:

1. Fork and clone this repo.
1. `cd` into the directory
1. To open the application type `open index.html`

### Preview of App:

[![What's for dinner preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjQ4MmE3ZDZmZDQwNDM1N2VmZDg4YTYzNzVlMDQ4OTQ2MTM1MmM0OCZjdD1n/N6WVo95Hp55V7jyAxy/giphy.gif)]

### Context:

The project took approximately 15 hours to complete including planning and research. 

I have completed week 3 of a 6 month intensive program through Turing School of Software and Design. 

### Contributors:

Sharie Trachsel - [GitHub](https://github.com/sdtrachsel)

### Learning Goals:

The learning goals were to gain experience building an application using HTML, CSS, and JavaScript, write HTML and CSS to match a provided comp, and understand how to listen to and respond to user events. 

I utilized git workflow to enhance code integrity and [CodePen](https://codepen.io) to troubleshoot styling changes/issues. 

### Wins + Challenges:

My largest win was refactoring the code that populates the right-hand box after a user clicks the 'Let's Cook!' button. The original function although meeting the requirements, was hard to understand and did not follow SRP. I originally utilized three arrays for the data. I changed this to one array of objects. Using an array of objects allowed me to breakdown the original function and make the code more dynamic. 

The largest challenge was during the start of the project, I did not follow the proper git workflow for pull requests and merging branches. I erroneously merged the last branch and then reverted. This resulted in portions of code being overwritten. I went through my commit history to find the impacted code and make needed corrections. Following the corrections, I began implementing the correct git workflow regarding branches and merging. 

Another challenge was properly aligning the right-hand box contents so the clear button would remain in the lower right corner as the the above changed in size and length. In order to overcome this, I sketched the solution and outlined the needed elements along with styling divs. I utilized [CodePen](https://codepen.io) to mirror the right-hand output box. I proceeded to box out the elements and to make adjustments while referencing [MDN Web Docs CSS section](https://developer.mozilla.org/en-US/docs/Web/CSS). When the styling was working correctly, I copied the code over to my styling sheet. 

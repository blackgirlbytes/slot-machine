# slot machine
<img width="727" alt="slotmachine" src="https://user-images.githubusercontent.com/22990146/37012688-efa9f5d4-20c3-11e8-8254-9991cb133ac1.PNG">

Built a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update

## How It's Made:
Tech used: HTML, CSS, JavaScript, jQuery

In this application, I made three arrays with 5 different images. I then use the Math.random() method to choose random images from each array. I made conditional statements saying--if all the image indexes are the same, then show text in the HTML that says you won. If not, show text to say you lost. I also created a variable that holds the total . Then I added two buttons where you could wager 1 dollar, or 5 dollars. When you wager this money,your total lowers. However, when you win, I increment your total by two. When you lose, I take 1 away from your total. For all of the buttons, I used click functions.

Optimizations
I could be more dry with my jQuery code. 

Lessons Learned:
I learned about the indexes that arrays hold. 

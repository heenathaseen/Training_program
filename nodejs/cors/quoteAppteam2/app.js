const express = require('express');
const cors =require('cors')
const app = express();

app.use(cors({
    origin:"http://127.0.0.1:5500",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    

}));



app.get("/quotes",(req,res)=>{

    res.json([ 
      {
        "text": "Once you choose hope, anythings possible.",
        "author": "Christopher Reeve"
      },
      {
        "text": "God always takes the simplest way.",
        "author": "Albert Einstein"
      },
      {
        "text": "One fails forward toward success.",
        "author": "Charles Kettering"
      },
      {
        "text": "From small beginnings come great things.",
        "author": "anonymous"
      },
      {
        "text": "Learning is a treasure that will follow its owner everywhere",
        "author": "Chinese proverb"
      },
      {
        "text": "Be as you wish to seem.",
        "author": "Socrates"
      },
      {
        "text": "The world is always in movement.",
        "author": "V. Naipaul"
      },
      {
        "text": "Never mistake activity for achievement.",
        "author": "John Wooden"
      },
      {
        "text": "What worries you masters you.",
        "author": "Haddon Robinson"
      },
      {
        "text": "One faces the future with ones past.",
        "author": "Pearl Buck"
      },
      {
        "text": "Goals are the fuel in the furnace of achievement.",
        "author": "Brian Tracy"
      },
      {
        "text": "Who sows virtue reaps honour.",
        "author": "Leonardo da Vinci"
      },
      {
        "text": "Be kind whenever possible. It is always possible.",
        "author": "Dalai Lama"
      },
      {
        "text": "Talk doesn't cook rice.",
        "author": "Chinese proverb"
      },
      {
        "text": "He is able who thinks he is able.",
        "author": "Buddha"
      },
      {
        "text": "A goal without a plan is just a wish.",
        "author": "Larry Elder"
      },
      {
        "text": "To succeed, we must first believe that we can.",
        "author": "Michael Korda"
      },
      {
        "text": "Learn from yesterday, live for today, hope for tomorrow.",
        "author": "Albert Einstein"
      },
      {
        "text": "A weed is no more than a flower in disguise.",
        "author": "James Lowell"
      },
      {
        "text": "Do, or do not. There is no try.",
        "author": "Yoda"
      },
      {
        "text": "All serious daring starts from within.",
        "author": "Harriet Beecher Stowe"
      },
      {
        "text": "The best teacher is experience learned from failures.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Think how hard physics would be if particles could think.",
        "author": "Murray Gell-Mann"
      },
      {
        "text": "Love is the flower you've got to let grow.",
        "author": "John Lennon"
      },
      {
        "text": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill"
      },
      {
        "text": "Time is the wisest counsellor of all.",
        "author": "Pericles"
      },
      {
        "text": "You give before you get.",
        "author": "Napoleon Hill"
      },
      {
        "text": "Wisdom begins in wonder.",
        "author": "Socrates"
      },
      {
        "text": "Without courage, wisdom bears no fruit.",
        "author": "Baltasar Gracian"
      },
      {
        "text": "Change in all things is sweet.",
        "author": "Aristotle"
      },
      {
        "text": "What you fear is that which requires action to overcome.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "When performance exceeds ambition, the overlap is called success.",
        "author": "Cullen Hightower"
      },
      {
        "text": "When deeds speak, words are nothing.",
        "author": "African proverb"
      },
      {
        "text": "Real magic in relationships means an absence of judgement of others.",
        "author": "Wayne Dyer"
      },
      {
        "text": "I never think of the future. It comes soon enough.",
        "author": "Albert Einstein"
      },
      {
        "text": "Skill to do comes of doing.",
        "author": "Ralph Emerson"
      },
      {
        "text": "Wisdom is the supreme part of happiness.",
        "author": "Sophocles"
      },
      {
        "text": "I believe that every person is born with talent.",
        "author": "Maya Angelou"
      },
      {
        "text": "Important principles may, and must, be inflexible.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "The undertaking of a new action brings new strength.",
        "author": "Richard Evans"
      },
      {
        "text": "The years teach much which the days never know.",
        "author": "Ralph Emerson"
      },
      {
        "text": "Our distrust is very expensive.",
        "author": "Ralph Emerson"
      },
      {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      },
      {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      },
      {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
      },
      {
        "text": "Well begun is half done.",
        "author": "Aristotle"
      },
      {
        "text": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
      },
      {
        "text": "Self-complacency is fatal to progress.",
        "author": "Margaret Sangster"
      },
      {
        "text": "Peace comes from within. Do not seek it without.",
        "author": "Buddha"
      },
      {
        "text": "What you give is what you get.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "We can only learn to love by loving.",
        "author": "Iris Murdoch"
      },
      {
        "text": "Life is change. Growth is optional. Choose wisely.",
        "author": "Karen Clark"
      },
      {
        "text": "You'll see it when you believe it.",
        "author": "Wayne Dyer"
      },
      {
        "text": "Today is the tomorrow we worried about yesterday.",
        "author": "Heena"
      },
      {
        "text": "It's easier to see the mistakes on someone else's paper.",
        "author": "Asad"
      }
    ]
    )

});



app.listen('3000', ()=>{

    console.log("Server started");

});
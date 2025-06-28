require("dotenv").config();

const mongoose = require("mongoose");
const connectToDatabase = require("../config/database");
const { User, Quiz, Question, Answer, Result } = require("./Schema");

const seed = async () => {
  await connectToDatabase();

  console.log("Clearing old data...");
  await Answer.deleteMany();
  await Question.deleteMany();
  await Result.deleteMany();
  await Quiz.deleteMany();
  await User.deleteMany();

  console.log("Seeding new data...");
  const user1 = await User.create({
    email: "ivona@example.com",
    password: "87654321",
    username: "Ivona",
  });

  const user2 = await User.create({
    email: "Jure@example.com",
    password: "87654321",
    username: "Jure",
  });

  const quizzes = [
    {
      title: "Nintendo Culture",
      description: "Trivia about Nintendo's history and culture.",
      questions: [
        {
          questionText: "When was Nintendo founded?",
          correct: "1889",
          options: ["1889", "1925", "2001", "1906"],
        },
        {
          questionText: "Which character is Nintendo's mascot?",
          correct: "Mario",
          options: ["Sonic", "Crash Bandicoot", "Mario", "Master Chief"],
        },
        {
          questionText: "Which console introduced motion controls?",
          correct: "Nintendo Wii",
          options: ["GameCube", "Nintendo Wii", "PlayStation 2", "Nintendo 64"],
        },
        {
          questionText: "Which franchise is known for catching creatures?",
          correct: "Pokémon",
          options: ["Zelda", "Pokémon", "Metroid", "Animal Crossing"],
        },
      ],
    },
    {
      title: "Retro Gaming",
      description: "Dive into game classics.",
      questions: [
        {
          questionText: "Which game popularized side-scrolling platformers?",
          correct: "Super Mario Bros.",
          options: [
            "Donkey Kong",
            "Pac-Man",
            "Space Invaders",
            "Super Mario Bros.",
          ],
        },
        {
          questionText: "What is the highest-selling retro console?",
          correct: "PlayStation 2",
          options: ["NES", "SNES", "PlayStation 2", "Sega Genesis"],
        },
        {
          questionText:
            "What is the name of the protagonist in the original Legend of Zelda?",
          correct: "Link",
          options: ["Zelda", "Link", "Ganon", "Epona"],
        },
        {
          questionText:
            "Which arcade game was the first to feature a 'kill screen'?",
          correct: "Pac-Man",
          options: ["Space Invaders", "Donkey Kong", "Pac-Man", "Galaga"],
        },
        {
          questionText:
            "Which game is considered the first commercially successful arcade game?",
          correct: "Pong",
          options: ["Pong", "Space Invaders", "Asteroids", "Breakout"],
        },
        {
          questionText:
            "In which year was the Nintendo Entertainment System (NES) released in North America?",
          correct: "1985",
          options: ["1980", "1983", "1985", "1987"],
        },
      ],
    },
    {
      title: "PlayStation vs Xbox",
      description: "The rivalry of gaming giants.",
      questions: [
        {
          questionText:
            "Which console generation marked the biggest head-to-head sales rivalry?",
          correct: "PlayStation 4 vs Xbox One",
          options: [
            "PlayStation 2 vs Xbox",
            "PlayStation 3 vs Xbox 360",
            "PlayStation 4 vs Xbox One",
            "PlayStation 5 vs Xbox Series X",
          ],
        },
        {
          questionText: "Which company owns PlayStation?",
          correct: "Sony",
          options: ["Sony", "Microsoft", "Nintendo", "Sega"],
        },
        {
          questionText:
            "Which PlayStation console outsold the Xbox 360 by a large margin?",
          correct: "PlayStation 2",
          options: [
            "PlayStation 1",
            "PlayStation 2",
            "PlayStation 3",
            "PlayStation 4",
            "PlayStation 5",
          ],
        },
        {
          questionText: "Which game series is a PlayStation exclusive?",
          correct: "Uncharted",
          options: ["Halo", "Uncharted", "Forza", "Gears of War"],
        },
        {
          questionText: "Which game series is an Xbox exclusive?",
          correct: "Halo",
          options: ["God of War", "Halo", "Gran Turismo", "Spider-Man"],
        },
        {
          questionText: "Which company owns Xbox?",
          correct: "Microsoft",
          options: ["Sony", "Nintendo", "Valve", "Microsoft"],
        },
        {
          questionText:
            "To which platform is 'Ori and the Blind Forest' game exclusive?",
          correct: "Xbox",
          options: ["Playstation", "Xbox"],
        },
        {
          questionText:
            "Which company launched a subscription service called Game Pass?",
          correct: "Microsoft",
          options: ["Sony", "Microsoft", "Nintendo", "EA"],
        },
      ],
    },
    {
      title: "Game Development Quiz",
      description: "Learn about how games are made.",
      questions: [
        {
          questionText: "Which engine is widely used for indie games?",
          correct: "Unity",
          options: ["Unreal Engine", "CryEngine", "Unity", "Frostbite"],
        },
        {
          questionText: "What language is common in game scripting?",
          correct: "C#",
          options: ["C#", "Ruby", "Java", "PHP"],
        },
        {
          questionText:
            "Which engine is known for high-end graphics and AAA games?",
          correct: "Unreal Engine",
          options: ["Unity", "Godot", "Unreal Engine", "GameMaker"],
        },
        {
          questionText:
            "Who designs the levels, puzzles, and missions in a game?",
          correct: "Level Designer",
          options: ["Sound Designer", "Level Designer", "Producer", "Animator"],
        },
        {
          questionText: "What is 'crunch time' in the game industry?",
          correct: "Period of intense overtime work before release",
          options: [
            "Time spent testing games",
            "A fun gaming session",
            "Period of intense overtime work before release",
            "A beta testing phase",
          ],
        },
        {
          questionText:
            "Which programming paradigm is commonly used in game development?",
          correct: "Object-Oriented Programming",
          options: [
            "Functional Programming",
            "Procedural Programming",
            "Object-Oriented Programming",
            "Declarative Programming",
          ],
        },
        {
          questionText: "What is the role of a game producer?",
          correct: "Overseeing the game's development",
          options: [
            "Writing the game script",
            "Designing characters",
            "Overseeing the game's development",
            "Creating sound effects",
          ],
        },
        {
          questionText:
            "Which file format is often used for 3D models in games?",
          correct: ".FBX",
          options: [".FBX", ".DOCX", ".PNG", ".HTML"],
        },
        {
          questionText: "What does FPS usually mean in programming games?",
          correct: "Frames Per Second",
          options: [
            "First Person Shooter",
            "Frames Per Second",
            "Fast Program Speed",
            "File Processing System",
          ],
        },
        {
          questionText:
            "What is the most common glitch during early stages of game development?",
          correct: "T-position",
          options: [
            "Event desync",
            "T-position",
            "AI pathfinding errors",
            "Graphics rendering problems",
            "Z-fighting",
            "Infinite loop",
          ],
        },
      ],
    },
    {
      title: "Minecraft Trivia",
      description: "Fun facts about Minecraft.",
      questions: [
        {
          questionText: "Who created Minecraft?",
          correct: "Markus Persson",
          options: [
            "Markus Persson",
            "Elon Musk",
            "Tim Sweeney",
            "Gabe Newell",
          ],
        },
        {
          questionText: "What is the final boss in Minecraft?",
          correct: "Ender Dragon",
          options: ["Wither", "Zombie", "Ender Dragon", "Skeleton King"],
        },
        {
          questionText: "Which material do you need to craft a Nether Portal?",
          correct: "Obsidian",
          options: ["Obsidian", "Diamond", "Iron", "Emerald"],
        },
        {
          questionText: "What hostile mob explodes when near the player?",
          correct: "Creeper",
          options: ["Skeleton", "Spider", "Creeper", "Zombie Pigman"],
        },
        {
          questionText: "Which tool is best for mining stone?",
          correct: "Pickaxe",
          options: ["Axe", "Hoe", "Pickaxe", "Sword"],
        },
        {
          questionText: "What happens if you sleep in the Nether?",
          correct: "The bed explodes",
          options: [
            "You wake up in the Overworld",
            "Time moves faster",
            "The bed explodes",
            "You teleport to The End",
          ],
        },
      ],
    },
  ];

  for (const quizData of quizzes) {
    const quiz = await Quiz.create({
      title: quizData.title,
      description: quizData.description,
    });

    for (const questionData of quizData.questions) {
      const question = await Question.create({
        questionText: questionData.questionText,
        QuizId: quiz._id,
      });

      for (const option of questionData.options) {
        await Answer.create({
          answerText: option,
          isCorrect: option === questionData.correct,
          QuestionId: question._id,
        });
      }
    }
  }

  const sampleQuizzes = await Quiz.find().limit(2);
  for (const quiz of sampleQuizzes) {
    await Result.create({
      Score: Math.floor(Math.random() * 100),
      UserId: user1._id,
      QuizId: quiz._id,
    });
    await Result.create({
      Score: Math.floor(Math.random() * 100),
      UserId: user2._id,
      QuizId: quiz._id,
    });
  }

  console.log("\nCompleted seeding.");
  process.exit();
};

seed();

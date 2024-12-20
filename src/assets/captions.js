const captions = [
  "🏆 <b>Success</b> → Starts with <i>you</i> 💪",
  "🌟 <u>Dream <span style='color:blue;'>big</span></u> → Achieve bigger 🚀",
  "💡 <i>Innovate</i> → <span style='background-color:yellow;'>Inspire</span> 🌍",
  "🚴‍♂️ Progress → <b>One step at a time</b> 🏁",
  "📈 Growth → <u><span style='color:green;'>Consistent effort</span></u> pays off 💼",
  "🌿 Small changes → <b>Big <span style='background-color:lightgreen;'>impact</span></b> 🌏",
  "🎯 <span style='color:purple;'>Focus</span> → <i>Aim for excellence</i> 🎉",
  "🔥 <u><span style='color:orange;'>Passion</span></u> → Fuels success 🏆",
  "🌊 Flow → <b>Let <span style='color:teal;'>creativity lead</span></b> ✨",
  "💬 Communication → <u>Builds <span style='background-color:lightblue;'>strong connections</span></u> 🤝",
  "💎 Excellence → <b>Starts with <span style='color:gold;'>effort</span></b> 🌟",
  "📚 Learn → <u><span style='color:navy;'>Grow</span> every day</u> 🌱",
  "🎵 Tune your life → <b>Sing your <span style='color:red;'>success</span></b> 🎤",
  "🌈 <i>Chase <span style='color:indigo;'>dreams</span></i> → Embrace joy 🌟",
  "📖 Knowledge → <u>Unlocks <span style='background-color:palegreen;'>new doors</span></u> 🚪",
  "🚀 <b>Take off</b> → <span style='color:violet;'>Reach new heights</span> 🌌",
  "🏋️‍♂️ <u>Strength</u> → Comes from <span style='color:lime;'>persistence</span> 💪",
  "🍀 <span style='color:green;'>Luck</span> → Favors the <b>prepared</b> 💼",
  "💥 Bold moves → <u><span style='color:crimson;'>Change the game</span></u> 🕹️",
  "🌟 Shine bright → <b><span style='background-color:gold;'>Be the light</span></b> ✨",
  "🧗‍♂️ Climb higher → <u>Overcome <span style='color:brown;'>challenges</span></u> 🏔️",
  "🏆 Achieve greatness → <b>Celebrate <span style='color:magenta;'>victories</span></b> 🎉",
  "📅 Plan → <u><span style='color:teal;'>Prepare to succeed</span></u> 🗓️",
  "📌 Goals → <b><span style='color:orange;'>Stay focused</span></b> and win 🏅",
  "🌞 Morning routine → <u>Sets the <span style='color:gold;'>tone</span></u> for the day 🌅",
  "💻 <b>Work smarter</b> → <span style='color:blue;'>Achieve faster</span> 🚀",
  "🔑 <i>Unlock potential</i> → Discover <span style='background-color:lightyellow;'>possibilities</span> 🔓",
  "🌸 Growth → <u>Blooms with <span style='color:pink;'>patience</span></u> 🌼",
  "⚡ Energy → <b><span style='color:yellow;'>Ignites progress</span></b> 🔥",
  "🎨 Creativity → <u><span style='color:violet;'>Paints</span> the future</u> 🎭",
  "🌍 Change → <b>Starts with <span style='color:green;'>you</span></b> 🌟",
  "🛠️ Build → <u>Create <span style='color:gray;'>lasting impact</span></u> 🏗️",
  "🎩 <i>Innovation</i> → <b>Magic happens here</b> 🪄",
  "🏞️ Explore → <u>Find <span style='color:teal;'>new perspectives</span></u> 🌅",
  "🚦 Green light → <b>Take <span style='color:lime;'>action</span></b> now 💡",
  "🕰️ Time → <u><span style='color:blue;'>Invest wisely</span></u> ⏳",
  "🚢 Navigate challenges → <b>Sail to <span style='color:skyblue;'>success</span></b> 🛳️",
  "🎵 Harmony → <u><span style='background-color:lavender;'>Unites teams</span></u> 🎼",
  "🎯 Aim → <b><span style='color:red;'>Stay sharp</span></b> and win 🏅",
  "🛤️ Persistence → <u>Keeps you <span style='color:brown;'>on track</span></u> 🚂",
  "✨ Spark joy → <b>Ignite <span style='color:gold;'>hope</span></b> 🌟",
  "📈 Strive for growth → <u>Reach <span style='color:green;'>new heights</span></u> 📊",
  "🎉 Celebrate → <b><span style='background-color:yellow;'>Every milestone</span></b> 🎈",
  "🌊 Adapt → <u>Ride the <span style='color:blue;'>waves</span></u> 🏄‍♂️",
  "🌟 Believe → <b>Achieve the <span style='color:purple;'>impossible</span></b> ✨",
  "💪 Strength → <u><span style='color:orange;'>Rises</span> from struggles</u> 🏋️‍♀️",
  "🌳 Growth → <b>Deep <span style='color:forestgreen;'>roots</span></b>, strong future 🌱",
  "💥 Challenges → <u>Turn into <span style='color:red;'>opportunities</span></u> 🌟",
  "🚴 Keep moving → <b><span style='color:teal;'>Progress</span> daily</b> 🚀",
  "📜 Knowledge → <u>Empowers <span style='background-color:ivory;'>your journey</span></u> 📘",
  "🌈 <b>Hope</b> → <span style='color:indigo;'>Colors your dreams</span> 🌟",
  "🔍 Discover → <u><span style='color:navy;'>Hidden gems</span></u> 💎",
  "💖 Kindness → <b><span style='color:pink;'>Transforms</span> lives</b> 🌸",
  "🌄 New beginnings → <u><span style='color:orange;'>Brighten the future</span></u> 🌞",
  "🚀 Start now → <b><span style='color:blue;'>Reach for the stars</span></b> ✨",
  "🖌️ Paint life → <u>With <span style='color:teal;'>bold colors</span></u> 🎨",
  "🎵 Compose → <b><span style='color:purple;'>Your masterpiece</span></b> 🎼",
  "📚 Learning → <u>Unlocks <span style='color:green;'>possibilities</span></u> 📖",
  "🌠 Dreams → <b>Lead to <span style='color:yellow;'>destiny</span></b> 🌌",
  "🛤️ Paths → <u>Define your <span style='color:brown;'>journey</span></u> 🛣️",
  "🌟 Shine → <b>Let <span style='color:gold;'>your light</span> guide</b> ✨",
  "⚙️ Work → <u><span style='color:gray;'>Drives success</span></u> ⚡",
  "🌳 Nature → <b>Inspires <span style='color:green;'>resilience</span></b> 🌿",
  "📍 Location → <u>Isn’t your <span style='color:red;'>limit</span></u> 📌",
  "💫 Dream → <b><span style='background-color:lightpink;'>Make it real</span></b> 💭",
  "📈 Goals → <u><span style='color:teal;'>Keep aiming</span> higher</u> 🎯",
  "🔑 Unlock → <b>Your <span style='color:gold;'>potential</span></b> 🔓",
  "🌍 Change the world → <u>Start <span style='color:blue;'>small</span></u> 🌱",
  "🔥 Fire → <b><span style='color:red;'>Fuel your passion</span></b> 🏆",
  "🎨 Creativity → <u>Shapes the <span style='color:violet;'>future</span></u> 🖌️",
  "💎 Value → <b>Shines in <span style='color:cyan;'>actions</span></b> 🌟",
];

export default captions;

const appSearchWordlist = [
  "social", "gaming", "productivity", "education", "health", "fitness",
  "finance", "shopping", "travel", "entertainment", "music", "video",
  "news", "weather", "food", "delivery", "navigation", "utility",
  "communication", "photography", "editing", "art", "design", "business",
  "sports", "lifestyle", "parenting", "books", "magazines", "comics",
  "medical", "dating", "smart home", "security", "kids", "augmented reality",
  "virtual reality", "tools", "personalization", "widgets", "live wallpaper",
  "launcher", "antivirus", "vpn", "file manager", "cleaner", "battery saver",
  "chat", "messaging", "video call", "stream", "share", "connect",
  "track", "monitor", "manage", "organize", "schedule", "plan",
  "learn", "teach", "exercise", "workout", "meditate", "budget",
  "invest", "save", "order", "book", "reserve", "discover",
  "explore", "create", "edit", "filter", "scan", "convert",
  "translate", "record", "play", "listen", "watch", "read",
  "write", "draw", "code", "automate", "sync", "backup",
  "secure", "protect", "optimize", "customize", "personalize", "notify",
  "alert", "remind", "collaborate", "sync", "offline", "multiplayer",
  "AR", "VR", "AI", "chatbot", "voice assistant", "gesture control",
  "slow", "crash", "bug", "freeze", "lag", "drain battery", "ads",
  "intrusive", "confusing", "complex", "hard to use", "difficult", "glitch",
  "unresponsive", "outdated", "limited features", "missing", "expensive",
  "subscription", "privacy", "security", "data usage", "storage", "updates",
  "notifications", "spam", "unstable", "poor quality", "bad design", "frustrating",
  "annoying", "unreliable", "not working", "error", "login issue", "payment issue",
  "customer support", "help", "tutorial", "learn curve", "compatibility",
  "easy", "fast", "simple", "efficient", "convenient", "reliable",
  "secure", "private", "affordable", "free", "intuitive", "user-friendly",
  "quick", "seamless", "accurate", "customizable", "flexible", "powerful",
  "fun", "engaging", "relaxing", "stress relief", "focus", "motivation",
  "inspiration", "creativity", "connection", "community", "support",
  "healthier", "fitter", "smarter", "organized", "productive", "save money",
  "make money", "entertain", "educate", "travel safely", "explore new places",
  "ecommerce", "fintech", "edtech", "telehealth", "proptech", "foodtech",
  "agritech", "logistics", "HR tech", "legal tech", "music production",
  "video editing", "graphic design", "CRM", "ERP", "project management",
  "team collaboration", "remote work", "online learning", "mental wellness",
  "diet", "nutrition", "sleep", "meditation", "mindfulness", "parenting",
  "baby tracking", "pet care", "car maintenance", "home improvement",
  "DIY", "crafts", "recipes", "cooking", "baking", "cocktail", "wine",
  "gardening", "fishing", "hunting", "hiking", "camping", "outdoors",
  "photography tools", "video effects", "animation", "3D modeling", "CAD",
  "coding editor", "developer tools", "server monitoring", "network tools",
  "data analysis", "CRM", "sales", "marketing", "customer service"
];

function getRandomWord() {
  // Input validation: Ensure wordList is an array and not empty
  if (!Array.isArray(appSearchWordlist) || appSearchWordlist.length === 0) {
    throw new Error("Input must be a non-empty array of words.");
  }

  // Generate a random index within the bounds of the array
  const randomIndex = Math.floor(Math.random() * appSearchWordlist.length);

  // Return the word at the random index
  return appSearchWordlist[randomIndex];
}

export {
    getRandomWord
}
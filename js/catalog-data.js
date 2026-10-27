// Generated from docs/features.json and docs/sourcelist.json
window.CATALOG = {
 "title": "Catalog of grey literature sources in software engineering",
 "repository": "https://github.com/fredjansen/secat",
 "generated_on": "2026-10-26",
 "conventions": {
  "null": "Information not available or not publicly reported",
  "[]": "Not applicable to this site",
  "numeric_values": "Approximate, based on public statements; must be verified before use",
  "confidence": "Overall confidence in the answers for the site (high, medium, low)"
 },
 "categories": [
  {
   "id": 1,
   "name": "Basic Features",
   "description": "All basic features that characterize sites selected to this research",
   "features": [
    {
     "id": 1,
     "name": "Associated Site",
     "description": "This feature indicates which platform this site belongs to",
     "data_type": "string",
     "expected_values": [
      "reddit",
      "stack exchange",
      "quora",
      "microsoft",
      "None"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Associated Site' explanation, What platform is this site linked to?"
    },
    {
     "id": 2,
     "name": "Creation date",
     "description": "This feature indicates what year the site was created",
     "data_type": "number",
     "expected_values": "Year (YYYY format)",
     "allow_multiple": false,
     "question": "Based on the 'Creation date' explanation, What is the creation date?"
    },
    {
     "id": 3,
     "name": "Website organization",
     "description": "This feature indicates the way the site is organized",
     "data_type": "string",
     "expected_values": [
      "in topics",
      "in areas",
      "in communities",
      "None"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Website organization' explanation, How are these sites organized?"
    },
    {
     "id": 4,
     "name": "Registration methods",
     "description": "This feature indicates how users log in to navigate in the site",
     "data_type": "array",
     "expected_values": [
      "own registration",
      "facebook account",
      "apple ID",
      "gmail account",
      "linkedin",
      "github account",
      "outlook account"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Registration methods' explanation, What are the available registration methods?"
    },
    {
     "id": 5,
     "name": "Search engines",
     "description": "This feature indicates ways of search engines inside the site",
     "data_type": "array",
     "expected_values": [
      "string search",
      "tags/labels search",
      "similarity search",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Search engines' explanation, What search engines are available on this site?"
    },
    {
     "id": 6,
     "name": "Type of Audience",
     "description": "This feature indicates the target technical profile of the website",
     "data_type": "array",
     "expected_values": [
      "developers",
      "software engineers",
      "software architects",
      "testers",
      "IT professionals"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Type of Audience' explanation, What type of audience does this site target?"
    },
    {
     "id": 7,
     "name": "Website type",
     "description": "This feature indicates the type of website",
     "data_type": "string",
     "expected_values": [
      "site",
      "forum",
      "community",
      "blog",
      "website"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Website type' explanation, Is this site a forum, a community, a blog or something else?"
    },
    {
     "id": 8,
     "name": "Subarea of software engineering",
     "description": "This feature indicates which sub-area of software engineering the site is most focused on",
     "data_type": "array",
     "expected_values": [
      "general",
      "coding",
      "architecture",
      "maintenance",
      "testing",
      "management",
      "evolution"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Subarea of software engineering' explanation, Which of the sub-areas within software engineering?"
    }
   ]
  },
  {
   "id": 2,
   "name": "Connection and Data Features",
   "description": "All connection and data features that characterize sites selected to this research",
   "features": [
    {
     "id": 9,
     "name": "Has its own API",
     "description": "This feature indicates whether the site has its own API or not",
     "data_type": "boolean",
     "expected_values": [
      "yes",
      "no"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Has its own API' explanation, Does this site have its own API for searching data?"
    },
    {
     "id": 10,
     "name": "Can download repository",
     "description": "This feature indicates whether the site can download or not repository",
     "data_type": "boolean",
     "expected_values": [
      "can",
      "cannot"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Can download repository' explanation, Does this site allow you to download a repository?"
    },
    {
     "id": 11,
     "name": "Has its own Dashboard",
     "description": "This feature indicates whether the site has its own dashboard or not",
     "data_type": "boolean",
     "expected_values": [
      "yes",
      "no"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Has its own Dashboard' explanation, Does this site have its own dashboard with general information?"
    },
    {
     "id": 12,
     "name": "Has its app",
     "description": "This feature indicates whether the site has its own app or not",
     "data_type": "boolean",
     "expected_values": [
      "yes",
      "no"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Has its app' explanation, Does this site have its own apps?"
    }
   ]
  },
  {
   "id": 3,
   "name": "Statistical Features",
   "description": "All statistical features that characterize sites selected to this research",
   "features": [
    {
     "id": 13,
     "name": "Daily audience",
     "description": "This feature indicates the daily average of people that access the site",
     "data_type": "number",
     "expected_values": "Number",
     "allow_multiple": false,
     "question": "Based on the 'Daily audience' explanation, What is the size of this site's daily audience?"
    },
    {
     "id": 14,
     "name": "Total users registered",
     "description": "This feature indicates total users registered in the site",
     "data_type": "number",
     "expected_values": "Number",
     "allow_multiple": false,
     "question": "Based on the 'Total users registered' explanation, How many users are registered on this site?"
    },
    {
     "id": 15,
     "name": "Question rated",
     "description": "This feature indicates how the questions are rated",
     "data_type": "array",
     "expected_values": [
      "Upvoted by users",
      "Upvoted by community",
      "Liked by users",
      "Liked (reactions)",
      "Editorial selection",
      "Reactions",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Question rated' explanation, How is the question rated on the site?"
    },
    {
     "id": 16,
     "name": "Answer rated",
     "description": "This feature indicates how the answers are rated",
     "data_type": "array",
     "expected_values": [
      "Upvoted by users",
      "Upvoted by community",
      "Liked by users",
      "Liked (reactions)",
      "Editorial selection",
      "Reactions",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Answer rated' explanation, How is the answer rated on the site?"
    },
    {
     "id": 17,
     "name": "Percentual answered",
     "description": "This feature indicates the percentage of questions answered on the site",
     "data_type": "number",
     "expected_values": "Number between 0 and 100",
     "allow_multiple": false,
     "question": "Based on the 'Percentual answered' explanation, What percentage of the questions on this site are answered?"
    },
    {
     "id": 18,
     "name": "Average number of interactions per question",
     "description": "This feature indicates the average number of interactions in each question on the site",
     "data_type": "number",
     "expected_values": "Number",
     "allow_multiple": false,
     "question": "Based on the 'Average number of interactions per question' explanation, How many interactions per question on this site?"
    },
    {
     "id": 19,
     "name": "Total of citations",
     "description": "This feature indicates the total of citations of the site in journals, papers and other scientific documents",
     "data_type": "number",
     "expected_values": "Number",
     "allow_multiple": false,
     "question": "Based on the 'Total of citations' explanation, How many external citations such as journals, articles does this website have?"
    }
   ]
  },
  {
   "id": 4,
   "name": "On Board Features",
   "description": "All on Board features that characterize sites selected to this research",
   "features": [
    {
     "id": 20,
     "name": "Moderation type",
     "description": "This feature indicates the way of moderation of the questions on the site",
     "data_type": "array",
     "expected_values": [
      "Moderation",
      "Moderation + Authorization",
      "Moderation + Community voting",
      "Moderation + Editorial",
      "Moderation + Paid access",
      "Moderation + Community",
      "Moderation + GitHub staff",
      "Moderation + Google oversight",
      "Moderation + Microsoft",
      "Community + Moderation",
      "Community voting + Moderation",
      "Repo maintainers + Moderation",
      "Invite-only + Moderation",
      "Subreddit moderators",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Moderation type' explanation, How is this site moderated?"
    },
    {
     "id": 21,
     "name": "Monetization type",
     "description": "This feature indicates the monetization way used on the site",
     "data_type": "array",
     "expected_values": [
      "Ads",
      "web site ads",
      "website services",
      "donations",
      "websites subscriptions",
      "sponsorships",
      "sponsors contents",
      "sponsors posts",
      "services promotions",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Monetization type' explanation, Does this site have any type of monetization?"
    },
    {
     "id": 22,
     "name": "Basic required information",
     "description": "This feature indicates basic information needed to post any question on the site",
     "data_type": "array",
     "expected_values": [
      "User account",
      "basic info",
      "email",
      "profile",
      "payment",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Basic required information' explanation, What basic data is required to register a post on the website?"
    },
    {
     "id": 23,
     "name": "Needed qualification",
     "description": "This feature indicates if users need to have any qualification to be able to post",
     "data_type": "string",
     "expected_values": [
      "None",
      "unknown"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Needed qualification' explanation, Is there any user qualification for participation on the site?"
    },
    {
     "id": 24,
     "name": "Users Ranking",
     "description": "This feature indicates how users are ranked by their participation",
     "data_type": "array",
     "expected_values": [
      "badges",
      "achievements",
      "reactions",
      "contribution scores",
      "engagement",
      "contest rankings",
      "upvotes",
      "followers",
      "likes",
      "points",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Users Ranking' explanation, How users are ranked on the site based on their participation in it?"
    },
    {
     "id": 25,
     "name": "Actions allowed",
     "description": "This feature indicates what actions are allowed on the site",
     "data_type": "array",
     "expected_values": [
      "post",
      "discuss",
      "compete",
      "reply",
      "vote",
      "comment",
      "like",
      "share tips",
      "follow users",
      "react",
      "solve problems",
      "flag",
      "Q&A"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Actions allowed' explanation, What actions are allowed on the website?"
    },
    {
     "id": 26,
     "name": "Repository metadata",
     "description": "This feature indicates if the site repository has any kind of description or not",
     "data_type": "boolean",
     "expected_values": [
      "yes",
      "no"
     ],
     "allow_multiple": false,
     "question": "Based on the 'Repository metadata' explanation, Does this site provide any kind of description of the repository and the site itself for consultation?"
    }
   ]
  },
  {
   "id": 5,
   "name": "Discussions Features",
   "description": "All discussions features that characterize sites selected to this research",
   "features": [
    {
     "id": 27,
     "name": "Most quoted kind of topics",
     "description": "This feature indicates what the most kind of topics are cited on the site",
     "data_type": "array",
     "expected_values": [
      "technical topics",
      "behavioral topics",
      "professional topics",
      "miscellaneous topics"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Most quoted kind of topics' explanation, What are the most quoted topics on the site?"
    },
    {
     "id": 28,
     "name": "Experience level",
     "description": "This feature indicates the level of experience of the user",
     "data_type": "array",
     "expected_values": [
      "beginners",
      "experienced software engineers",
      "researchers"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Experience level' explanation, What is the experience level of the site's users?"
    },
    {
     "id": 29,
     "name": "Tone of discussions",
     "description": "This feature indicates the tone of discussions on the site",
     "data_type": "array",
     "expected_values": [
      "collaborative",
      "competitive",
      "informal"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Tone of discussions' explanation, What is the tone of discussions on the site?"
    },
    {
     "id": 30,
     "name": "Quality level of answers",
     "description": "This feature indicates the quality level of the answers on the site",
     "data_type": "array",
     "expected_values": [
      "accurate",
      "complete",
      "incomplete",
      "incomprehensible",
      "well explained"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Quality level of answers' explanation, What is the quality level of the answers?"
    },
    {
     "id": 31,
     "name": "Non-technical user profile",
     "description": "This feature indicates non-technical user profile",
     "data_type": "array",
     "expected_values": [
      "different country languages",
      "different cultures",
      "different knowledge",
      "None"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Non-technical user profile' explanation, What is the profile of the users of this site?"
    },
    {
     "id": 32,
     "name": "Most quoted languages",
     "description": "This feature indicates the most quoted languages on the site",
     "data_type": "array",
     "expected_values": [
      "java",
      "python",
      "c++",
      "c#",
      ".net",
      "javascript",
      "php",
      "ruby",
      "go",
      "rust"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Most quoted languages' explanation, What are the most quoted languages on the site?"
    },
    {
     "id": 33,
     "name": "Most quoted frameworks",
     "description": "This feature indicates the most quoted frameworks on the site",
     "data_type": "array",
     "expected_values": [
      "laravel",
      "react",
      "angular",
      "vue",
      "django",
      "spring",
      "express",
      "flask"
     ],
     "allow_multiple": true,
     "question": "Based on the 'Most quoted frameworks' explanation, What are the most quoted frameworks on the site?"
    }
   ]
  }
 ],
 "sources": [
  {
   "id": 1,
   "name": "ASKfm",
   "url": "https://ask.fm",
   "slug": "ask-fm",
   "confidence": "medium",
   "notes": "General-purpose anonymous Q&A social network; not specific to software engineering, so the audience and subarea answers fall back to defaults.",
   "references": [
    "https://ask.fm/",
    "https://en.wikipedia.org/wiki/Ask.fm"
   ],
   "answers": {
    "1": "None",
    "2": 2010,
    "3": "None",
    "4": [
     "own registration",
     "facebook account",
     "apple ID",
     "gmail account"
    ],
    "5": [
     "string search"
    ],
    "6": [
     "IT professionals"
    ],
    "7": "site",
    "8": [
     "general"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Liked by users"
    ],
    "16": [
     "Liked by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "Ads",
     "websites subscriptions"
    ],
    "22": [
     "User account",
     "email",
     "profile"
    ],
    "23": "None",
    "24": [
     "likes",
     "followers"
    ],
    "25": [
     "post",
     "reply",
     "like",
     "follow users"
    ],
    "26": "no",
    "27": [
     "miscellaneous topics",
     "behavioral topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "informal"
    ],
    "30": [
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [],
    "33": []
   }
  },
  {
   "id": 2,
   "name": "Aviyel (DEV organization)",
   "url": "https://dev.to/aviyel",
   "slug": "dev-to-aviyel",
   "confidence": "low",
   "notes": "Organization page of the Aviyel open-source community hosted on DEV; recent activity appears limited, so its current status should be verified. Creation year is an estimate.",
   "references": [
    "https://dev.to/aviyel",
    "https://dev.to/about",
    "https://developers.forem.com/api"
   ],
   "answers": {
    "1": "None",
    "2": 2021,
    "3": "in topics",
    "4": [
     "own registration",
     "github account",
     "apple ID",
     "facebook account",
     "gmail account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "blog",
    "8": [
     "general",
     "coding"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "yes",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Liked (reactions)"
    ],
    "16": [
     "Reactions"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community"
    ],
    "21": [
     "sponsorships",
     "web site ads"
    ],
    "22": [
     "User account",
     "email",
     "profile"
    ],
    "23": "None",
    "24": [
     "badges",
     "reactions",
     "followers"
    ],
    "25": [
     "post",
     "comment",
     "react",
     "follow users",
     "share tips"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative",
     "informal"
    ],
    "30": [
     "well explained"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "javascript",
     "python",
     "go",
     "rust"
    ],
    "33": [
     "react"
    ]
   }
  },
  {
   "id": 3,
   "name": "Code Golf Stack Exchange",
   "url": "https://codegolf.stackexchange.com",
   "slug": "codegolf-stackexchange-com",
   "confidence": "high",
   "notes": "Stack Exchange site for programming puzzles and code golf challenges.",
   "references": [
    "https://codegolf.stackexchange.com/",
    "https://stackexchange.com/sites",
    "https://api.stackexchange.com/"
   ],
   "answers": {
    "1": "stack exchange",
    "2": 2011,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "community",
    "8": [
     "coding"
    ],
    "9": "yes",
    "10": "can",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by community"
    ],
    "16": [
     "Upvoted by community"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community voting"
    ],
    "21": [
     "web site ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "badges",
     "points",
     "upvotes"
    ],
    "25": [
     "Q&A",
     "post",
     "reply",
     "vote",
     "comment",
     "flag"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "experienced software engineers"
    ],
    "29": [
     "competitive",
     "collaborative"
    ],
    "30": [
     "accurate",
     "well explained"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "python",
     "javascript",
     "java",
     "c++",
     "ruby",
     "rust",
     "go"
    ],
    "33": []
   }
  },
  {
   "id": 4,
   "name": "Codeforces",
   "url": "https://codeforces.com/",
   "slug": "codeforces-com",
   "confidence": "high",
   "notes": "Competitive programming platform with regular contests, a problem set and community blogs.",
   "references": [
    "https://codeforces.com/",
    "https://en.wikipedia.org/wiki/Codeforces",
    "https://codeforces.com/apiHelp"
   ],
   "answers": {
    "1": "None",
    "2": 2010,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "community",
    "8": [
     "coding"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "yes",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "sponsorships"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "contest rankings",
     "points",
     "contribution scores"
    ],
    "25": [
     "compete",
     "solve problems",
     "post",
     "comment",
     "vote"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "competitive"
    ],
    "30": [
     "accurate",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "c++",
     "python",
     "java"
    ],
    "33": []
   }
  },
  {
   "id": 5,
   "name": "CodeProject",
   "url": "https://codeproject.com",
   "slug": "codeproject-com",
   "confidence": "medium",
   "notes": "Long-running developer community of articles, Q&A and forums. The site announced the end of its operations in 2024 and its content was preserved in read-only form; verify the current status.",
   "references": [
    "https://www.codeproject.com/"
   ],
   "answers": {
    "1": "None",
    "2": 1999,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "outlook account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "community",
    "8": [
     "general",
     "coding",
     "architecture"
    ],
    "9": "yes",
    "10": "can",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community"
    ],
    "21": [
     "web site ads",
     "sponsors contents"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "points",
     "badges",
     "achievements"
    ],
    "25": [
     "post",
     "discuss",
     "Q&A",
     "vote",
     "comment"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "well explained",
     "incomplete"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "c#",
     ".net",
     "c++",
     "javascript",
     "java",
     "python"
    ],
    "33": [
     "angular",
     "react"
    ]
   }
  },
  {
   "id": 6,
   "name": "Codidact",
   "url": "https://codidact.com",
   "slug": "codidact-com",
   "confidence": "medium",
   "notes": "Non-profit, community-run Q&A network created in 2020 as an alternative to Stack Exchange; organized in independent communities.",
   "references": [
    "https://codidact.com/",
    "https://software.codidact.com/"
   ],
   "answers": {
    "1": "None",
    "2": 2020,
    "3": "in communities",
    "4": [
     "own registration"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "community",
    "8": [
     "general",
     "coding"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by community"
    ],
    "16": [
     "Upvoted by community"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Community + Moderation"
    ],
    "21": [
     "donations"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "upvotes",
     "badges"
    ],
    "25": [
     "Q&A",
     "post",
     "vote",
     "comment",
     "flag"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "accurate",
     "well explained"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "c++",
     "python",
     "javascript",
     "java"
    ],
    "33": []
   }
  },
  {
   "id": 7,
   "name": "DEV Community",
   "url": "https://dev.to",
   "slug": "dev-to",
   "confidence": "high",
   "notes": "Blogging and discussion community for developers built on the open-source Forem platform. The registered user count is an approximation based on public statements by the platform.",
   "references": [
    "https://dev.to/",
    "https://dev.to/about",
    "https://developers.forem.com/api"
   ],
   "answers": {
    "1": "None",
    "2": 2016,
    "3": "in topics",
    "4": [
     "own registration",
     "github account",
     "apple ID",
     "facebook account",
     "gmail account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "community",
    "8": [
     "general",
     "coding",
     "architecture",
     "management"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "yes",
    "12": "yes",
    "13": null,
    "14": 1000000,
    "15": [
     "Liked (reactions)"
    ],
    "16": [
     "Reactions"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community"
    ],
    "21": [
     "sponsorships",
     "sponsors posts",
     "web site ads"
    ],
    "22": [
     "User account",
     "email",
     "profile"
    ],
    "23": "None",
    "24": [
     "badges",
     "reactions",
     "followers"
    ],
    "25": [
     "post",
     "comment",
     "react",
     "follow users",
     "share tips",
     "discuss"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics",
     "behavioral topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative",
     "informal"
    ],
    "30": [
     "well explained",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different knowledge"
    ],
    "32": [
     "javascript",
     "python",
     "go",
     "rust",
     "java"
    ],
    "33": [
     "react",
     "vue",
     "angular",
     "express",
     "django"
    ]
   }
  },
  {
   "id": 8,
   "name": "DigitalOcean Community",
   "url": "https://digitalocean.com/community",
   "slug": "digitalocean-com-community",
   "confidence": "medium",
   "notes": "Tutorials and Q&A maintained by DigitalOcean. The company offers a cloud API, but no API specific to the community content was identified.",
   "references": [
    "https://www.digitalocean.com/community",
    "https://en.wikipedia.org/wiki/DigitalOcean"
   ],
   "answers": {
    "1": "None",
    "2": 2013,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "IT professionals"
    ],
    "7": "community",
    "8": [
     "general",
     "coding",
     "maintenance"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Editorial"
    ],
    "21": [
     "website services",
     "services promotions"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "None"
    ],
    "25": [
     "post",
     "reply",
     "vote",
     "comment",
     "Q&A"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "well explained",
     "accurate"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "python",
     "javascript",
     "php",
     "go"
    ],
    "33": [
     "django",
     "laravel",
     "express",
     "react",
     "flask"
    ]
   }
  },
  {
   "id": 9,
   "name": "Experts Exchange",
   "url": "https://experts-exchange.com",
   "slug": "experts-exchange-com",
   "confidence": "medium",
   "notes": "One of the oldest technical Q&A sites; most content and expert help require a paid membership.",
   "references": [
    "https://www.experts-exchange.com/"
   ],
   "answers": {
    "1": "None",
    "2": 1996,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "outlook account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "IT professionals",
     "developers"
    ],
    "7": "community",
    "8": [
     "general",
     "coding",
     "maintenance"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Editorial selection"
    ],
    "16": [
     "Editorial selection",
     "Liked by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Paid access"
    ],
    "21": [
     "websites subscriptions"
    ],
    "22": [
     "User account",
     "email",
     "payment"
    ],
    "23": "None",
    "24": [
     "points",
     "badges",
     "achievements"
    ],
    "25": [
     "post",
     "Q&A",
     "reply",
     "comment"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "accurate",
     "complete"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "c#",
     ".net",
     "java",
     "javascript",
     "php"
    ],
    "33": []
   }
  },
  {
   "id": 10,
   "name": "FindNerd",
   "url": "https://findnerd.com",
   "slug": "findnerd-com",
   "confidence": "low",
   "notes": "Small Q&A and blog site for developers. Activity appears low and the creation year is an estimate; verify availability.",
   "references": [
    "https://findnerd.com/"
   ],
   "answers": {
    "1": "None",
    "2": 2015,
    "3": "in topics",
    "4": [
     "own registration"
    ],
    "5": [
     "string search"
    ],
    "6": [
     "developers"
    ],
    "7": "blog",
    "8": [
     "coding"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "None"
    ],
    "16": [
     "None"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "services promotions"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "unknown",
    "24": [
     "points"
    ],
    "25": [
     "post",
     "Q&A",
     "comment"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "informal"
    ],
    "30": [
     "incomplete"
    ],
    "31": [
     "different country languages"
    ],
    "32": [
     "php",
     "javascript",
     "java",
     "python"
    ],
    "33": [
     "laravel",
     "angular",
     "react"
    ]
   }
  },
  {
   "id": 11,
   "name": "Digital Point Forums",
   "url": "https://forums.digitalpoint.com",
   "slug": "forums-digitalpoint-com",
   "confidence": "low",
   "notes": "Webmaster and online marketing forum with programming sections; most of its discussions are outside software engineering. Creation year is an estimate.",
   "references": [
    "https://forums.digitalpoint.com/"
   ],
   "answers": {
    "1": "None",
    "2": 2004,
    "3": "in areas",
    "4": [
     "own registration",
     "gmail account"
    ],
    "5": [
     "string search"
    ],
    "6": [
     "IT professionals",
     "developers"
    ],
    "7": "forum",
    "8": [
     "general",
     "coding"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Liked by users"
    ],
    "16": [
     "Liked by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "web site ads",
     "services promotions"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "achievements",
     "likes"
    ],
    "25": [
     "post",
     "discuss",
     "reply",
     "like"
    ],
    "26": "no",
    "27": [
     "professional topics",
     "technical topics",
     "miscellaneous topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "informal"
    ],
    "30": [
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "php",
     "javascript"
    ],
    "33": [
     "laravel"
    ]
   }
  },
  {
   "id": 12,
   "name": "freeCodeCamp",
   "url": "https://www.freecodecamp.org/",
   "slug": "freecodecamp-org",
   "confidence": "high",
   "notes": "Non-profit learning platform with an open-source curriculum, a publication and a Discourse-based forum.",
   "references": [
    "https://www.freecodecamp.org/",
    "https://en.wikipedia.org/wiki/FreeCodeCamp",
    "https://github.com/freeCodeCamp/freeCodeCamp"
   ],
   "answers": {
    "1": "None",
    "2": 2014,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "community",
    "8": [
     "coding",
     "general"
    ],
    "9": "no",
    "10": "can",
    "11": "yes",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Liked by users"
    ],
    "16": [
     "Liked by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community"
    ],
    "21": [
     "donations"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "badges",
     "likes"
    ],
    "25": [
     "post",
     "discuss",
     "reply",
     "like",
     "solve problems",
     "share tips"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "well explained"
    ],
    "31": [
     "different country languages",
     "different cultures",
     "different knowledge"
    ],
    "32": [
     "javascript",
     "python"
    ],
    "33": [
     "react",
     "express"
    ]
   }
  },
  {
   "id": 13,
   "name": "GeeksforGeeks",
   "url": "https://www.geeksforgeeks.org/",
   "slug": "geeksforgeeks-org",
   "confidence": "high",
   "notes": "Computer science portal with tutorials, coding practice problems, contests and courses.",
   "references": [
    "https://www.geeksforgeeks.org/",
    "https://en.wikipedia.org/wiki/GeeksforGeeks"
   ],
   "answers": {
    "1": "None",
    "2": 2009,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account",
     "linkedin",
     "facebook account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "site",
    "8": [
     "general",
     "coding",
     "architecture"
    ],
    "9": "no",
    "10": "cannot",
    "11": "yes",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Liked by users"
    ],
    "16": [
     "Liked by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Editorial"
    ],
    "21": [
     "web site ads",
     "website services",
     "websites subscriptions"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "points",
     "contest rankings",
     "badges"
    ],
    "25": [
     "post",
     "comment",
     "solve problems",
     "compete",
     "like"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "well explained",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different knowledge"
    ],
    "32": [
     "c++",
     "java",
     "python",
     "javascript",
     "c#"
    ],
    "33": [
     "react",
     "django",
     "spring",
     "express"
    ]
   }
  },
  {
   "id": 14,
   "name": "GitHub Discussions",
   "url": "https://github.com/features/discussions",
   "slug": "github-com-features-discussions",
   "confidence": "high",
   "notes": "Forum feature attached to each GitHub repository (beta in 2020, generally available in 2021). The user count refers to GitHub as a whole (100 million developers announced in January 2023).",
   "references": [
    "https://github.com/features/discussions",
    "https://docs.github.com/en/discussions",
    "https://en.wikipedia.org/wiki/GitHub",
    "https://docs.github.com/en/graphql"
   ],
   "answers": {
    "1": "microsoft",
    "2": 2020,
    "3": "in communities",
    "4": [
     "own registration"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "forum",
    "8": [
     "general",
     "coding",
     "maintenance",
     "evolution"
    ],
    "9": "yes",
    "10": "can",
    "11": "yes",
    "12": "yes",
    "13": null,
    "14": 100000000,
    "15": [
     "Upvoted by users",
     "Reactions"
    ],
    "16": [
     "Upvoted by users",
     "Reactions"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Repo maintainers + Moderation",
     "Moderation + GitHub staff"
    ],
    "21": [
     "websites subscriptions",
     "website services",
     "sponsorships"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "achievements",
     "followers",
     "badges"
    ],
    "25": [
     "post",
     "discuss",
     "reply",
     "vote",
     "comment",
     "react",
     "Q&A",
     "flag"
    ],
    "26": "yes",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "accurate",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different knowledge"
    ],
    "32": [
     "javascript",
     "python",
     "java",
     "go",
     "rust",
     "c#",
     "c++",
     "ruby",
     "php"
    ],
    "33": [
     "react",
     "vue",
     "angular",
     "django",
     "spring",
     "express",
     "flask",
     "laravel"
    ]
   }
  },
  {
   "id": 15,
   "name": "GitHub Issues",
   "url": "https://github.com/features/issues",
   "slug": "github-com-features-issues",
   "confidence": "high",
   "notes": "Issue tracker attached to each GitHub repository. The user count refers to GitHub as a whole (100 million developers announced in January 2023).",
   "references": [
    "https://github.com/features/issues",
    "https://docs.github.com/en/issues",
    "https://en.wikipedia.org/wiki/GitHub",
    "https://docs.github.com/en/rest"
   ],
   "answers": {
    "1": "microsoft",
    "2": 2008,
    "3": "in communities",
    "4": [
     "own registration"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers",
     "testers"
    ],
    "7": "site",
    "8": [
     "coding",
     "maintenance",
     "evolution",
     "testing"
    ],
    "9": "yes",
    "10": "can",
    "11": "yes",
    "12": "yes",
    "13": null,
    "14": 100000000,
    "15": [
     "Reactions"
    ],
    "16": [
     "Reactions"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Repo maintainers + Moderation",
     "Moderation + GitHub staff"
    ],
    "21": [
     "websites subscriptions",
     "website services"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "achievements",
     "followers"
    ],
    "25": [
     "post",
     "comment",
     "react",
     "discuss",
     "flag"
    ],
    "26": "yes",
    "27": [
     "technical topics"
    ],
    "28": [
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "incomplete",
     "accurate"
    ],
    "31": [
     "different country languages",
     "different knowledge"
    ],
    "32": [
     "javascript",
     "python",
     "java",
     "go",
     "rust",
     "c#",
     "c++",
     "ruby",
     "php"
    ],
    "33": [
     "react",
     "vue",
     "angular",
     "django",
     "spring",
     "express",
     "flask",
     "laravel"
    ]
   }
  },
  {
   "id": 16,
   "name": "GitLab",
   "url": "https://gitlab.com",
   "slug": "gitlab-com",
   "confidence": "medium",
   "notes": "DevSecOps platform; discussions happen in issues, merge requests and the GitLab Forum. The registered user count is an approximation based on company statements.",
   "references": [
    "https://gitlab.com/",
    "https://en.wikipedia.org/wiki/GitLab",
    "https://docs.gitlab.com/ee/api/"
   ],
   "answers": {
    "1": "None",
    "2": 2011,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers",
     "IT professionals"
    ],
    "7": "site",
    "8": [
     "coding",
     "maintenance",
     "evolution",
     "testing",
     "management"
    ],
    "9": "yes",
    "10": "can",
    "11": "yes",
    "12": "no",
    "13": null,
    "14": 30000000,
    "15": [
     "Reactions"
    ],
    "16": [
     "Reactions"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Repo maintainers + Moderation"
    ],
    "21": [
     "websites subscriptions",
     "website services"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "followers"
    ],
    "25": [
     "post",
     "comment",
     "react",
     "discuss"
    ],
    "26": "yes",
    "27": [
     "technical topics"
    ],
    "28": [
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "incomplete",
     "accurate"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "ruby",
     "go",
     "javascript",
     "python"
    ],
    "33": [
     "vue"
    ]
   }
  },
  {
   "id": 17,
   "name": "Hacker News",
   "url": "https://news.ycombinator.com/",
   "slug": "news-ycombinator-com",
   "confidence": "high",
   "notes": "Social news site run by Y Combinator. Its only revenue-like content is job posts from Y Combinator companies.",
   "references": [
    "https://news.ycombinator.com/",
    "https://en.wikipedia.org/wiki/Hacker_News",
    "https://github.com/HackerNews/API"
   ],
   "answers": {
    "1": "None",
    "2": 2007,
    "3": "in areas",
    "4": [
     "own registration"
    ],
    "5": [
     "string search"
    ],
    "6": [
     "software engineers",
     "developers",
     "IT professionals"
    ],
    "7": "forum",
    "8": [
     "general"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community voting"
    ],
    "21": [
     "sponsors posts"
    ],
    "22": [
     "User account"
    ],
    "23": "None",
    "24": [
     "points"
    ],
    "25": [
     "post",
     "comment",
     "vote",
     "flag",
     "discuss"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics",
     "miscellaneous topics"
    ],
    "28": [
     "experienced software engineers",
     "researchers"
    ],
    "29": [
     "informal"
    ],
    "30": [
     "accurate",
     "well explained"
    ],
    "31": [
     "different cultures",
     "different knowledge"
    ],
    "32": [
     "rust",
     "python",
     "go",
     "javascript",
     "c++"
    ],
    "33": [
     "react"
    ]
   }
  },
  {
   "id": 18,
   "name": "Hashnode",
   "url": "https://hashnode.com/",
   "slug": "hashnode-com",
   "confidence": "medium",
   "notes": "Blogging platform for developers with a public GraphQL API and the option to back up posts to GitHub.",
   "references": [
    "https://hashnode.com/",
    "https://apidocs.hashnode.com/"
   ],
   "answers": {
    "1": "None",
    "2": 2016,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "blog",
    "8": [
     "general",
     "coding"
    ],
    "9": "yes",
    "10": "can",
    "11": "yes",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Liked (reactions)"
    ],
    "16": [
     "Reactions"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "websites subscriptions",
     "website services",
     "sponsorships"
    ],
    "22": [
     "User account",
     "email",
     "profile"
    ],
    "23": "None",
    "24": [
     "badges",
     "followers",
     "reactions"
    ],
    "25": [
     "post",
     "comment",
     "react",
     "follow users",
     "share tips"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative",
     "informal"
    ],
    "30": [
     "well explained",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different knowledge"
    ],
    "32": [
     "javascript",
     "python",
     "go"
    ],
    "33": [
     "react",
     "vue",
     "express"
    ]
   }
  },
  {
   "id": 19,
   "name": "Java Programming Forums",
   "url": "https://javaprogrammingforums.com",
   "slug": "javaprogrammingforums-com",
   "confidence": "low",
   "notes": "Traditional bulletin-board forum dedicated to Java. Creation year is an estimate.",
   "references": [
    "https://www.javaprogrammingforums.com/"
   ],
   "answers": {
    "1": "None",
    "2": 2008,
    "3": "in areas",
    "4": [
     "own registration"
    ],
    "5": [
     "string search"
    ],
    "6": [
     "developers"
    ],
    "7": "forum",
    "8": [
     "coding"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "None"
    ],
    "16": [
     "Liked by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "web site ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "points"
    ],
    "25": [
     "post",
     "reply",
     "discuss"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "incomplete",
     "well explained"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "java"
    ],
    "33": [
     "spring"
    ]
   }
  },
  {
   "id": 20,
   "name": "LeetCode",
   "url": "https://leetcode.com/",
   "slug": "leetcode-com",
   "confidence": "high",
   "notes": "Coding interview and practice platform with problems, contests and a discussion area.",
   "references": [
    "https://leetcode.com/",
    "https://en.wikipedia.org/wiki/LeetCode"
   ],
   "answers": {
    "1": "None",
    "2": 2015,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account",
     "facebook account",
     "linkedin"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "site",
    "8": [
     "coding"
    ],
    "9": "no",
    "10": "cannot",
    "11": "yes",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Liked by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "websites subscriptions"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "contest rankings",
     "badges",
     "points"
    ],
    "25": [
     "solve problems",
     "compete",
     "discuss",
     "post",
     "comment",
     "vote"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "competitive"
    ],
    "30": [
     "well explained",
     "accurate"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "python",
     "java",
     "c++",
     "javascript",
     "go"
    ],
    "33": []
   }
  },
  {
   "id": 21,
   "name": "Major League Hacking (MLH)",
   "url": "https://www.mlh.com/",
   "slug": "mlh-com",
   "confidence": "medium",
   "notes": "Student hackathon league and developer community; it is event-oriented and has no Q&A area, so question and answer rating do not apply.",
   "references": [
    "https://mlh.io/",
    "https://en.wikipedia.org/wiki/Major_League_Hacking"
   ],
   "answers": {
    "1": "None",
    "2": 2013,
    "3": "in communities",
    "4": [
     "own registration",
     "gmail account",
     "github account",
     "linkedin"
    ],
    "5": [
     "string search"
    ],
    "6": [
     "developers"
    ],
    "7": "site",
    "8": [
     "coding",
     "general"
    ],
    "9": "no",
    "10": "cannot",
    "11": "yes",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "None"
    ],
    "16": [
     "None"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "sponsorships"
    ],
    "22": [
     "User account",
     "email",
     "profile"
    ],
    "23": "None",
    "24": [
     "None"
    ],
    "25": [
     "compete"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "collaborative",
     "competitive"
    ],
    "30": [],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "javascript",
     "python"
    ],
    "33": [
     "react"
    ]
   }
  },
  {
   "id": 22,
   "name": "MDN Web Docs (pt-BR)",
   "url": "https://developer.mozilla.org/pt-BR/",
   "slug": "developer-mozilla-org-pt-br",
   "confidence": "high",
   "notes": "Reference documentation for web technologies (Portuguese locale). Content is maintained on GitHub, and reading requires no account.",
   "references": [
    "https://developer.mozilla.org/pt-BR/",
    "https://en.wikipedia.org/wiki/MDN_Web_Docs",
    "https://github.com/mdn/content"
   ],
   "answers": {
    "1": "None",
    "2": 2005,
    "3": "in topics",
    "4": [
     "own registration"
    ],
    "5": [
     "string search"
    ],
    "6": [
     "developers"
    ],
    "7": "website",
    "8": [
     "coding"
    ],
    "9": "no",
    "10": "can",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "None"
    ],
    "16": [
     "None"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Editorial"
    ],
    "21": [
     "web site ads",
     "websites subscriptions"
    ],
    "22": [
     "None"
    ],
    "23": "None",
    "24": [
     "None"
    ],
    "25": [
     "share tips"
    ],
    "26": "yes",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "accurate",
     "complete",
     "well explained"
    ],
    "31": [
     "different country languages"
    ],
    "32": [
     "javascript"
    ],
    "33": []
   }
  },
  {
   "id": 23,
   "name": "Microsoft Q&A",
   "url": "https://learn.microsoft.com/answers",
   "slug": "learn-microsoft-com-answers",
   "confidence": "high",
   "notes": "Microsoft's official Q&A platform for its products, launched in 2019 to replace the MSDN and TechNet forums.",
   "references": [
    "https://learn.microsoft.com/answers/"
   ],
   "answers": {
    "1": "microsoft",
    "2": 2019,
    "3": "in topics",
    "4": [
     "outlook account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "IT professionals"
    ],
    "7": "forum",
    "8": [
     "general",
     "coding",
     "maintenance"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Microsoft"
    ],
    "21": [
     "services promotions"
    ],
    "22": [
     "User account",
     "profile"
    ],
    "23": "None",
    "24": [
     "points",
     "badges"
    ],
    "25": [
     "post",
     "Q&A",
     "comment",
     "vote",
     "flag"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "accurate",
     "incomplete"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "c#",
     ".net",
     "python"
    ],
    "33": []
   }
  },
  {
   "id": 24,
   "name": "Quora",
   "url": "https://quora.com",
   "slug": "quora-com",
   "confidence": "high",
   "notes": "General-purpose Q&A platform; software engineering is one of many topics.",
   "references": [
    "https://www.quora.com/",
    "https://en.wikipedia.org/wiki/Quora"
   ],
   "answers": {
    "1": "quora",
    "2": 2009,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "facebook account",
     "apple ID"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "IT professionals"
    ],
    "7": "community",
    "8": [
     "general"
    ],
    "9": "no",
    "10": "cannot",
    "11": "no",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation"
    ],
    "21": [
     "Ads",
     "websites subscriptions"
    ],
    "22": [
     "User account",
     "email",
     "profile"
    ],
    "23": "None",
    "24": [
     "followers",
     "upvotes"
    ],
    "25": [
     "post",
     "Q&A",
     "comment",
     "vote",
     "follow users",
     "share tips"
    ],
    "26": "no",
    "27": [
     "professional topics",
     "behavioral topics",
     "miscellaneous topics",
     "technical topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "informal"
    ],
    "30": [
     "incomplete",
     "well explained"
    ],
    "31": [
     "different country languages",
     "different cultures",
     "different knowledge"
    ],
    "32": [
     "python",
     "java",
     "c++",
     "javascript"
    ],
    "33": []
   }
  },
  {
   "id": 25,
   "name": "r/AskProgramming",
   "url": "https://reddit.com/r/AskProgramming",
   "slug": "reddit-com-r-askprogramming",
   "confidence": "medium",
   "notes": "Subreddit; audience and rules are defined by the subreddit moderators. Member counts change frequently and were not recorded.",
   "references": [
    "https://www.reddit.com/r/AskProgramming/",
    "https://en.wikipedia.org/wiki/Reddit",
    "https://www.reddit.com/dev/api/"
   ],
   "answers": {
    "1": "reddit",
    "2": 2011,
    "3": "in communities",
    "4": [
     "own registration",
     "gmail account",
     "apple ID"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "community",
    "8": [
     "coding",
     "general"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "no",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Subreddit moderators"
    ],
    "21": [
     "Ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "upvotes",
     "points"
    ],
    "25": [
     "post",
     "comment",
     "vote",
     "flag",
     "discuss"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "informal",
     "collaborative"
    ],
    "30": [
     "incomplete",
     "well explained"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "python",
     "javascript",
     "java",
     "c++"
    ],
    "33": []
   }
  },
  {
   "id": 26,
   "name": "r/learnprogramming",
   "url": "https://reddit.com/r/learnprogramming",
   "slug": "reddit-com-r-learnprogramming",
   "confidence": "medium",
   "notes": "Subreddit; audience and rules are defined by the subreddit moderators. Member counts change frequently and were not recorded.",
   "references": [
    "https://www.reddit.com/r/learnprogramming/",
    "https://en.wikipedia.org/wiki/Reddit",
    "https://www.reddit.com/dev/api/"
   ],
   "answers": {
    "1": "reddit",
    "2": 2009,
    "3": "in communities",
    "4": [
     "own registration",
     "gmail account",
     "apple ID"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "community",
    "8": [
     "coding",
     "general"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "no",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Subreddit moderators"
    ],
    "21": [
     "Ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "upvotes",
     "points"
    ],
    "25": [
     "post",
     "comment",
     "vote",
     "flag",
     "discuss"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "collaborative",
     "informal"
    ],
    "30": [
     "well explained",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "python",
     "javascript",
     "java",
     "c++"
    ],
    "33": []
   }
  },
  {
   "id": 27,
   "name": "r/programming",
   "url": "https://reddit.com/r/programming",
   "slug": "reddit-com-r-programming",
   "confidence": "medium",
   "notes": "Subreddit; audience and rules are defined by the subreddit moderators. Member counts change frequently and were not recorded.",
   "references": [
    "https://www.reddit.com/r/programming/",
    "https://en.wikipedia.org/wiki/Reddit",
    "https://www.reddit.com/dev/api/"
   ],
   "answers": {
    "1": "reddit",
    "2": 2006,
    "3": "in communities",
    "4": [
     "own registration",
     "gmail account",
     "apple ID"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "community",
    "8": [
     "general"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "no",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Subreddit moderators"
    ],
    "21": [
     "Ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "upvotes",
     "points"
    ],
    "25": [
     "post",
     "comment",
     "vote",
     "flag",
     "discuss"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics",
     "miscellaneous topics"
    ],
    "28": [
     "experienced software engineers"
    ],
    "29": [
     "informal",
     "competitive"
    ],
    "30": [
     "accurate",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "rust",
     "python",
     "go",
     "javascript",
     "c++"
    ],
    "33": []
   }
  },
  {
   "id": 28,
   "name": "r/webdev",
   "url": "https://reddit.com/r/webdev",
   "slug": "reddit-com-r-webdev",
   "confidence": "low",
   "notes": "Subreddit; audience and rules are defined by the subreddit moderators. Member counts change frequently and were not recorded.",
   "references": [
    "https://www.reddit.com/r/webdev/",
    "https://en.wikipedia.org/wiki/Reddit",
    "https://www.reddit.com/dev/api/"
   ],
   "answers": {
    "1": "reddit",
    "2": 2009,
    "3": "in communities",
    "4": [
     "own registration",
     "gmail account",
     "apple ID"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "community",
    "8": [
     "coding",
     "general"
    ],
    "9": "yes",
    "10": "cannot",
    "11": "no",
    "12": "yes",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by users"
    ],
    "16": [
     "Upvoted by users"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Subreddit moderators"
    ],
    "21": [
     "Ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "upvotes",
     "points"
    ],
    "25": [
     "post",
     "comment",
     "vote",
     "flag",
     "discuss"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "informal",
     "collaborative"
    ],
    "30": [
     "well explained",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "javascript",
     "php"
    ],
    "33": [
     "react",
     "vue",
     "angular",
     "laravel",
     "express"
    ]
   }
  },
  {
   "id": 29,
   "name": "Showwcase",
   "url": "https://www.showwcase.com/",
   "slug": "showwcase-com",
   "confidence": "low",
   "notes": "Social network for developers created around 2020. Its current availability and feature set should be verified.",
   "references": [
    "https://www.showwcase.com/"
   ],
   "answers": {
    "1": "None",
    "2": 2020,
    "3": "in communities",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers"
    ],
    "7": "community",
    "8": [
     "general",
     "coding"
    ],
    "9": "no",
    "10": "cannot",
    "11": "yes",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Reactions"
    ],
    "16": [
     "Reactions"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community"
    ],
    "21": [
     "websites subscriptions"
    ],
    "22": [
     "User account",
     "email",
     "profile"
    ],
    "23": "None",
    "24": [
     "followers",
     "reactions"
    ],
    "25": [
     "post",
     "react",
     "comment",
     "follow users",
     "share tips"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative",
     "informal"
    ],
    "30": [
     "incomplete"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "javascript",
     "python"
    ],
    "33": [
     "react"
    ]
   }
  },
  {
   "id": 30,
   "name": "Software Engineering Stack Exchange",
   "url": "https://softwareengineering.stackexchange.com",
   "slug": "softwareengineering-stackexchange-com",
   "confidence": "high",
   "notes": "Stack Exchange site for conceptual questions about software development (formerly Programmers Stack Exchange).",
   "references": [
    "https://softwareengineering.stackexchange.com/",
    "https://stackexchange.com/sites",
    "https://api.stackexchange.com/"
   ],
   "answers": {
    "1": "stack exchange",
    "2": 2010,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "community",
    "8": [
     "architecture",
     "management",
     "general",
     "testing",
     "evolution"
    ],
    "9": "yes",
    "10": "can",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by community"
    ],
    "16": [
     "Upvoted by community"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community voting"
    ],
    "21": [
     "web site ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "badges",
     "points",
     "upvotes"
    ],
    "25": [
     "Q&A",
     "post",
     "reply",
     "vote",
     "comment",
     "flag"
    ],
    "26": "no",
    "27": [
     "technical topics",
     "professional topics"
    ],
    "28": [
     "experienced software engineers"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "accurate",
     "well explained"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [
     "java",
     "c#",
     "python",
     "javascript"
    ],
    "33": []
   }
  },
  {
   "id": 31,
   "name": "Stack Overflow",
   "url": "https://stackoverflow.com",
   "slug": "stackoverflow-com",
   "confidence": "high",
   "notes": "The largest Q&A site for programmers and the flagship of the Stack Exchange network. Public data dumps are available.",
   "references": [
    "https://stackoverflow.com/",
    "https://en.wikipedia.org/wiki/Stack_Overflow",
    "https://stackexchange.com/sites",
    "https://api.stackexchange.com/"
   ],
   "answers": {
    "1": "stack exchange",
    "2": 2008,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account",
     "facebook account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "community",
    "8": [
     "coding",
     "general",
     "maintenance",
     "testing"
    ],
    "9": "yes",
    "10": "can",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by community"
    ],
    "16": [
     "Upvoted by community"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community voting"
    ],
    "21": [
     "web site ads",
     "website services"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "badges",
     "points",
     "upvotes"
    ],
    "25": [
     "Q&A",
     "post",
     "reply",
     "vote",
     "comment",
     "flag"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners",
     "experienced software engineers"
    ],
    "29": [
     "collaborative",
     "competitive"
    ],
    "30": [
     "accurate",
     "well explained",
     "incomplete"
    ],
    "31": [
     "different country languages",
     "different cultures"
    ],
    "32": [
     "javascript",
     "python",
     "java",
     "c#",
     "php",
     "c++"
    ],
    "33": [
     "react",
     "angular",
     "django",
     "spring",
     "laravel",
     "express",
     "vue",
     "flask"
    ]
   }
  },
  {
   "id": 32,
   "name": "Web Applications Stack Exchange",
   "url": "https://webapps.stackexchange.com",
   "slug": "webapps-stackexchange-com",
   "confidence": "high",
   "notes": "Stack Exchange site for power users of web applications; its questions are mostly about using web apps rather than building them.",
   "references": [
    "https://webapps.stackexchange.com/",
    "https://stackexchange.com/sites",
    "https://api.stackexchange.com/"
   ],
   "answers": {
    "1": "stack exchange",
    "2": 2010,
    "3": "in topics",
    "4": [
     "own registration",
     "gmail account",
     "github account"
    ],
    "5": [
     "string search",
     "tags/labels search"
    ],
    "6": [
     "developers",
     "software engineers"
    ],
    "7": "community",
    "8": [
     "general"
    ],
    "9": "yes",
    "10": "can",
    "11": "no",
    "12": "no",
    "13": null,
    "14": null,
    "15": [
     "Upvoted by community"
    ],
    "16": [
     "Upvoted by community"
    ],
    "17": null,
    "18": null,
    "19": null,
    "20": [
     "Moderation + Community voting"
    ],
    "21": [
     "web site ads"
    ],
    "22": [
     "User account",
     "email"
    ],
    "23": "None",
    "24": [
     "badges",
     "points",
     "upvotes"
    ],
    "25": [
     "Q&A",
     "post",
     "reply",
     "vote",
     "comment",
     "flag"
    ],
    "26": "no",
    "27": [
     "technical topics"
    ],
    "28": [
     "beginners"
    ],
    "29": [
     "collaborative"
    ],
    "30": [
     "accurate",
     "well explained"
    ],
    "31": [
     "different knowledge"
    ],
    "32": [],
    "33": []
   }
  }
 ]
};

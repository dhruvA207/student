---
toc: True
layout: post
title: Dhruv's 1st Blog
description: Welcome to my first blog! Here you will learn the main topics of the first CSSE Sprint.
menu: nav/github_pages.html
permalink: /dhruvs-blog
---

# 1. **Installing VS Code and Dependencies on Mac**

On a **Mac**, you’ll need to set up a few dependencies before installing VS Code.

## Step 1: Install Homebrew
Homebrew is a package manager for macOS that makes it easy to install software.

Open **Terminal** and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

## Verified Installations:

```bash
# Check Python version
python --version

# Check Git version and configuration
git --version
git config --global user.name "Dhruv Agrawal"
git config --global user.email "dhruvagrawal.v@gmail.com"
```

# 2. **Managing Repositories**

- Copied the `pages` repository into a personal folder under the `opencs` directory
- Experimented with theme changes in the `pages` repo to personalize the site
- Created a student personal repository

# 3. **Setting Up a Virtual Environment**

Run setup script for virtual environment:

```bash
# Setup virtual environment
./scripts/venv.sh
```

```bash
# Activate venv before running code
source venv/bin/activate
```

```bash
# if script doesn't work, manually build a venv
python3 -m venv venv
```

# 4. **Repository Collaboration**

- Created a shared repository for my team
- Created a fork of the team repository

# 5. **Working with Jupyter Notebooks**

- Locate the notebook file (e.g., `Jokes.ipynb`) in the personal repo
- **Open Developer Tools → Console → Clear**
- Run cells with the play button
- Adjust code so outputs display correctly on `pages` as well as changing the jokes to some of my own!
- Commit changes with outputs:

```bash
# Commit notebook with outputs
git add <notebook_filename>.ipynb
git commit -m "Updated notebook with output"
git push
```

# 6. **Other Tasks Completed**

- Verified all outputs in notebooks appeared correctly on pages
- Confirmed Python code ran properly in the virtual environment
- Managed multiple repositories and forks
- Customized project settings and themes for personal workflow
- Ensured VS Code functionality on Windows



# Progress during weeks 1-4

## Index.md
- Edited `index.md` for the front page to match our personal info (name, srummers, and more)


## About Me Page
- Created an **About Me page** in the `about.md` file

## Cloning Repositories
- Cloned the pages repository of Open Coding Society (opencs)
- Established Personal repository (student)
- Cloned team repository (shared pages repo)
- `git clone`

## Copying Files Between Repositories
- Learned how to move files from one repo to another
- For example, moved the 2025-09-03-background-lesson.ipy file from pages to personal repo

## Jupyter Notebooks & Jokes
- Opened and ran Jupyter Notebooks in VS Code (.ipynb)
- Practiced with the Jokes.ipynb notebook and converted results into HTML format

## Changing Background
- Made changes to the background.md file
- By editing the front matter, we were able to change the background image for our website

# Final Thoughts

After many efforts and tries, I started to understand what to do and I was able to get everything that I learned set up on my Mac. It was unlike anything I had done before, but I can't wait to learn more in the next coming weeks!


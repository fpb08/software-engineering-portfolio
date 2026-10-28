# Software Engineering Portfolio

An initial, static website project for a six-part college portfolio. The pages use semantic HTML, one shared stylesheet, relative links, and a small optional JavaScript enhancement.

## File structure

```text
software-engineering-portfolio/
├── index.html                 # Home page
├── about.html                 # Introduction and professional goals
├── projects.html              # Project descriptions
├── skills.html                # Technical skills and learning
├── resume.html                # Resume and background
├── contact.html               # Public contact options
├── proposal.html              # Part 1 planning proposal; not in main navigation
├── css/
│   └── styles.css             # Shared responsive styles
├── js/
│   └── script.js              # Optional current-year footer enhancement
└── assets/
    ├── images/                 # Add portfolio images here
    ├── documents/              # Add a public-safe resume PDF here
    └── diagrams/
        └── site-map.svg        # Visual map of the six main pages
```

The `assets/images/` and `assets/documents/` folders are intentionally empty until you have content to add. Git does not track empty folders by themselves; add a file when you are ready to use either folder.

## Preview locally

You can open `index.html` directly in a current browser. For a local web server, open a terminal in this folder and run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with Ctrl+C. The project uses relative file links, so it can also live under a repository subpath on GitHub Pages.

## Publish with GitHub Pages

1. Create a GitHub repository for the project and add these files to its root. Do not assume a particular repository name; the relative page and asset links support project sites.
2. Commit and push the files to the repository's default branch.
3. In the repository on GitHub, open **Settings → Pages**.
4. Under the build and deployment source, choose **Deploy from a branch**, select the branch containing the site and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish and use the site URL shown in the Pages settings. Check the live pages and links.

GitHub Pages publishes the actual repository contents only after you create and push a repository; this starter project does not claim that it has been published.

## Validate the proposal page

After editing `proposal.html`, open the [W3C Markup Validation Service](https://validator.w3.org/) and choose **Validate by File Upload** or **Validate by Direct Input**. Select or paste the actual `proposal.html` source and review any reported errors or warnings. This starter project makes no claim that validation has been run or passed.

## Personalize before publishing

- Add project links and examples, education or experience details, and any resume PDF you decide to share.
- Review the proposal references and confirm that the research discussion and citation format meet your instructor's requirements.
- Add only contact details and images you are comfortable publishing publicly. Supply meaningful alternative text for informative images.
- Check citations against your instructor's requested style.

# MyPortfolio
Portfolio Website

# Portfolio Deployment Settings

### General

**Name:**  
Unique name for your Static Site:  
`abhinavsivanandhan-portfolio`

### Build & Deploy

**Repository:**  
URL of the repository:  
`https://github.com/AbhinavSivanandhan/MyPortfolio`

**Branch:**  
Repository branch to be used:  
`main`

**Root Directory (Optional):**  
Directory where commands will run (defaults to repository root):  
`.`

**Build Filters:**  
Filters for files and paths to monitor for automatic deploys. Paths are absolute.

- **Included Paths:**  
  Paths that trigger a new build when changed.  
  *Add Included Path*

- **Ignored Paths:**  
  Paths that do not trigger a new build when changed.  
  *Add Ignored Path*

**Build Command:**  
Command to run in the root directory when a new version of the code is pushed or deployed manually:  

./
npm install
$


**Publish Directory:**  
Relative path of the directory containing built assets to publish (e.g., `./`, `./build`, `dist`, `frontend/build`):  
`./dist`

**Auto-Deploy:**  
Automatically deploy on every push to the repository or changes to the service?  
*Yes*

**Deploy Hook:**  
Private URL to trigger a deploy for this server (keep this secret):  
`https://api.render.com/deploy/srv-cm778bmd3nmc73as9i80?key=_wQ8tIU6w2Q`

### Custom Domains

Service URL: `https://abhinavsivanandhan-portfolio.onrender.com`

Point custom domains to this service. See [DNS configuration instructions](https://render.com/docs/custom-domains).

*Add Custom Domain*

### PR Previews

**Pull Request Previews:**  
Automatically create a preview URL for every new pull request created on the main branch:  
*Disabled*

### Notifications

**Service Notifications:**  
Set notifications for your service (overrides account default settings):  
*Use account default (Only failure notifications)*

**Preview Environment Notifications:**  
Configure notifications for preview environments and service previews:  
*Use account default (Disabled)*

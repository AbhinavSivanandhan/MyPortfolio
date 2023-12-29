# MyPortfolio
Portfolio Website


Render Deployment settings(dump details-format later):
General
Name
A unique name for your Static Site.

abhinavsivanandhan-portfolio
Edit
Build & Deploy
Repository
The repository used for your Static Site.

https://github.com/AbhinavSivanandhan/MyPortfolio
Edit
Branch
The repository branch used for your Static Site.


main
Edit
Root DirectoryOptional
Defaults to repository root. When you specify a root directory that is different from your repository root, Render runs all your commands in the specified directory and ignores changes outside the directory.

.
Edit
Build Filters
Filter for files and paths to monitor for automatic deploys. Learn about build filters. Filter paths are absolute. If you've defined a root directory, you can still define paths outside of the root directory.

Edit
Included Paths
Changes that match these paths will trigger a new build.

Add Included Path
Ignored Paths
Changes that match these paths will not trigger a new build.

Add Ignored Path
Build Command
This command runs in the root directory of your repository when a new version of your code is pushed, or when you deploy manually. It is typically a script that installs libraries, runs migrations, or compiles resources needed by your app.

./
npm install
$
Edit
Publish directory
The relative path of the directory containing built assets to publish. Examples: ./, ./build, dist and frontend/build.

./
dist
Edit
Auto-Deploy
Automatic deploy on every push to your repository or changes to your service? Select "No" to handle your deploys manually. Automatic deploys not working as expected? Troubleshoot your GitHub connection.


Yes
Edit
Deploy Hook
Your private URL to trigger a deploy for this server. Remember to keep this a secret.

https://api.render.com/deploy/srv-cm778bmd3nmc73as9i80?key=_wQ8tIU6w2Q
 
Regenerate Hook
Custom Domains
Your service is always available at https://abhinavsivanandhan-portfolio.onrender.com.

You can also point custom domains you own to this service. See DNS configuration instructions.

Add Custom Domain
PR Previews
Pull Request Previews
Enabled to automatically create a preview URL for every new pull request created on the main branch in AbhinavSivanandhan/MyPortfolio. Pull Request Previews create a new instance for just this service. Use Preview Environments to clone a group of services for every PR.


Disabled
Edit
Notifications
Service Notifications
Set notifications to receive for your service. This setting will override your account’s default settings.


Use account default (Only failure notifications)
Edit
Preview Environment Notifications
Configure notifications for preview environments and service previews.


Use account default (Disabled)
Edit

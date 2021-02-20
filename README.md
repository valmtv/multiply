# Use template
- git clone it
- remove .git folder and initialize new git repo

# MyProject
Describe what MyProject is for and how to use it.

# Start locally
- `npm i` - install packages
- `npm run dev` - run development build
- `npm run jest` (optional) - run jest in watch mode
- http://localhost:9000

Why not put webpack into docker container and have all local environment running
with one `docker-compose up` command:
Webpack in container performance is not the best:
- recompiling with hot reload and module replacement takes around 10-15 second.
- on webpack-dev-server startup it takes up to 1min

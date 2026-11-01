# CI/CD to EC2

A minimal Express + MongoDB app used to practise continuous deployment to an AWS EC2
instance with GitHub Actions and PM2.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
![PM2](https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=pm2&logoColor=white)

## About

The app itself is deliberately tiny: `app.js` connects to a local MongoDB with
Mongoose and serves one JSON route on port 3000. The point of the repo is the
deployment pipeline in `.github/workflows/main.yml`.

## How the pipeline works

On every push to `main`, the **Deploy to EC2** workflow:

1. Checks out the repository
2. Loads the SSH key from the `EC2_SSH_PRIVATE_KEY` repository secret (`webfactory/ssh-agent`)
3. SSHes into the EC2 host as `ubuntu`, then in `/home/ubuntu/CICD` runs:
   - `git pull`
   - `npm install`
   - `pm2 restart app.js`

The server needs the repository cloned at `/home/ubuntu/CICD`, Node.js, and PM2
already running `app.js`.

## API Endpoints

| Method | Route | Response |
|---|---|---|
| GET | `/` | `{ "message": "Hello World ! " }` |

## Project Structure

```
CICD/
├── .github/workflows/main.yml   # deploy-on-push workflow
├── app.js                       # Express server + Mongoose connection
└── package.json
```

## Getting Started

Prerequisites: Node.js and a MongoDB instance on `localhost:27017`.

```bash
npm install
node app.js
```

The server listens on http://localhost:3000. The MongoDB connection string is
hardcoded in `app.js`; change it there to match your database.

### GitHub secret

| Name | Purpose |
|---|---|
| `EC2_SSH_PRIVATE_KEY` | Private key the workflow uses to SSH into the EC2 instance |

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)

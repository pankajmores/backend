require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "pankajmores",
  "id": 136971374,
  "node_id": "U_kgDOCCoEbg",
  "avatar_url": "https://avatars.githubusercontent.com/u/136971374?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pankajmores",
  "html_url": "https://github.com/pankajmores",
  "followers_url": "https://api.github.com/users/pankajmores/followers",
  "following_url": "https://api.github.com/users/pankajmores/following{/other_user}",
  "gists_url": "https://api.github.com/users/pankajmores/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pankajmores/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pankajmores/subscriptions",
  "organizations_url": "https://api.github.com/users/pankajmores/orgs",
  "repos_url": "https://api.github.com/users/pankajmores/repos",
  "events_url": "https://api.github.com/users/pankajmores/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pankajmores/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 3,
  "following": 3,
  "created_at": "2023-06-18T11:32:18Z",
  "updated_at": "2025-02-08T16:49:13Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('pankajdotcom')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at pankaj.com</h1>')
})

app.get('/github', (req,res) => {
    res.send('<h2>pankajmores</h2>')
})

app.get('/mithub', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
# Simple Articles API

## Prerequisites
node >= 14.16.7

## How to start the app

```
cd articles-api
npm install
npm start
```

The Articles API will be accessible on [localhost:9100/articles](http://localhost:9100/articles).

## Available endpoints

### Get article by title
*GET /articles/:articleTitle*

### Get all articles
*GET /articles*

### Get article by ID
*GET /articles/:articleId*

### Add new article
*POST /articles*

Request body:
```
{ "price": 10, "title": "Article title", "imageUrl": "https://example.com" }
```

### Update article by ID
*PUT /articles/:articleId*

Request body:
```
{ "price": 10, "title": "Article title", "imageUrl": "https://example.com" }
```

### Delete article by ID
*DELETE /articles/:articleId*
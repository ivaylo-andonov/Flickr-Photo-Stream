# Flickr-Photo-Stream
---

Flickr Photo stream app developed with [React](https://facebook.github.io/react/), [Babel](http://babeljs.io/), [Nodejs](https://nodejs.org/en/) and [Webpack](http://webpack.github.io/).

Additional libs and helpers: 
- React-bootstrap;
- Express;
- Html-react-parser;
- JQuery;

Photos stream by Flickr public API

App hosted at : http://tranquil-bastion-93473.herokuapp.com 
/allow not secure from browser, no https/
---

Task url : https://github.com/holidayextras/culture/blob/master/recruitment/developer-flickr-task.md

Create Project
---
```
git clone https://github.com/IvayloAndonov/Flickr-Photo-Stream.git
```

Setup
---
(Make sure that you have Nodejs installed)

```
npm install
```

Usage
---

1. `node server.js`

2. Open [http://localhost:3000/](http://localhost:3000/).


Supported features:
---

* Photos fetching from Flickr API
* Search photos by tag name/s (multiple tags search is able as tags are separated by comma)
* Loading filtered photos via click from any photo`s '#hashtag'
* Lazy loading/infinity scrolling
* Responsive design


Testing
---
* Jest
* Enzyme

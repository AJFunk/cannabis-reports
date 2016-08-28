## Cannabis Reports
A Cannabis Reports API wrapper for Node.js

[![Build Status](https://travis-ci.org/AJFunk/cannabis-reports.svg?branch=master)](https://travis-ci.org/AJFunk/cannabis-reports)

### Installation

```sh
npm install --save cannabis-reports
```

### Usage

```javascript
import { Strain } from 'cannabis-reports';
```

### Strains
* [Strain.all()](#strain-all)
* [Strain.search()](#strain-search)
* [Strain.strain()](#strain-strain)
* [Strain.user()](#strain-user)
- - -
<h4 id='strain-all'>Strain.all(options)</h4>

##### options
* `sort` - [String] see [sort types](https://developers.cannabisreports.com/docs/strains#sort)
* `page` - [Number]

```javascript
// returns an Array of strain objects
Strain
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h4 id='strain-search'> Strain.search(query, options)</h4>

##### `query` - [String]
##### options
* `page` - [Number]

```javascript
// returns an Array of strain objects
Strain
  .search('orange')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h4 id='strain-strain'>Strain.strain(ucpc)</h4>

```javascript
// returns a single strain object
Strain
  .strain('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h4 id='strain-user'>Strain.user(ucpc)</h4>

```javascript
// returns a single user object of the user who added the strain to the database
Strain
  .strain('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

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
- - -
#### Strain.all(options)
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

#### Strain.search(query, options)
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

#### Strain.strain(ucpc)
```javascript
// returns a single strain object
Strain
  .strain('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

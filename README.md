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
* [Strain.reviews()](#strain-reviews)
* [Strain.effectsFlavors()](#strain-effectsFlavors)
* [Strain.seedCompany()](#strain-seedCompany)
* [Strain.genetics()](#strain-genetics)
* [Strain.children()](#strain-children)

- - -
<h3 id='strain-all'>Strain.all(options)</h3>
returns an Array of strain objects.

##### `options` (optional) - [Object]
* `sort` - [String] see [sort types](https://developers.cannabisreports.com/docs/strains#sort)
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want.

Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-search'> Strain.search(query, options)</h3>
returns an Array of strain objects matching the search query.

##### `query` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want.

Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .search('orange')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-strain'>Strain.strain(ucpc)</h3>
returns a single strain object with the specified UCPC

##### `ucpc` (required) - [String]

```javascript
Strain
  .strain('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-user'>Strain.user(ucpc)</h3>
returns a single user object of the user who added the strain to the database.

##### `ucpc` (required) - [String]

```javascript
Strain
  .strain('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-reviews'>Strain.reviews(ucpc, options)</h3>
returns an array of reviews for a cannabis strain.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want.

Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .reviews('VUJCJ4TYMG000000000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-effectsFlavors'>Strain.effectsFlavors(ucpc)</h3>
returns a object containing the average effects and flavors from reviews for this strain.

##### `ucpc` (required) - [String]

```javascript
Strain
  .effectsFlavors('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-seedCompany'>Strain.seedCompany(ucpc)</h3>
returns a object for the seed company that was responsible for a cannabis strain.

##### `ucpc` (required) - [String]

```javascript
Strain
  .seedCompany('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-genetics'>Strain.genetics(ucpc)</h3>
returns an array of strains that were the parent material for the strain with the given UCPC.

##### `ucpc` (required) - [String]

```javascript
Strain
  .genetics('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-children'>Strain.children(ucpc, options)</h3>
returns an array of the child strains that this one has been bred into.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want.

Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .children('VUJCJ4TYMG000000000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

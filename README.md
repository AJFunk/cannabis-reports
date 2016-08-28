## Cannabis Reports
A Cannabis Reports API wrapper for Node.js

[![Build Status](https://travis-ci.org/AJFunk/cannabis-reports.svg?branch=master)](https://travis-ci.org/AJFunk/cannabis-reports)

### Installation

```sh
npm install --save cannabis-reports
```

### Usage

```javascript
import { Strain, Flower } from 'cannabis-reports';
```
Only import the modules your need. For example, if you only need the `Strain` module:
```javascript
import { Strain } from 'cannabis-reports';
```

## Strains
* [Strain.all()](#strain-all)
* [Strain.search()](#strain-search)
* [Strain.strain()](#strain-strain)
* [Strain.user()](#strain-user)
* [Strain.reviews()](#strain-reviews)
* [Strain.effectsFlavors()](#strain-effectsFlavors)
* [Strain.seedCompany()](#strain-seedCompany)
* [Strain.genetics()](#strain-genetics)
* [Strain.children()](#strain-children)
* [Strain.availability()](#strain-availability)

## Flowers
* [Flower.all()](#flower-all)
* [Flower.type()](#flower-type)
* [Flower.user()](#flower-user)
* [Flower.reviews()](#flower-reviews)
* [Flower.effectsFlavors()](#flower-effectsFlavors)
* [Flower.producer()](#flower-producer)
* [Flower.strain()](#flower-strain)

- - -
<h3 id='strain-all'>Strain.all(options)</h3>
returns an Array of strain objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
	* `name` - Alphabetically stating with numeric strains. 0-9, A-Z.
	* `-name` - Alphabetically starting with Z and working back through numeric strains. Z-A, 9-0.
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

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
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

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
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

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
returns an array of the child strains that this strain has been bred into.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .children('VUJCJ4TYMG000000000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-availability'>Strain.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a strain using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Strain
  .availability('VUJCJ4TYMG000000000000000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-all'>Flower.all(options)</h3>
returns an Array of flower objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Flower
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-type'>Flower.type(flowerType, options)</h3>
returns an Array of products for a given type.

##### `flowerType` (required) - [String] (case-insensitive) Possible values:
* `flowers`
* `seeds`
* `clones`
* `shake`
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Flower
  .type(flowerType, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
<h3 id='flower-user'>Flower.user(ucpc)</h3>
returns a single user object of the user who added the flower to the database.

##### `ucpc` (required) - [String]

```javascript
Flower
  .flower('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-reviews'>Flower.reviews(ucpc, options)</h3>
returns an array of reviews for a cannabis flower.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Flower
  .reviews('AHZ7H4N6467FVUDY3DAY00000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-effectsFlavors'>Flower.effectsFlavors(ucpc)</h3>
returns a object containing the average effects and flavors from reviews for this flower.

##### `ucpc` (required) - [String]

```javascript
Flower
  .effectsFlavors('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-producer'>Flower.producer(ucpc)</h3>
returns a object for the producer of a flower.

##### `ucpc` (required) - [String]

```javascript
Flower
  .producer('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
<h3 id='flower-strain'>Flower.strain(ucpc)</h3>
returns a object for the strain of a flower.

##### `ucpc` (required) - [String]

```javascript
Flower
  .strain('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-availability'>Flower.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a flower using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Flower
  .availability('AHZ7H4N6467FVUDY3DAY00000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

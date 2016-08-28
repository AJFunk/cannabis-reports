## Cannabis Reports
A Cannabis Reports API wrapper for Node.js

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
  .then(callback(data))
  .catch(callback(err))
```

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

```javascript
// returns an Array of strain objects
Strain
  .all()
  .then((data) => {
    console.log("Strains: ", data);
  })
```

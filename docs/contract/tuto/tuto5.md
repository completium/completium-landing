---
id: tuto5
title: Date arithmetic
sidebar_label: 5. Dates arithmetic
slug: /contract/tuto/archetype-datearith
hide_title: true
---
import Link from '@docusaurus/Link';
import MathJax from 'react-mathjax';

## Dates arithmetic

Standard arithmetic operations are available on dates.

Convert a date to a day of week, so that:
* 0 if sunday
* 1 if monday
* 2 if tuesday
* 3 if wednesday
* 4 if thursday
* 5 if friday
* 6 if saturday

The formula to implement is:

<MathJax.Provider>
<MathJax.Node formula={`n = \\lfloor\\frac{(d + 4d) \\mod 1w}{1d}\\rfloor`} />
</MathJax.Provider>

where:
* *d* is the date to compute the day of
* *4d* is the duration of four days
* *1w* is the duration of one week
* *mod* is the modulo operator: it translates to `%` operator
* ⌊ X ⌋ is the floor function

The euclidean division `div` will efficiently implement the floor and division operations.

```archetype {6} title="5-weekday.arl"
archetype weekday

variable n : int = 0

entry weekday (d : date) {
    n := (((d - 1970-01-01) + 4d) % 1w) div 1d
}
```

### Deploy

The following <Link to='/docs/cli'>Completium CLI</Link> command deploys the contract on the Tezos network:

```
completium-cli deploy 5-weekday.arl
```

### Call entry point

The following command calls the unique entry point:

```
completium-cli call 5-weekday --entry weekday --arg  '{ "d" : "2008-11-28" }'
```

### Next

Open '6-state_machine.arl' and click on "Next: State Machine" below.



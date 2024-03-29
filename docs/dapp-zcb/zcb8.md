---
id: zcb8
title: Interface
sidebar_label: Interface
slug: /dapp-zcb/interface
---

import DappIcon from '../DappIcon';
import DappFigure from '../DappFigure';
import DappButton from '../DappButton';


## Storage

```archetype
variable issuer     : address = @tz1bfVgcJC4ukaQSHUe1EbrUd5SekXeP9CWk
```

```archetype
variable subscriber : address = @tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P
```

```archetype
variable facevalue : tez = 10tz
```

```archetype
variable discount : rational = 14%
```

```archetype
variable maturityduration : duration = 1m
```

```archetype
variable paybackduration  : duration = 1m
```

```archetype
variable issuersigned     : bool = false
```

```archetype
variable subscribersigned : bool = false
```

```archetype
variable signaturedate    : option<date> = none
```

```archetype
states =
  | Created initial
  | Signed
  | Terminated
  | Disputed
```

## Entry points

### To signed

```archetype
transition toSigned() {
  called by selfaddress
  from Created to Signed with effect {
    signaturedate := some(now)
  }
}
```

### Sign

```archetype
entry sign () {
  ...
}
```

### Terminate

```archetype
transition terminate () {
 ...
}
```

### Dispute

```archetype
transition dispute () {
  ...
}
```
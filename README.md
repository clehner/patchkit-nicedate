# NiceDate

```jsx
import NiceDate from 'patchkit-nicedate'

<NiceDate ts={Date.now()} />
// 4:35pm

<NiceDate ts={Date.now() - ONEDAY} />
// Mon 4:35pm

<NiceDate ts={Date.now() - ONEWEEK} />
// Jan 5

<NiceDate ts={Date.now()} ago />
// a few seconds ago

<NiceDate ts={Date.now() - ONEDAY} ago />
// one day ago

<NiceDate ts={Date.now() - ONEWEEK} ago />
// 7 days ago
```
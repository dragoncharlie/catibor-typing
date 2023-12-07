https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing

### Dependencies:
```
  "@formatjs/intl-localematcher": "^0.4.0",
  "negotiator": "^0.6.3",
  "server-only": "^0.0.1",
  "@types/negotiator": "0.6.1",
```

### Files:
app/_i18n/*
middleware.ts

### Specifics
- Root page and layout moved to `[lng]` folder

```
import LocaleSwitcher from '@/app/_i18n/LocaleSwitcher'
import {getDictionary} from '@/app/_i18n/get-dictionary'


export default async function Page({params: {lng}}: { params: { lng: string } }) {
  const dictionary = await getDictionary(lng)

  return (
    <div>
      <Link href={`/${lng}/second-page`}>
        Different page
      </Link>
      <LocaleSwitcher/>
      <p>{dictionary['active_locale']}</p>
      <p>{lng}</p>
    </div>
  );
}
```

### Settings
Default and additional languages should be set up in `_i18n/i18n-config.ts` and `_i18n/get-dictionary.ts`
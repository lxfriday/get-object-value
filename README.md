# @lxfriday/get-object-value

get object inner value

## install

```bash
npm i @lxfriday/get-object-value -S
# or
yarn add @lxfriday/get-object-value
```

## params
`smoothScrollTo(ref, pos[, rate])`

- `obj` {`object`} `required`, target object
- `keys` {`array`} `required`, key array, like object.a.b.c.d.e => ['a', 'b', 'c', 'd', 'e']
- `defaultRet` {`any`} if not found or error, will return defaultRet

## usage

```jsx harmony
const obj = {
      a: {
        b: {
          c: {
            d: {
              e: 'abcde',
            },
          },
        },
      },
    }
// not found
console.log('result => ', secureGetValue(obj, ['a', 'b', 'c', 'd', 'e', 'f'], 'not found'))
// abcde
console.log('result => ', secureGetValue(obj, ['a', 'b', 'c', 'd', 'e'], 'not found'))
```



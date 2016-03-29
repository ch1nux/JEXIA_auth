# JEXIA Auth

Angular service of a wrapper for JEXIA Authenticate process and HTTP requests

## Use

First include the script in your main view, no matter the order

```html
...
<script src="jexia_auth_service.js"></script>
...
```

Second, modify the `jexia_auth_service.js` file to your own credentials in JEXIA (the `root_key` object and the App URL), then inject and use it in your Angular modules:

```js
angular.module('MyModule', ['MyDependencies'])

.controller('MyController', ['JEXIA_Auth', function(JEXIA_Auth) {
  JEXIA_Auth.authenticate().then(function (token){
    JEXIA_Auth.setHeaders(token);
    
    /* Rest of your code */
  })
});
```

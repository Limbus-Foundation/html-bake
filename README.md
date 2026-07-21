<img width="100%" alt="html-bake-github-banner" src="https://github.com/user-attachments/assets/fcf930ee-3fe8-48be-89ae-3bbf7d042679" />

# HTML BAKE

HTML Bake is a method for organizing HTML UI structures, recommended for web-based applications.

# API 

| Method | Param | Description |
| --- | --- | --- |
| .bind() | ("html-tag-in-output-file","./html-file-to-bind.html") | Tag and Html to bind for ouput html |
| .queue() | (html-bake-list) | An html bake list to bind in order
| .bake() | {void} | bake html with all bind files


# USAGE 

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Html Bake Example</title>
</head>
<body>

    <title-bar></title-bar>
    
</body>
</html>
```
### _html-to-bind.html_


```html
<title-bar>

    <nav>
        <span>Menu</span>
        <span>Menu</span>
        <span>Menu</span>
        <span>Menu</span>
    </nav>

</title-bar>
```
### _index.ts/js_
```typescript

const { HtmlBake } = require("../dist/bake-html");

const bake = new HtmlBake("./example/index.html");

bake.bind("title-bar","./example/titlebar.html"); // You can call .bind() as many times as needed in sequence.
...
...

bake.bake(); // aways call .bake() at the end!

```
### _index.html after baked!_ : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Html Bake Example</title>
</head>
<body>

    <nav>
        <span>Menu</span>
        <span>Menu</span>
        <span>Menu</span>
        <span>Menu</span>
    </nav>
    
</body>
</html>
```

# .queue() Method ( Static )

```typescript
HtmlBake.queue([bake1,bake2,bake3])
```

# License ( MIT )

Copyright 2026 Limbus Foundation & Community <br>
Copyright 2026 Rhyan Eduardo Ferreira ( Hall Martt )

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

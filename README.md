<!--
 * @Author: cheese
 * @Date: 2021-03-28 17:28:49
 * @LastEditTime: 2021-03-28 18:05:38
-->
# postcss-compatible-mp

一个用来将微信小程序不支持的 CSS/WXSS 类名进行转换的 [PostCSS] 插件。初衷是为了解决 tailwindcss 在微信小程序中不能使用的问题。

[PostCSS]: https://github.com/postcss/postcss

```css
/* 微信小程序不支持这样的写法，会报错 */
.top-0\.5 {
  margin-top: 0.125rem;
}
```

```css
/* 上面的类名会被转换成这样 */
.top-0p5 {
  margin-top: 0.125rem;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-compatible-mp
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-compatible-mp'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage

const keyword = process.argv[2];
var fs = require('fs');
var data = JSON.parse(fs.readFileSync('emoji.json', 'utf8'));

// sample Data
// {
//   "uid": "image",
//   "type": "file",
//   "title": "My holiday photo",
//   "subtitle": "~/Pictures/My holiday photo.jpg",
//   "autocomplete": "My holiday photo",
//   "icon": {
//     "type": "filetype",
//     "path": "public.jpeg"
//   }
// }
const result = data.gitmojis
  .filter((item) => {
    return item.description.toLowerCase().indexOf(keyword) >= 0 || item.name.toLowerCase().indexOf(keyword) >= 0 || item.cn.indexOf(keyword) >= 0;
  })
  .map((res) => {
    var alfredJson = {
      uid: res.name,
      title: res.name,
      subtitle: res.cn + "(" + res.description + ")",
      icon: {
        path: `icons/${res.name}.png`
      },
      arg: res.code
    };
    return alfredJson;
  });

console.log(JSON.stringify({ items: result }));

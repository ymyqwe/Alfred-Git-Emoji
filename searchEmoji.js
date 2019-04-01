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
    return item.description.indexOf(keyword) >= 0 || item.name.indexOf(keyword) >= 0;
  })
  .map((res) => {
    var alfredJson = {
      uid: res.name,
      title: res.emoji,
      subtitle: res.description,
      icon: {
        path: `icons/${res.name}.png`
      },
      arg: res.code
    };
    return alfredJson;
  });

// console.log(result);
// const websites = [
//   {
//     title: 'wiki.lianjia.com',
//     // subtitle: name,
//     arg: "http://wiki.lianjia.com",
//     icon: {
//       path: "wiki.ico"
//     }
//   },
//   {
//     title: "jira2.lianjia.com",
//     arg: "http://jira2.lianjia.com",
//     icon: {
//       path: "jira.ico"
//     }
//   },
//   {
//     title: "git.lianjia.com",
//     arg: "http://git.lianjia.com",
//     icon: {
//       path: "git.png"
//     }
//   },
//   {
//     title: "dkkaoqin",
//     arg: "http://kaoqin.hr.ke.com/attendance/calendar",
//     icon: {
//       path: 'ke.ico'
//     }
//   },
//   {
//     title: "fuxi",
//     arg: "http://fuxi.ke.com/d/pipeline",
//     icon: {
//       path: 'fuxi.png'
//     }
//   }
// ]

// const result = {
//   "items" : websites.filter(site => site.title.indexOf(keyword) >= 0)
// }

console.log(JSON.stringify(result));

(function(window, undefined) {
  var dictionary = {
    "2192631d-b216-4b3d-8461-22cae831cf32": "skapa äventyr",
    "f5ec0ba9-eabf-403c-ab30-ac683a9da448": "Mountianbike",
    "3cce9834-7907-4079-83c1-dd92c7f0b25d": "inforamtion",
    "f2e84e30-9d1e-4c50-8240-fe9ee4869527": "Info byte",
    "deee9e1a-edde-4853-b18a-9065bef7454c": "Fjällvandring",
    "a9a4675b-4612-432c-9cad-21366ed0b5ab": "minabokningar",
    "300780f9-cf63-40c5-8b84-9d7103beba21": "felanmäl",
    "758e3708-013b-4ea7-9481-2d8d286f03f9": "seecond screen'",
    "8522cd46-968e-45cc-9f2f-ea90ffcff248": "betala",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "8d83ce62-658b-4303-a969-32f175827b66": "äventyr",
    "07ecdfeb-88f1-4baf-8985-16f821a2017a": "äventyrsinställningar",
    "b069ae72-50b5-41a3-bb13-51ef0987349f": "Kontakta oss",
    "57129d45-d655-4acf-ae9f-4da5cb87288d": "inställningar",
    "5b14c588-d029-45fe-a615-6f8dae1300de": "bergsklättring",
    "1babaf92-7ebb-4e83-90a9-b2b376b7c7f7": "Basic screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "22d415b2-6b73-4d20-b61b-783a6abe7e72": "backupp",
    "03281c4b-aacf-4f6b-af84-6096bf4ddddb": "test",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
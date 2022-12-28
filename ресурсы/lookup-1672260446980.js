(function(window, undefined) {
  var dictionary = {
    "352db71f-aa04-494e-a30f-0ad1a01e425a": "экран смерти",
    "010053f9-02d6-4e48-b354-14cf2d55e1e8": "биография",
    "ef094452-5589-4cc3-b691-9e05c8ec114d": "услуги",
    "a3ad4dfc-e522-47fd-9424-15e045d3f235": "юношество",
    "f8ac1ce7-4fec-4ec6-adf2-47ee2bc6b441": "детство",
    "53b4369a-d5da-41c4-a76f-3228497e8c03": "галерея",
    "e03e7dcb-801c-4c21-85e3-4644dbc4cdae": "команда",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "9fbcf2c8-2209-4906-aeee-79732a392379": "старость",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
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
const getUniqueUrls = () => {
  
  savedUrls = localStorage.getItem("path") || "[]";

  savedUrls = JSON.parse(savedUrls);

  savedUrls.push(window.location.pathname);

  localStorage.setItem("path", JSON.stringify(savedUrls));

  return Array.from(new Set(savedUrls))

}


/* 
1. How do I get the URL? ->window.location.href
2. Can I get the URL path only? -> window.location.pathname
3. How can I store each URL that I visit? -> localStorage.setItem("mykey", "myvalue")
4. How can I access localStorage? -> localStorage.getItem("mykey")
  in order to retrieve data from localStorage, you need to convert it JSON.parse("myvalue")
5. How can I save an array into localStorage? -> 
  localStorage.setItem("ourarraykey",JSON.stringify(ourArray));
  in order to save data, it needs to be converted into a string
6. 
*/

function createcard(title,Cname,viewss,monthold,duration,image,link){
    let container = document.createElement("div");
    container.setAttribute("class","container");
    document.body.append(container);

    let left = document.createElement("div");
    left.setAttribute("class","left");
    container.appendChild(left);

    let right = document.createElement("div");
    right.setAttribute("class","right");
    container.appendChild(right);

    let imgg = document.createElement("img");
    imgg.setAttribute("src",image);
    imgg.setAttribute("class","image")
    left.appendChild(imgg);

    let timee = document.createElement("div");
    timee.setAttribute("class","time");
    timee.innerHTML = duration;
    left.appendChild(timee);

    let titlee = document.createElement("div");
    titlee.setAttribute("class","title");
    right.appendChild(titlee);

    let linkk = document.createElement("a");
    linkk.setAttribute("href",link);
    linkk.innerHTML = title;
    titlee.appendChild(linkk);
    
    let below = document.createElement("div");
    below.setAttribute("class","below");
    right.appendChild(below);
    
    let cname = document.createElement("div");
    cname.setAttribute("class","cname");
    below.appendChild(cname);
    
    let linkkk = document.createElement("a");
    linkkk.setAttribute("href","https://www.youtube.com/@CodeWithHarry");
    linkkk.innerHTML = Cname;
    cname.appendChild(linkkk);

    let dot1 = document.createElement("div");
    dot1.innerHTML ="<pre> . </pre>";
    dot1.setAttribute("class","dot");
    below.appendChild(dot1);
    
    let views = document.createElement("div");
    views.setAttribute("class","views");
    views.innerHTML = viewss;
    below.appendChild(views);

    let dot2 = document.createElement("div");
    dot2.innerHTML ="<pre> . </pre>";
    dot2.setAttribute("class","dot");
    below.appendChild(dot2);

    let months = document.createElement("div");
    months.innerHTML = monthold;
    months.setAttribute("class","months");
    below.appendChild(months);
}


createcard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodewithHarry","2.2M views","2 months ago","31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&t=1s");
createcard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodewithHarry","2.2M views","2 months ago","31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&t=1s");
createcard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodewithHarry","2.2M views","2 months ago","31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&t=1s");

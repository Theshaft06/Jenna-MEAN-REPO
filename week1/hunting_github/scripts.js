// $.get("https://api.github.com/users/(... user name)", displayName)
// // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
// function displayName(data) {
//   console.log(data);
// }


// $(document.getElementById("displayButton")).click(function() {
//     $.getJSON("https://api.github.com/users/JennaDalgety", displayName)
//     function displayName(data) {
//         $("#githubInfo").html(data);
//     }
// })

// var infoAPI = $.get("https://api.github.com/users/JennaDalgety");
// console.log(infoAPI);

$.get("https://api.github.com/users/JennaDalgety", displayName);

function displayName(data) {

    document.getElementById("displayButton").onclick = function () {
        document.getElementById("githubInfo").innerHTML = JSON.stringify(data.name);
    };

    console.log(data);
    return data;
};



let arr = [{ n: "Family", li: "https://a.travel-assets.com/flex/flexmanager/images/2020/01/10/TVLY_Affinity_Family_img_444x444_20200107.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" },
{ n: "Last minute", li: "https://a.travel-assets.com/flex/flexmanager/images/2019/08/06/TVLY_Affinity_Budget_3_img_444x444_20190729.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" },
{ n: "Beach", li: "https://a.travel-assets.com/flex/flexmanager/images/2019/03/26/TVLY_Affinity_Beach_2_img_124x124_20190322.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" },
{ n: "All-inclusive", li: "https://a.travel-assets.com/flex/flexmanager/images/2020/01/10/TVLY_Affinity_AllInclusive_img_444x444_20200107.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" },
{ n: "Pet-friendly", li: "https://a.travel-assets.com/flex/flexmanager/images/2019/08/06/TVLY_Affinity_PetFriendly_1_img_444x444_20190729.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" },
{ n: "Luxary", li: "https://a.travel-assets.com/flex/flexmanager/images/2019/08/06/TVLY_Affinity_Luxury_4_img_444x444_20190729.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" },
{ n: "Romantic", li: "https://a.travel-assets.com/flex/flexmanager/images/2020/01/10/TVLY_Affinity_Romantic_img_444x444_20200107.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" },
{ n: "Solo travellor", li: "https://a.travel-assets.com/flex/flexmanager/images/2020/01/13/TVLY_Affinity_SoloTravel_img_444x444_20200107.jpg?impolicy=fcrop&w=100&h=100&q=mediumLow" }]




let y = document.getElementById("slide2")
for (let i = 0; i < 6; i++) {

    let a = document.createElement("img");
    a.src = arr[i].li;

    a.style.width = "100%";
    let p = document.createElement("h4");
    p.innerText = arr[i].n;
    p.style.position = "absolute";

    let d = document.createElement("div");
    d.style.position = "relative";
    d.append(a, p)

    y.append(d)

}

let c = 0;
function mover() {
    y.innerHTML = "";
    c++;
    for (let j = c; j < c + 6; j++) {
        if (j > 7) { i = (j % 8) } else if (j < 0) { i = (((8 + (j % 8)) % 8)) } else { i = j }
        let a = document.createElement("img");
        a.src = arr[i].li;

        a.style.width = "100%";
        let p = document.createElement("h4");
        p.innerText = arr[i].n;
        p.style.position = "absolute";

        let d = document.createElement("div");
        d.style.position = "relative";
        d.append(a, p)

        y.append(d)

    }


}
function movel() {
    y.innerHTML = "";
    c--;
    for (let j = c; j < c + 6; j++) {

        if (j > 7) { i = (j % 8) } else if (j < 0) { i = (((8 + (j % 8)) % 8)) } else { i = j }
        let a = document.createElement("img");
        a.src = arr[i].li;

        a.style.width = "100%";
        let p = document.createElement("h4");
        p.innerText = arr[i].n;
        p.style.position = "absolute";

        let d = document.createElement("div");
        d.style.position = "relative";
        d.append(a, p)

        y.append(d)

    }



}





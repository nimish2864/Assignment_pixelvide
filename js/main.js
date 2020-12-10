const teams=[
    {
        name:"Arsenal",
        country:"ENG",
        domesticchamp:false,
        img:"arsenal.png"
    },
    {
        name:"Astana",
        country:"KAZ",
        domesticchamp:false,
        img:"astana.png"
    },
    {
        name:"Atletico",
        country:"ESP",
        domesticchamp:false,
        img:"atletico.png"
    },
    {
        name:"Barcelona",
        country:"ESP",
        domesticchamp:true,
        img:"barcelona.png"
    },
    {
        name:"BATE",
        country:"BLR",
        domesticchamp:false,
        img:"bate.png"
    },
    {
        name:"Bayern",
        country:"GER",
        domesticchamp:true,
        img:"bayern.png"
    },
    {
        name:"Benfica",
        country:"POR",
        domesticchamp:true,
        img:"benfica.png"
    },
    {
        name:"Chelsea",
        country:"ENG",
        domesticchamp:true,
        img:"chelsea.png"
    },
    {
        name:"CSKA Moskva",
        country:"RUS",
        domesticchamp:false,
        img:"cska.png"
    },
    {
        name:"Dinamo Zagreb",
        country:"CRO",
        domesticchamp:false,
        img:"dinamo.png"
    },
    {
        name:"Dynamo Kyiv",
        country:"UKR",
        domesticchamp:false,
        img:"dynamo.png"
    },
    {
        name:"Galatasaray",
        country:"TUR",
        domesticchamp:false,
        img:"galatasaray.png"
    },
    {
        name:"Gent",
        country:"BEL",
        domesticchamp:false,
        img:"gent.png"
    },
    {
        name:"Juventus",
        country:"ITA",
        domesticchamp:true,
        img:"juventus.png"
    },
    {
        name:"Leverkusen",
        country:"GER",
        domesticchamp:false,
        img:"leverkusen.png"
    },
    {
        name:"Lyon",
        country:"FRA",
        domesticchamp:false,
        img:"lyon.png"
    },
    {
        name:"M. Tel-Aviv",
        country:"ISR",
        domesticchamp:false,
        img:"mtelaviv.png"
    },
    {
        name:"Malmo",
        country:"SWE",
        domesticchamp:false,
        img:"malmo.png"
    },
    {
        name:"Man. City",
        country:"ENG",
        domesticchamp:false,
        img:"mancity.png"
    },
    {
        name:"Man. United",
        country:"ENG",
        domesticchamp:false,
        img:"manunited.png"
    },
    {
        name:"Monchengladbach",
        country:"GER",
        domesticchamp:false,
        img:"monchengladbach.png"
    },
    {
        name:"Olympiacos",
        country:"GRE",
        domesticchamp:false,
        img:"olympiacos.png"
    },
    {
        name:"Paris",
        country:"FRA",
        domesticchamp:true,
        img:"paris.png"
    },
    {
        name:"Porto",
        country:"POR",
        domesticchamp:false,
        img:"porto.png"
    },
    {
        name:"PSV",
        country:"NED",
        domesticchamp:true,
        img:"psv.png"
    },
    {
        name:"Real Madrid",
        country:"ESP",
        domesticchamp:false,
        img:"realmadrid.png"
    },
    {
        name:"Roma",
        country:"ITA",
        domesticchamp:false,
        img:"roma.png"
    },
    {
        name:"Sevila",
        country:"ESP",
        domesticchamp:false,
        img:"sevila.png"
    },
    {
        name:"Shakhtar Donetsk",
        country:"UKR",
        domesticchamp:false,
        img:"shakhtardonetsk.png"
    },
    {
        name:"Valencia",
        country:"ESP",
        domesticchamp:false,
        img:"valencia.svg"
    },
    {
        name:"Wolfsburg",
        country:"GER",
        domesticchamp:false,
        img:"wolfsburg.png"
    },
    {
        name:"Zenit",
        country:"RUS",
        domesticchamp:true,
        img:"zenit.png"
    }
    ];
    
const groups={ A:[], B:[], C:[], D:[], E:[], F:[], G:[], H:[]}

function genrandom(min,max){
    return Math.floor((Math.random() * max) + min);
}

const champs=teams.filter(team=>{
        return team.domesticchamp!==true;
})

const domchamps=teams.filter(team=>{
    return team.domesticchamp===true;
})

Object.keys(groups).map(group=>{
    let index=genrandom(0,domchamps.length)
    groups[group].push(domchamps[index]);
    domchamps.splice(index,1)
})

Object.keys(groups).map(group=>{
    for(let i=0;i<3;i++){
    let index=genrandom(0,champs.length)
    groups[group].push(champs[index]);
    champs.splice(index,1)
    }
})

console.log(groups)

let root= document.getElementById("root")

Object.keys(groups).map(element=>{
    
    let div=document.createElement('div');
    div.setAttribute("class","col-sm-12 col-md-3 col-lg-3")
    
    let table=document.createElement('table');
    table.setAttribute("class","table1")
    
    let tr=document.createElement('tr');
    
    let th=document.createElement('th');
    th.textContent="Group "+element;
    
    tr.appendChild(th);
    table.appendChild(tr);
    
    groups[element].map(team=>{ 
        
        let img=document.createElement('img');
        img.setAttribute("src","img/"+team.img)
        img.setAttribute("class","img")
        img.setAttribute("alt",team.name)

        let tr=document.createElement('tr');
        
        let td=document.createElement('td');
        td.appendChild(img)

        let span=document.createElement('span');
        span.textContent=`${team.name}(${team.country})`;
        
        td.appendChild(span);
        tr.appendChild(td);
        table.appendChild(tr);
    })
    
    div.appendChild(table)
    root.appendChild(div)

})




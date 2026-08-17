//removes nasty html extension from the URL which could interfere with stuff
if(location.pathname.includes("/index.html")) location.replace(location.pathname.replace('/index.html', '/'))

//basic global stuff
//shortcuts
var content = document.querySelector('#content')
var body = document.body
var root = document.documentElement
var afroot = document.querySelector('#root')

var textureMap = {
    '0': {
        texture: 'empty'
    },
    '1': {
        texture: 'occupied'
    },
    '2': {
        texture: 'ozo'
    }
}

function placeTile(tileData)
{
    var tile = document.createElement('a-plane');
    tile.setAttribute('rotation', "-90 0 0");
    tile.setAttribute('roughness', "1");
    tile.setAttribute('src', "/img/tiles/"+tileData.texture+".png");
    tile.setAttribute('position', tileData.position);
    afroot.append(tile);
}

function placePlan(schema)
{
    schema.plan = schema.plan.replace(/\s+/g, '')
    var tx = 0
    var ty = 0
    for (const char of schema.plan)
    {
        let currentTile = textureMap[char]
        let tileData = {
            position: tx + ' 0 ' + ty, 
            texture: currentTile.texture 
        }
        placeTile(tileData)
        tx++
        if (tx%schema.size==0) {ty++; tx=0;}
    }
}

var testPlan = {size: 5, plan: `
    00000
    01110
    01210
    01120
    00000`
}

placePlan(testPlan);
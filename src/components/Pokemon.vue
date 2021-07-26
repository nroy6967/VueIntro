<template>
  <div>
    <p>This is the Pokemon randomizer<br>
      Click on the button below to get a random pokemon with moveset</p>
    <button @click="getNewPokemon">Get a new Pokemon</button>
  </div>
</template>
<script>
export default {
  name: "Pokemon",
  methods: {
    getNewPokemon(){
      const axios = require('axios');
      const fs = require('fs').promises;

      async function getPokemon(pokedex) {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedex}`);
          const data=response.data;
          console.log(data.species.name);
          var types;
          if (data.types.length>1){
            types=[data.types[0].type.name, data.types[1].type.name];
          } else {types=data.types[0].type.name;}
          console.log(`Its type(s) are: ${types}`);

          var moveList = [];
          const moves = data.moves;

          for(var i=0; i<4; i++) {
            if(moves.length===0){break;}
            var ran = Math.floor(Math.random() * moves.length);
            const move = moves[ran].move;
            const moveName = move.name;
            //console.log(moveName)
            moveList.push(moveName);
            const moveFile = await fs.readFile(`./moves.json`, {encoding: 'utf-8'});
            const JsonMoveFile = JSON.parse(moveFile);
            console.log(JsonMoveFile[moveName]);
            moves.splice(ran, 1);

          }
          console.log(moveList);

        }catch (error) {
          console.error(error);
        }
      }
      const pokedex= Math.floor(Math.random()*809);
      console.log(`The pokeded entry for ${pokedex} is: `);
      getPokemon(pokedex);

    }
  }
}
</script>

<style scoped>

</style>
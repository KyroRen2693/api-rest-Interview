'use strict'
//const axios = require('axios');
const btnBuscarAlbums = document.querySelector('#buscarAlbums');


function traeArtistas(){
    var arts = document.querySelector('#artista');
    if(arts.value!='')
    {
        axios({
            method:'GET',
            url:'https://api.musixmatch.com/ws/1.1/artist.search?apikey=ff43ab084caa691d86a8e8c7bdc77648&q_artist='+arts.value
        }).then(res =>{
            const list = document.querySelector('#artistsList')
            //console.log(list);
            console.log(res.data.message.body.artist_list);
            
            for(let i=0; i<res.data.message.body.artist_list.length;i++)
            {
                var listItem = document.createElement('li');
                listItem.textContent ='id Artist:'+res.data.message.body.artist_list[i].artist.artist_id +' \nArtist:'+res.data.message.body.artist_list[i].artist.artist_name;
                //console.log(listItem);
                list.appendChild(listItem);
            }
            
            
        }).catch(err=>{
            console.log(err);
        })
    }
}

btnBuscarAlbums.addEventListener('click',()=>{
    var idartist = document.querySelector('#idArtist');

    if(idartist.value!==''){
        axios({
            method:'GET',
            url:'https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id='+idartist.value+'&apikey=ff43ab084caa691d86a8e8c7bdc77648&q_artist=skrillex'
        }).then(res=>{
            const list = document.querySelector('#artistasAlbums')
            console.log(res.data.message.body.album_list);
            for(let i=0; i<res.data.message.body.album_list.length;i++){
                var listItem = document.createElement('li');
                listItem.textContent = res.data.message.body.album_list[i].album.album_name +' release date:'+res.data.message.body.album_list[i].album.album_release_date;
                list.appendChild(listItem);
            }
        }).catch(err=>console.log(err));
    }
})
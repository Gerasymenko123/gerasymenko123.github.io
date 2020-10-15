"use strict";

function supports_storage(){
    try{
        return 'localStorage' in window && window.localStorage !== null;
    }catch(e){
        return false;
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    supports_storage()? console.log('Success!'):console.log('Not Support');
    localStorage.setItem('basket', 'Bla');
    localStorage['basket1'] = 'true';

    try{
        localStorage.setItem('basket2', 'New value');
        console.log(localStorage.length);
        localStorage.removeItem('basker');
        console.dir(localStorage.basker);
        console.log(localStorage.length);
        localStorage.clear();
        console.log(localStorage.length);
    }catch (e){
        if (e == QUOTA_EXCEEDED_ERR){
            console.error('Quota Limit 5MB!');
        }
    }
});
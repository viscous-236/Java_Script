const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    results.innerHTML = '';
    if(height ==='' || height<0 || isNaN(height)){
        results.appendChild(document.createTextNode(`Please Enter valid Height`));
        document.querySelector('#results').appendChild(results);
    }else if(weight ==='' || weight<0 || isNaN(weight)){
        results.appendChild(document.createTextNode('Please Enter valid weight'));
        document.querySelector('#results').appendChild(results);
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.appendChild(document.createTextNode(`${bmi}`));
        document.querySelector('#results').appendChild(results);
    }

})

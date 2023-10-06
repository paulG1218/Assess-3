import axios from "axios";

let randomBtn = document.querySelector('#get-random-fossil')

randomBtn.addEventListener('click', () => {
    axios.get('/random-fossil.json')
        .then((res) => {
            console.log(res.data)
            document.querySelector('#random-fossil-image').innerHTML = `<img src="${res.data.img}">`
            document.querySelector('#random-fossil-name').innerText = `${res.data.name}`

        })
})
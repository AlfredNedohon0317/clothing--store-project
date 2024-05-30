const bodyEl = document.querySelector('body')
const headingEl = document.querySelector('h1')

async function getInfo() {
    const res = await axios.get(`http://localhost:3001/brands`);

    const brandData = res.data

    brandData.forEach((brand) => {
        console.log(brand.name)
        const brandEl = document.createElement('img')
        //brandEl.innerHTML = brand.name
        if (brand.name === 'Chanel') {
            brandEl.src = ''//chanel pic
        } else if (brand.name === 'Dior') {
            brandEl.src = ''//dior pic
        } else if (brand.name === 'Gucci') {
            brandEl.src = ''//gucci pic
        } else if (brand.name === 'Louis Vuitton') {
            brandEl.src = ''//lv pic
        } else if (brand.name === 'Versace') {
            brandEl.src = ''//versace pic
        } else {
            console.log('Image not available')
        }
        bodyEl.appendChild(brandEl)
    })
   // console.log(brandData[0].name)
}


    


getInfo()
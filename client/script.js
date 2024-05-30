const bodyEl = document.querySelector('body')
const headingEl = document.querySelector('h1')

async function getInfo() {
    const res = await axios.get(`http://localhost:3001/brands`);

    const brandData = res.data

    brandData.forEach((brand) => {
        console.log(brand.name)
        const brandEl = document.createElement('h2')
        brandEl.innerHTML = brand.name
        bodyEl.appendChild(brandEl)
    })

   // console.log(brandData[0].name)



    
}

getInfo()
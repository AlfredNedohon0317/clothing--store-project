const bodyEl = document.querySelector('body')
const headingEl = document.querySelector('h1')

async function getInfo() {
    const res = await axios.get(`http://localhost:3001/brands`);

    const brandData = res.data

    brandData.forEach((brand) => {
        console.log(brand.name)
        const titleEl = document.createElement('h2')
        const brandEl = document.createElement('img')
        //brandEl.innerHTML = brand.name
        if (brand.name === 'Chanel') {
            brandEl.src = 'https://i.pinimg.com/736x/32/43/f9/3243f9409fae41757d06fe6bc2d2d06d.jpg'//chanel pic
        } else if (brand.name === 'Dior') {
            brandEl.src = 'https://images-prod.dazeddigital.com/540/azure/dazed-prod/1120/0/1120547.jpg'//dior pic
        } else if (brand.name === 'Gucci') {
            brandEl.src = 'https://theimpression.com/wp-content/uploads/2023/06/gucci-valigeria-2023-ad-campaign-the-impression-003.jpg'//gucci pic
        } else if (brand.name === 'Louis Vuitton') {
            brandEl.src = 'https://www.rebag.com/thevault/wp-content/uploads/2023/06/rihanna-lv-mens-campaign-3-649999cb25888.jpeg'//lv pic
        } else if (brand.name === 'Versace') {
            brandEl.src = 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/47/gaga-versace.jpg?resize=768:*'//versace pic
        } else {
            console.log('Image not available')
        }
        titleEl.innerHTML = `${brand.name}`
        bodyEl.appendChild(titleEl)
        bodyEl.appendChild(brandEl)
    })
   // console.log(brandData[0].name)
}


    


getInfo()
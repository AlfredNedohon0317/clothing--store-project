const bodyEl = document.querySelector('body')
const headingEl = document.querySelector('h1')

async function getInfo() {
    const res = await axios.get(`http://localhost:3001/brands`);

    const brandData = res.data

    // console.log(res.data)
    console.log(brandData[0].name)

    
}

getInfo()
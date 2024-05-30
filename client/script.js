async function getInfo() {
    const res = await axios.get(`http://localhost:3001/brands`);

    console.log(res.data)

    
}

getInfo()
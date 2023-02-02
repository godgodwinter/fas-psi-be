
const routes = async (server) => {

    server.get("/", async (request, response) => {


        return response.send("Ini home")
    })
    server.get("/fasti", async (request, response) => {

        console.log("tes")

        return response.send("Hellow")
    })

}

module.exports = routes

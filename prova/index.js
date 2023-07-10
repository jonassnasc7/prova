//////// ATIVIDADE - 01
// const http = require('http')
// const { json } = require('stream/consumers')
// const fs = require('fs')
// const url = require('url')
// const PORT = 2211

// const server = http.createServer((req, res) => {
//     const objet = [
//         {id: 1, nome: 'jonas'},
//         {id: 1, nome: 'joninhas'},
//         {id: 1, nome: 'jonao'},
//     ]
//     if(req.url === '/info'){
//         res.writeHead(200, {'Content-Type':'application/json'})
//         res.write(json.objet)
//         res.end()
//     }
// })
// server.listen(PORT, () => {
//     console.log(`servidor rodando na porta ${PORT}`)
// })


//////// ATIVIDADE - 02
// const path = require('path')
// const urlCriada = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'
// const url = require('url')
// const newUrl = new url.URL(urlCriada)

// const objet = {
//     root: '',
//     dir: path.dirname(urlCriada),
//     base: path.basename(urlCriada),
//     ext: path.extname(urlCriada),
//     name: path.basename(urlCriada, path.extname(urlCriada))
// }
// console.log(objet)


//////// ATIVIDADE - 03
// const url = require('url')
// const urlCriada = 'https://nodejs.org/api/utl.html#url_new_url_input_base'
// const newUrl = new url.URL(urlCriada)

// const objetos = {
//     protocol: newUrl.protocol,
//     slashes: true,
//     host: newUrl.host,
//     port: null,
//     hostname: newUrl.hostname,
//     hash: newUrl.hash,
//     search: null,
//     query: newUrl.query,
//     pathname: newUrl.pathname,
//     path: newUrl.path,
//     href: newUrl.href,
// }
// console.log(objetos)


//////// ATIVIDADE - 04
// const fs = require('fs')
// fs.rename('arquivo.txt', 'novo_arquivo', function(err) {
//     if(err) throw(err)
//     console.log('updated')
// })


//////// ATIVIDADE - 05
// const os = require('os')
// console.log(os.cpus())


import * as fs from 'fs';
// Leitura do arquivo JSON
function lerBancoDeDados() {
    try {
        const data = fs.readFileSync('src/repo.json', 'utf8');
        return JSON.parse(data);
    }
    catch (error) {
        return [{ nome: '', idade: 0 }];
    }
}
// Escrita no arquivo JSON
async function escreverBancoDeDados(data) {
    return new Promise((resolve, reject) => {
        try {
            const bancoDeDados = lerBancoDeDados();
            const nomes = bancoDeDados?.map((data2) => data2.nome);
            if (!nomes.includes(data.uuid)) {
                bancoDeDados.push(data);
                fs.writeFileSync('src/repo.json', JSON.stringify(bancoDeDados, null, 2));
                resolve("Usuário salvo com sucesso");
            }
            reject({ error: "Usuário já existe" });
        }
        catch (err) {
            reject({ error: "Erro na requisição1" });
        }
    });
}
export { escreverBancoDeDados, lerBancoDeDados };
//# sourceMappingURL=db.js.map
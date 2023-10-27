import * as fs from 'fs';
import { resolve } from 'path';
import { TypeError } from 'types/erroType';
import { BancoDeDados } from 'types/db';
import { TypeGetProduct } from 'types/product';

type data = {
 nome: string, idade: number 
}

// Leitura do arquivo JSON
function lerBancoDeDados(): BancoDeDados {
  try {
    const data = fs.readFileSync('src/repo.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [{nome:'', idade:0}];
  }
}

// Escrita no arquivo JSON
async function escreverBancoDeDados(data: any): Promise<TypeError|string> {
  return new Promise((resolve, reject) => {
    try {
       const bancoDeDados  = lerBancoDeDados();
       const nomes = bancoDeDados?.map((data2:data)=>data2.nome);
       if (!nomes.includes(data.uuid)) {
        bancoDeDados.push(data);
        fs.writeFileSync('src/repo.json', JSON.stringify(bancoDeDados, null, 2));
        resolve("Usuário salvo com sucesso");
      }
        reject({ error: "Usuário já existe" } as TypeError);  
    } catch (err) {
      reject({ error: "Erro na requisição1" } as TypeError);
    }
  })
}


export {escreverBancoDeDados,lerBancoDeDados}
# Controle de Acesso Curitiba

Site comercial estático especializado em soluções, serviços e projetos de controle de acesso físico para condomínios residenciais, comerciais, indústrias e empresas em Curitiba e Região Metropolitana. Operação da **Intelsecsul Segurança Eletrônica**.

- **Domínio de Produção:** [https://controledeacessocuritiba.com.br](https://controledeacessocuritiba.com.br)
- **WhatsApp e Telefone:** (41) 99844-8409

---

## Comandos do Projeto

O projeto é 100% estático (React + Vite + TypeScript + Tailwind CSS) com motor SSG (*Static Site Generation*) via script pós-build (`scripts/prerender.ts`).

- **Instalar dependências:**
  ```bash
  npm install
  ```

- **Ambiente de desenvolvimento local (Porta 3000):**
  ```bash
  npm run dev
  ```

- **Build de produção e pré-renderização estática (SSG):**
  ```bash
  npm run build
  ```
  *Executa `vite build` e em seguida `tsx scripts/prerender.ts`, gerando arquivos HTML completos para cada rota dentro do diretório `dist`, juntamente com `sitemap.xml`, `robots.txt`, `404.html` e a auditoria de pendências no terminal.*

- **Visualizar o build estático localmente:**
  ```bash
  npm run preview
  ```

- **Checagem de tipos TypeScript:**
  ```bash
  npm run lint
  ```

---

## Publicação na Netlify

O projeto está configurado via `netlify.toml` para build automático a partir do repositório GitHub:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Versão do Node.js:** 22 (definida no arquivo `.nvmrc`)

---

## Onde Editar o Conteúdo

Todo o conteúdo textual e estrutural está isolado em arquivos de dados para permitir edições sem alterar o layout dos componentes:

- **Dados da Empresa e Configurações Globais:**
  `src/config/site.ts` (nome, telefones, cidades atendidas, navegação, dados cadastrais).
- **Soluções Técnicas:**
  `src/content/solucoes-data/` (um arquivo `.ts` por solução) e centralizador `src/content/solucoes.ts`.
- **Segmentos de Mercado:**
  `src/content/segmentos.ts` (condomínios, indústrias, empresas, clínicas, etc.).
- **Serviços Oferecidos:**
  `src/content/servicos.ts` (instalação, manutenção, locação, modernização).
- **Cidades da Região Metropolitana:**
  `src/content/cidades.ts` (Curitiba e os 10 municípios da RMC).
- **Perguntas Frequentes (FAQ):**
  `src/content/faq.ts`.

---

## Regra de Ouro: Dados Fáticos e `[[PREENCHER]]`

Para assegurar veracidade absoluta e conformidade jurídica, **nenhum dado factual é inventado** (como CNPJ, endereço completo, certificações, marcas parceiras ou nomes de clientes).

1. Campos pendentes são marcados com `[[PREENCHER: Descrição]]` em `src/config/site.ts` ou nos arquivos de conteúdo.
2. A função utilitária `isFieldFilled()` verifica se o dado foi fornecido; caso esteja pendente, **a interface oculta a seção dependente de forma transparente**, sem quebrar o layout.
3. Ao executar `npm run build`, o script de pré-renderização varre a base de código e lista no terminal todos os pontos pendentes para preenchimento.

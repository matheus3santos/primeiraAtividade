class Aluno{

    constructor(){
        this.id = 1;
        this.arrayAlunos =[];
        this.editId = null;
    }


    salvar(){
        let aluno = this.lerDados();

        if(this.validaCampos(aluno)){
            if(this.editId == null){
                this.adicionar(aluno)
            }else{
                this.atualizar(this.editId, aluno)
            }
        }
        
        this.listaTabela();
        this.cancelar();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayAlunos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_aluno = tr.insertCell();
            let td_telefone = tr.insertCell();
            let td_localizacao = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_aluno.innerText = this.arrayAlunos[i].nomeAluno;
            td_telefone.innerText = this.arrayAlunos[i].telefone;
            td_localizacao.innerText = this.arrayAlunos[i].localizacao;
            

            td_id.classList.add('center')

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            td_acoes.appendChild(imgEdit)
            imgEdit.setAttribute('onClick','aluno.editar('+JSON.stringify(this.arrayAlunos[i])+')')

            let imgDel = document.createElement('img');
            imgDel.src = 'img/del.png';
            td_acoes.appendChild(imgDel)
            imgDel.setAttribute('onClick','aluno.deletar('+this.arrayAlunos[i].id+')')

            
        }
        console.log(aluno)
    }
    

    adicionar(aluno){
        this.arrayAlunos.push(aluno)
        this.id++;

    }

    atualizar(id, aluno){
        for(let i =0; i < this.arrayAlunos.length; i++){
            if(this.arrayAlunos[i].id == id){
                this.arrayAlunos[i].nomeAluno = aluno.nomeAluno;
                this.arrayAlunos[i].telefone = aluno.telefone;
                this.arrayAlunos[i].localizacao = aluno.localizacao;
            }
        }
    }

    lerDados(){
        let aluno ={}

        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('aluno').value;
        aluno.telefone = document.getElementById('telefone').value;
        aluno.localizacao = document.getElementById('localizacao').value;

        return aluno;
    }

    validaCampos(aluno){
        let msg=''

        if(aluno.nomeAluno==''){
            msg += 'Informe o nome do aluno!';

        }
        if(aluno.telefone==''){
            msg += 'Informe o telefone do aluno.';

        }
        if(aluno.localizacao==''){
            msg += 'Informe a localidade.';

        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true;
    }

    cancelar(){
        document.getElementById('aluno').value='';
        document.getElementById('telefone').value='';
        document.getElementById('localizacao').value=''
        document.getElementById('btn1').innerText='Salvar';
        this.editId = null;
    }

    deletar(id){

        for(let i = 0; i < this.arrayAlunos.length; i++){
            if(this.arrayAlunos[i].id == id){
                this.arrayAlunos.splice(i,1)
                tbody.deleteRow(i);
            }

        }
        console.log(this.arrayAlunos)
        
    }
    editar(dados){
        this.editId = dados.id;

        document.getElementById('aluno').value = dados.nomeAluno;
        document.getElementById('telefone').value = dados.telefone;
        document.getElementById('localizacao').value = dados.localizacao;
        document.getElementById('btn1').innerText = 'Atualizar';

        
    }

  







}

var aluno = new Aluno();
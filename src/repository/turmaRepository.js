import connection from './connection.js'

//create

export async function insert(turma){
    const comando = `INSERT INTO tb_turma
     (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, 
     bt_ativo, dt_inclusao) VALUES (?, ?, ?, ?, ?, ?)`;

    let [info] = await connection.query(comando,
        [turma.nm_turma, turma.ds_curso, turma.nr_ano_letivo, turma.qtd_capacidade, turma.bt_ativo, turma.dt_inclusao]);

    return info.insertId;
}

//read

export async function findAll(){
    const comando = `SELECT nm_turma as nm_turma,
                            ds_curso as ds_curso,
                            nr_ano_letivo as nr_ano_letivo,
                            qtd_capacidade as qtd_capacidade,
                            bt_ativo as bt_ativo,
                            dt_inclusao as dt_inclusao
                            FROM tb_turma`;
    let resp = await connection.query(comando);
    return resp[0];
}

export async function findById(id){
    const comando = `SELECT nm_turma as nm_turma,
                            ds_curso as ds_curso,
                            nr_ano_letivo as nr_ano_letivo,
                            qtd_capacidade as qtd_capacidade,
                            bt_ativo as bt_ativo,
                            dt_inclusao as dt_inclusao
                            FROM tb_turma WHERE id_turma = ?`;

    let resp = await connection.query(comando, [id]);
    return resp[0];
}

//update

export async function update(id, turma) {
    const comando = `UPDATE tb_turma SET 
                    nm_turma = ?, ds_curso = ?, 
                    nr_ano_letivo = ?, qtd_capacidade = ?, 
                    bt_ativo = ?, dt_inclusao = ? WHERE id_turma = ?`;

    let [info] = await connection.query(comando, 
        [turma.nm_turma, turma.ds_curso, turma.nr_ano_letivo, turma.qtd_capacidade, turma.bt_ativo, turma.dt_inculsao, id]);

    return info.affectedRows;   
}

//delete

export async function deleteById(id) {
    const comando = `DELETE FROM tb_turma WHERE id_turma = ?`;

    let [info] = await connection.query(comando, [id]);

    return info.affectedRows;
}
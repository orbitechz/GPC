/* 
Autores:
 - Boushra Akl
 - Gustavo Piegat
 - Jean Moschen
 - Tiago Guillande
 - Vinicius Aquino
*/

const body = document.querySelector("body");
body.insertAdjacentHTML("afterbegin", `<sidebar class="navMenu">
<figure><img class="logo-sidebar" src="/assets/imgs/logo-rt-int-2.png" alt="Sistema GPC Rotary"></figure>
<nav>
    <ul>
        <li><a href="/pages/home/home.html"><i class="bi bi-house-fill"></i> Início</a></li>
        <li><a href="/pages/usuarios/usuarios.html"><i class="bi bi-people-fill"></i> Usuários</a></li>
        <li><a href="/pages/ativos/ativos.html"><i class="bi bi-archive-fill"></i> Ativos</a></li>
        <li><a href="/pages/relatorios/relatorios.html"><i class="bi bi-archive-fill"></i> Relatórios</a></li>
        <li><a href="/pages/ajustes/ajustes.html"><i class="bi bi-gear-fill"></i> Ajustes</a></li>
        <li><a href="#"><i class="bi bi-bell-fill"></i> Notificações</a></li>
    </ul>
</nav>

<nav class="logout">
    <ul>
        <li><a href="../../index.html"><i class="bi bi-box-arrow-right"></i> Deslogar</a></li>
    </ul>
</nav>
</sidebar>`);


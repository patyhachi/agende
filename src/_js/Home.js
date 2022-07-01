var profissionais = {
    "encanador": ["a", "b", "c"],
    "desenvolvedor": ["x", "y", "z"],
};

$(".buscar").on("click", function () {
    Buscar();
});

function Buscar() {
    var profissao = $(".input-search").val();
    console.log(profissao);

    profissionais[profissao];

    window.location.replace("../ResultadoBusca/search-results.html?profissao=" + profissao);

}
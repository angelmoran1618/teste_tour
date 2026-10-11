const cenas = {
    imagem1: "img/0002.jpg",
    imagem2: "img/0004.jpg",
    imagem3: "img/0006.jpg"
};

const viewer = pannellum.viewer("panorama", {
    default: {
        firstScene: "imagem1",
        autoLoad: true,
        showControls: true,
        mouseZoom: true,
        draggable: true,
        hfov: 100
    },

    scenes: {
        imagem1: {
            title: "Imagem 1",
            type: "equirectangular",
            panorama: cenas.imagem1
        },

        imagem2: {
            title: "Imagem 2",
            type: "equirectangular",
            panorama: cenas.imagem2
        },

        imagem3: {
            title: "Imagem 3",
            type: "equirectangular",
            panorama: cenas.imagem3
        }
    }
});

function abrirCena(nome) {
    viewer.loadScene(nome);
}

viewer.on("load", function () {
    document.getElementById("status").textContent =
        "Imagem carregada: " + viewer.getScene();
});

viewer.on("scenechange", function (sceneId) {
    document.getElementById("status").textContent =
        "Imagem carregada: " + sceneId;
});

viewer.on("error", function (message) {
    document.getElementById("status").textContent =
        "ERRO: " + message;

    console.error("Pannellum:", message);
});

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi Lol'deki suikastçılardan birisidir?", { a: "Yasuo", b: "Malphite", c: "Draven" , d: "Zed" }, "d"),
    new Soru("2-Hangisi 18 levelde en uzun menzile sahip nişancıdır?", { a: "Jhin", b: "Vayne", c: "Tristina", d: "Twitch" }, "c"),
    new Soru("3-Hangisi hikaye bakımından en güçlü karekterdir?", { a: "Aurelion Sol", b: "Bard", c: "Jax", d: "Nidale" }, "a"),
    new Soru("4-Lolde ne az seçilen rol hangisidir?", { a: "Orta koridor", b: "Üst koridor", c: "Nişancı", d: "Ormancı" }, "d")
];
export default {
    URI: "mongodb+srv://user1:123456789user@cluster0.dwlanvy.mongodb.net",
    datebase: "skelbimu_web_programa",
    collection: "skelbimai",
    regexp_antraste: /^[A-Z,a-z,ą,č,ę,ė,į,š,ų,ū,ž,Ą,Č,Ę,Ė,Į,Š,Ų,Ū,Ž0-9 -,.!?:;()'*@~]{3,64}$/,
    regexp_tekstas: /^[A-Z,a-z,a-z,ą,č,ę,ė,į,š,ų,ū,ž,Ą,Č,Ę,Ė,Į,Š,Ų,Ū,Ž0-9 -,.!?:;()'*@~]{6,1024}$/,
    regexp_miestas: /^[A-Z,a-z,a-z,ą,č,ę,ė,į,š,ų,ū,ž,Ą,Č,Ę,Ė,Į,Š,Ų,Ū,Ž -,.!?:;()'*@~]{4,40}$/,
    regexp_tel_nr: /^\+370[0-9]{8}$/,
    regexp_kaina: /^[0-9]{1,60}$/
}
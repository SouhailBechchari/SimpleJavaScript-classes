class Etudiant {
    constructor(A, B, C) {
        this.cne = A;
        this.nom = B;
        this.prenom = C;
    }
    getcne() {
        return this.cne;
    }
    setcne(n) {
        this.cne = n;
    }
    getnom() {
        return this.nom;
    }
    setnom(n) {
        this.nom = n;
    }
    getprenom() {
        return this.prenom;
    }
    setprenom(n) {
        this.prenom = n;
    }
    afficherDetails() {
        console.log("Nom: " + this.nom +" cne:" + this.cne +" prenom:" + this.prenom);
      }
    equals(other){
        this.cne == other.cne
    }
}

ab = new Etudiant("EE20910", "SOUHAIL", "BECHCHARI")
bc = new Etudiant("EE37218", "YASSINE", "MAZHAR")
cd = new Etudiant("EE29219", "AAROUI", "ABDLADIM")


class Proprietaire {
    constructor(A, B, C, D) {

        this.nom = B;
        this.prenom = C;
        this.cin = A;
        this.age = D;
    }
    getcin() {
        return this.cin;
    }
    setcin(n) {
        this.cin = n;
    }
    getnom() {
        return this.nom;
    }
    setnom(n) {
        this.nom = n;
    }
    getprenom() {
        return this.prenom;
    }
    setprenom(n) {
        this.prenom = n;
    }
    afficherDetails() {
        console.log("Nom: " + this.nom +" cin:" + this.cin +" prenom:" + this.prenom +" age:" + this.age);
      }
    equals(other){
        this.cin == other.cin
    }
}

class Maison {
    constructor(A, B, C) {
    
        this.adresse = B;
        this.nbetages = C;
        this.nbchambres = A;
        
    }
    getadresse() {
        return this.adresse;
    }
    setadresse(n) {
        this.adresse = n;
    }
    getnbetages() {
        return this.nbetages;
    }
    setnbetages(n) {
        this.nbetages = n;
    }
    getnbchambres() {
        return this.nbchambres;
    }
    setnbchambres(n) {
        this.nbchambres = n;
    }
}

class Produit {
    constructor(nom, prix) {
      this.nom = nom;
      this.prix = prix;
    }
  
    afficherDetails() {
      console.log(`Nom: ${this.nom}, Prix: ${this.prix}`);
    }
  }
  
  class Médicament extends Produit {
    constructor(nom, prix, dosage) {
      super(nom, prix);
      this.dosage = dosage;
    }
  
    afficherDetails() {
      super.afficherDetails();
      console.log(`Dosage: ${this.dosage}`);
    }
  }
  
  class ParaPharm extends Produit {
    constructor(nom, prix, categorie) {
      super(nom, prix);
      this.categorie = categorie;
    }
  
    afficherDetails() {
      super.afficherDetails();
      console.log(`Catégorie: ${this.categorie}`);
    }
  }
  
  const aspirine = new Médicament("Aspirine", 5.99, "500mg");
  const shampoing = new ParaPharm("Shampoing", 8.49, "Hygiène capillaire");
  
  aspirine.afficherDetails();
  shampoing.afficherDetails();
  

  class Batiment {
    constructor(nom, adresse, nbEtages) {
      this.nom = nom;
      this.adresse = adresse;
      this.nbEtages = nbEtages;
    }
  
    afficherDetails() {
      console.log(`Nom: ${this.nom}, Adresse: ${this.adresse}, Nombre d'étages: ${this.nbEtages}`);
    }
  }
  
  class Maison extends Batiment {
    constructor(nom, adresse, nbEtages, nbChambres, surfaceJardin) {
      super(nom, adresse, nbEtages);
      this.nbChambres = nbChambres;
      this.surfaceJardin = surfaceJardin;
    }
  
    afficherDetails() {
      super.afficherDetails();
      console.log(`Nombre de chambres: ${this.nbChambres}, Surface du jardin: ${this.surfaceJardin} m²`);
    }
  }
  
  class Appartement extends Batiment {
    constructor(nom, adresse, nbEtages, nbPieces, superficie) {
      super(nom, adresse, nbEtages);
      this.nbPieces = nbPieces;
      this.superficie = superficie;
    }
  
    afficherDetails() {
      super.afficherDetails();
      console.log(`Nombre de pièces: ${this.nbPieces}, Superficie: ${this.superficie} m²`);
    }
  }
  

  const maison1 = new Maison("Villa Belle Vue", "10 Rue de la Paix", 2, 4, 500);
  const appartement1 = new Appartement("Appartement Lumière", "20 Avenue des Champs", 5, 3, 120);
  
  maison1.afficherDetails();
  appartement1.afficherDetails();
  